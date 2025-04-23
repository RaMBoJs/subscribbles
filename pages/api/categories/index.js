import connectDB from "@/lib/db/connectMongoDB";
import categoriesModel from "@/lib/db/models/categories";

async function handleCategoriesData(request, response) {
  await connectDB();
  // --------  GET all data response: get all data records  --------
  if (request.method === "GET") {
    const data = await categoriesModel.find();
    response.status(200).json(data);
    return;
  }
  // --------  PUT/POST data request: create data record  --------
  if (request.method === "PUT" || request.method === "POST") {
    const data = request.body;
    await categoriesModel.create(data);
    response
      .status(201)
      .json({ type: "Status", message: "Transaction created." });
    return;
  }

  // --------  invalid data response  --------
  return response
    .status(405)
    .json({ type: "Error", message: "Request method invalid." });
}

export default handleCategoriesData;
