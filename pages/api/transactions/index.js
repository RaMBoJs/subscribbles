import connectDB from "@/lib/db/connectMongoDB";
import transactionsModel from "@/lib/db/models/transactions";

async function handleTransactionsData(request, response) {
  await connectDB();
  // --------  GET all data response: get all data records  --------
  if (request.method === "GET") {
    const data = await transactionsModel.find();
    response.status(200).json(data);
    return;
  }
  // --------  PUT/POST data request: create data record  --------
  if (request.method === "POST") {
    const data = request.body;
    await transactionsModel.create(data);
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

export default handleTransactionsData;
