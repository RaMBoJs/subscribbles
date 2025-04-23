import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    categoryText: { type: String, required: true },
    iconName: { type: String, required: true },
  },
  {
    collection: "categories",
  }
);

const categoriesModel =
  mongoose.models.Category || mongoose.model("Category", categoriesSchema);

export default categoriesModel;
