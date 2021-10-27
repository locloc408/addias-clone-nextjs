import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../component/Helper/ConnectDB";
import Advertises from "../../../component/model/Advertises/Advertises";
import { advertises } from "../../../component/model/Advertises/Advertises";
const handleAdvertise = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  if (req.method === "GET") {
    try {
      const Advertisement = await Advertises.find();
      res.status(200).send(Advertisement);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
export default handleAdvertise;
