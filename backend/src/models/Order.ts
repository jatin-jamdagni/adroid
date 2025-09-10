
import mongoose, { Schema, Document, Model } from "mongoose";
import { IStock } from "./Stock";
import { IUser } from "./User";

export interface IOrder extends Document {
    user: IUser;
    stock: IStock;
    quantity: number;
    price: number
    type: "buy" | "sell"
    timeStamp: Date
    remainingBalance: number
}

const OrderSchema = new Schema<IOrder>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        stock: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Stock",
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ['buy', 'sell'],
            required: true
        },
        timeStamp: {
            type: Date,
            default: Date.now
        },
        remainingBalance: {
            type: Number,
            required: true,
            set: function (value: number) {
                if (typeof value !== "number") return value;
                return parseFloat(value.toFixed(2));
            }
        }

    },
    { timestamps: true }
);

const Order: Model<IOrder> =
    mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
