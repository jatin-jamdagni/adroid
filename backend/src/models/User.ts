import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";
import { BadRequestError, NotFoundError } from "../config/customError";

// 1️⃣ Define TypeScript interface for User
export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  login_pin: string;
  phone_number: string;
  date_of_birth: Date;
  biometricKey: string;
  gender: "male" | "female" | "other";
  wrong_pin_attempts: number;
  blocked_until_pin: Date;
  wrong_password_attempts: number;
  blocked_until_password: Date;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

// 2️⃣ Regex validators
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;

// 3️⃣ Define the Schema
const UserSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [emailRegex, "Please provide a valid email address"],
    },
    name: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 3,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    login_pin: {
      type: String,
      required: true,
      maxlength: 4,
      minlength: 4,
    },
    phone_number: {
      type: String,
      match: [phoneRegex, "Please provide a valid phone number"],
      unique: true,
      sparse: true,
    },
    date_of_birth: {
      type: Date,
      required: false,
    },
    biometricKey: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: false,
    },
    wrong_pin_attempts: {
      type: Number,
      default: 0,
    },
    blocked_until_pin: {
      type: Date,
      default: null,
    },
    wrong_password_attempts: {
      type: Number,
      default: 0,
    },
    blocked_until_password: {
      type: Date,
      default: null,
    },
    balance: {
      type: Number,
      default: 5000.0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// 🔑 Pre-save middlewares
UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

UserSchema.pre("save", async function () {
  if (this.isModified("login_pin")) {
    const salt = await bcrypt.genSalt(10);
    this.login_pin = await bcrypt.hash(this.login_pin, salt);
  }
});

// 🔄 Static method to update PIN
UserSchema.statics.updatePin = async function (email: string, newPin: string) {
  try {
    const user = await this.findOne({ email });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const isSamePin = await bcrypt.compare(newPin, user.login_pin);
    if (isSamePin) {
      throw new BadRequestError("New PIN must be different from the old PIN");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPIN = await bcrypt.hash(newPin, salt);

    await this.findOneAndUpdate(
      { email },
      { login_pin: hashPIN, wrong_pin_attempts: 0, blocked_until_pin: null }
    );

    return {
      success: true,
      message: "PIN updated successfully!",
    };
  } catch (err) {
    throw err;
  }
};

// 🔄 Static method to update Password
UserSchema.statics.updatePassword = async function (
  email: string,
  newPassword: string
) {
  try {
    const user = await this.findOne({ email });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      throw new BadRequestError(
        "New password must be different from the old password"
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    await this.findOneAndUpdate(
      { email },
      {
        password: hashPassword,
        wrong_password_attempts: 0,
        blocked_until_password: null,
      }
    );

    return {
      success: true,
      message: "Password updated successfully!",
    };
  } catch (err) {
    throw err;
  }
};

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;
