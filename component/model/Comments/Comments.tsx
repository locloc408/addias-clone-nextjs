import { ObjectID } from "bson";
import mongoose, { models, model } from "mongoose";
const commentsContainer = new mongoose.Schema({
  starRating: Number,
  time: String,
  title: String,
  comment: String,
});
const Comment = new mongoose.Schema({
  EmailCommenter: String,
  comments: [commentsContainer],
});
const CommentList = new mongoose.Schema(
  {
    productId: ObjectID,
    commenters: [Comment],
  },
  {
    collection: "CommentList",
  }
);
export default models.CommentList
  ? models.CommentList
  : model("CommentList", CommentList);
