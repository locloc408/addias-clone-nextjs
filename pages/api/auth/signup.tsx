import connectDB from "../../../component/Helper/ConnectDB";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../component/model/User/User";
import { cors } from "../../../component/Helper/Cors/cors";
import runMiddleware from "../../../component/Helper/Cors/cors";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  await connectDB();
  const { method } = req;
  if (method === "POST") {
    const { email, password, firstName, lastName, gender } = req.body;
    const existUser = await User.findOne({ email: email });
    console.log(existUser);
    try {
      if (existUser) {
        res.status(200).json({ message: "Email da ton tai" });
      } else {
        const result = await User.create({
          email,
          password,
          firstName,
          lastName,
          gender,
        });
        console.log(result);
        res.status(200).json({ result, message: "success" });
      }
    } catch (error) {
      console.log("hahahhah");
    }
  }
}
export default handler;
