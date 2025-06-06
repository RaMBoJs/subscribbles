import connectDB from "@/lib/db/connectMongoDB";
import categoriesModel from "@/lib/db/models/categories";

async function handleSingleCategoriesData(request, response) {
  const { id } = request.query;
  await connectDB();
  // --------  GET single data response: get single data record  --------
  if (request.method === "GET") {
    const data = await categoriesModel.findById(id);
    response.status(200).json(data);
    return;
  }
  // --------  DELETE single data response: delete single data record  --------
  if (request.method === "DELETE") {
    await categoriesModel.findByIdAndDelete(id);
    response.status(200).json({
      type: "Information",
      message: `Record ${id} successfully deleted.`,
    });
    return;
  }
  // --------  PUT single data response: update single data record  --------
  if (request.method === "PUT") {
    const data = request.body;
    await categoriesModel.findByIdAndUpdate(id, data);
    response.status(200).json({
      type: "Information",
      message: `Record ${id} successfully updated.`,
    });
    return;
  }
  // --------  invalid data response  --------
  return response
    .status(405)
    .json({ type: "Error", message: "Request method invalid." });
}

export default handleSingleCategoriesData;
