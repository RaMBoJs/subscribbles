import mongoose from "mongoose";

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) {
      // already connected
      return;
    }
    if (!process.env.MONGO_URI) {
      throw new Error("Please define the MONGO_URI in .env.local");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // exit process on failure
  }
}

export default connectDB;
