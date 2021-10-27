import mongoose, { Schema } from "mongoose";
export const AdidasCollection = new Schema({
  title: String,
  type: String,
  shoetype: String,
  price: String,
  sizes: Array,
  img: String,
  img2: String,
});
export default mongoose.models.Adidas ||
  mongoose.model("Adidas", AdidasCollection);
