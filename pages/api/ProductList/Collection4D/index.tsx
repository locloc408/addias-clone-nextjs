import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../component/Helper/ConnectDB";
import collect4d from "../../../../component/model/ProductList/4D";
async function handleRequest(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const news = await collect4d.find();
      return res.status(200).send(news);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
export default handleRequest;
