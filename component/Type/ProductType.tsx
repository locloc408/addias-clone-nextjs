import { ObjectId } from "mongodb";

export interface DataType {
  _id: ObjectId;
  title: string;
  type: string;
  shoetype: string;
  price: string;
  sizes: string[];
  img: string;
  img2: string;
  __v: number;
  size: string;
  quantity: number;
}
