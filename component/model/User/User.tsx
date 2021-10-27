import mongoose, { models, model } from "mongoose";
export const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    password: String,
  },
  {
    collection: "Users",
  }
);
export default models.Users ? models.Users : model("Users", UserSchema);
