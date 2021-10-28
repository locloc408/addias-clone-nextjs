import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../component/Helper/ConnectDB";
import { DataType } from "../../../component/Type/ProductType";
import Adidas from "../../../component/model/ProductList/Adidas";
import collect4d from "../../../component/model/ProductList/4D";
async function handleRequest(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  if (req.method === "GET") {
    try {
      //const Adidas = mongoose.model("Adidas", AdidasCollection);
      // const found = await collect4d.insertMany(data);
      const news = await Adidas.find();
      return res.status(200).json(news);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
  }
}
export default handleRequest;
