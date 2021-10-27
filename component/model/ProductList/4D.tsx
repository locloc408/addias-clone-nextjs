import mongoose, { Schema } from "mongoose";
export const collection4d = new Schema({
  title: String,
  type: String,
  shoetype: String,
  price: String,
  sizes: Array,
  img: String,
  img2: String,
  id: Number,
});
export default mongoose.models.collec4d ||
  mongoose.model("collec4d", collection4d);
