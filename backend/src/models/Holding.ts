import mongoose, { Model, Schema } from "mongoose";
import { IStock } from "./Stock";
import { IUser } from "./User";

export interface IHolding extends Document {
    user: IUser
    stock: IStock
    quantity: number,
    buyPrice: number
}


const HoldingSchema = new Schema<IHolding>({
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
    buyPrice: {
        type: Number,
        required: true
    }
})

 
const Holding: Model<IHolding> =
    mongoose.model<IHolding>("Holding", HoldingSchema);

export default Holding;
