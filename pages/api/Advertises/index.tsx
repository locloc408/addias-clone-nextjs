import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../component/Helper/ConnectDB";
import Advertises from "../../../component/model/Advertises/Advertises";
import { advertises } from "../../../component/model/Advertises/Advertises";
import { cors } from "../../../component/Helper/Cors/cors";
import runMiddleware from "../../../component/Helper/Cors/cors";
const handleAdvertise = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);
  await connectDB();
  if (req.method === "GET") {
    try {
      const Advertisement = await Advertises.find();
      res.status(200).json(Advertisement);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
export default handleAdvertise;
