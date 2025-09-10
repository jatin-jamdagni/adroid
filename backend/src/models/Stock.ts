import mongoose, { Schema, Document, Model } from "mongoose";

export interface IStock extends Document {
    symbol: string;
    companyName: string;
    iconUrl: string;
    lastDayPrice: number;
    currentPrice: number;
    dayTimeSeries: any[];
    tenMinTimeSeries: any[];
}

const StockSchema = new Schema(
    {
        symbol: { type: String, required: true, unique: true },
        companyName: { type: String, required: true },
        iconUrl: { type: String },
        lastDayPrice: { type: Number, required: true },
        currentPrice: { type: Number, required: true },
        dayTimeSeries: { type: [Object], default: [] },
        tenMinTimeSeries: { type: [Object], default: [] },
    },
    { timestamps: true }
);

const Stock: Model<IStock> =
  mongoose.model<IStock>("Stock", StockSchema);

export default Stock;
