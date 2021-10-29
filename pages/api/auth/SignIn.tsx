import connectDB from "../../../component/Helper/ConnectDB";
import { NextApiResponse, NextApiRequest } from "next";
import User from "../../../component/model/User/User";
import { cors } from "../../../component/Helper/Cors/cors";
import runMiddleware from "../../../component/Helper/Cors/cors";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  await connectDB();
  const { email, password } = req.body;
  console.log(email, password);
  const result = await User.findOne({
    email: email,
    password: password,
  });

  res.status(200).json(result);
}
export default handler;
