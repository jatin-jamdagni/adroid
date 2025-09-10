 
import mongoose from "mongoose";

let isConnected = false; 

 async function connectDB(): Promise<void> {
  if (isConnected) {
 
    console.log("⚡ Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL!);
    isConnected = true;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}

export default connectDB