import NextAuth, { Profile } from "next-auth";
import connectDB from "../../../component/Helper/ConnectDB";
import Providers from "next-auth/providers";
import User from "../../../component/model/User/User";
import axios from "axios";
import { profile } from "console";
export default NextAuth({
  //Configure JWT
  session: {
    jwt: true,
  },
  //Specify Provider
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
        gender: {
          type: "text",
        },
        firstName: {
          type: "text",
        },
        lastName: {
          type: "text",
        },
      },
      async authorize(credentials) {
        await connectDB();
        const existUser = await User.findOne({ email: credentials.email });
        if (!existUser) {
          throw new Error("No user found!");
        }
        return { email: existUser.email };
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  // callbacks: {
  //   async redirect() {
  //     return "/";
  //   },
  // },
  database: process.env.MONGODB_URI,
});
