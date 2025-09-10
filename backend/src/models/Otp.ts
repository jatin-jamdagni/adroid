import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs"
import { sendAndSaveOtp, verifyOtp } from "../services/otpService";
export type OTPTypeProps = "phone" | "email" | "reset_password" | "reset_pin";

export interface IOtp extends Document {
  email: string;
  otp: string;
  createdAt: Date;
  otp_type: OTPTypeProps;
}

const OtpSchema = new Schema<IOtp>(
  {
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 60 * 5 },
    otp_type: {
      type: String,
      required: true,
      enum: ["phone", "email", "reset_password", "reset_pin"],
    },
  },
  { timestamps: false }
);

 

OtpSchema.pre("save", async function(next){
  if(this.isNew){
    const salt  = await bcrypt.genSalt(10);
    await sendAndSaveOtp(this.email, this.otp, this.otp_type);

    this.otp = await bcrypt.hash(this.otp, salt)
  }
  next()
})


OtpSchema.methods.compareOtp = async function(enteredOtp :string){
  return await bcrypt.compare(enteredOtp, this.otp)
}
// const Otp = mongoose.models.Otp || mongoose.model<IOtp>("Otp", OtpSchema);
// export default Otp;
//  (mongoose.models.Otp as Model<IOtp>) ||
const Otp = mongoose.model<IOtp>("Otp", OtpSchema);
export default Otp;

