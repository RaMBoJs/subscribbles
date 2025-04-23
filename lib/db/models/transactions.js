import mongoose from "mongoose";

// Model Schema for "transactions" collection in mongoDB
const transactionsSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: false },
  },
  {
    collection: "transactions",
  }
);

// Model based on "transactions" collection in mongoDB
const transactionsModel =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionsSchema);

export default transactionsModel;
