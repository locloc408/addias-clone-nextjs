import { ObjectId } from "bson";

export interface Advertise {
  _id: ObjectId;
  pictureSRC: string;
  title: string;
  desc: string;
}
