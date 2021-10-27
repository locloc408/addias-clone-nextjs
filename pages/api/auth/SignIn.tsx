import connectDB from "../../../component/Helper/ConnectDB";
import { NextApiResponse, NextApiRequest } from "next";
import User from "../../../component/model/User/User";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { email, password } = req.body;
  console.log(email, password);
  const result = await User.findOne({
    email: email,
    password: password,
  });

  res.status(200).send(result);
}
export default handler;
