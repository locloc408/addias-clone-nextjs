import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../component/Helper/ConnectDB";
import Collect4d from "../../../../component/model/ProductList/4D";
async function handleRequest(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const { Collect4dId } = req.query;
      const Product = await Collect4d.findById(Collect4dId);

      res.status(200).json(Product);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
export default handleRequest;
