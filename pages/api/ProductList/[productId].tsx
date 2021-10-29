import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../component/Helper/ConnectDB";
import Adidas from "../../../component/model/ProductList/Adidas";
import User from "../../../component/model/User/User";
import { cors } from "../../../component/Helper/Cors/cors";
import runMiddleware from "../../../component/Helper/Cors/cors";
async function handleRequest(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  await connectDB();
  if (req.method === "GET") {
    try {
      const { productId } = req.query;
      const Product = await Adidas.findById(productId);

      res.status(200).json(Product);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
  }
}
export default handleRequest;
