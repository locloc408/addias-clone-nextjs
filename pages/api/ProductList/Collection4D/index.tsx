import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../component/Helper/ConnectDB";
import collect4d from "../../../../component/model/ProductList/4D";
import { cors } from "../../../../component/Helper/Cors/cors";
import runMiddleware from "../../../../component/Helper/Cors/cors";
async function handleRequest(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  await connectDB();
  if (req.method === "GET") {
    try {
      const news = await collect4d.find();
      return res.status(200).json(news);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
export default handleRequest;
