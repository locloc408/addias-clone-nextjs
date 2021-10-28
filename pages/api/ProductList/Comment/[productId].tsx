import connectDB from "../../../../component/Helper/ConnectDB";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import User from "../../../../component/model/User/User";
import Comments from "../../../../component/model/Comments/Comments";
import { CommentsType } from "../../../../component/ProductDetail/Comment";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  if (req.method === "POST") {
    try {
      const { _id, comment, Email, title, starRating, time } = req.body;

      const found = await Comments.findOne({ productId: _id });
      if (found) {
        const find = await Comments.findOne({
          productId: _id,
          commenters: {
            $elemMatch: {
              EmailCommenter: Email,
            },
          },
        });
        if (find) {
          const updatedWithnoComment = await Comments.findOneAndUpdate(
            {
              productId: _id,
              commenters: {
                $elemMatch: {
                  EmailCommenter: Email,
                },
              },
            },
            {
              $push: {
                "commenters.$.comments": {
                  comment,
                  title,
                  starRating,
                  time,
                },
              },
            },
            {
              new: true,
            }
          );
          const inforCommentsPost = await Comments.find({
            productId: _id,
          });
          const comments = inforCommentsPost.map((cms) => cms.commenters);
          return res.status(200).json([...comments]);
        } else {
          const updatedWithalreadyComment = await Comments.findOneAndUpdate(
            {
              productId: _id,
            },
            {
              $push: {
                commenters: {
                  EmailCommenter: Email,
                  comments: [
                    {
                      comment,
                      title,
                      starRating,
                      time,
                    },
                  ],
                },
              },
            },

            { new: true }
          );
          const inforCommentsPost = await Comments.find({
            productId: _id,
          });
          const comments = inforCommentsPost.map((cms) => cms.commenters);
          res.status(200).json([...comments]);
        }
        const updatewithalreadyEmail = await Comments.findOneAndUpdate(
          { productId: _id },
          {
            $push: {
              emailCommenter: Email,
              comments: {
                comment,
                title,
                time,
                starRating,
              },
            },
          },
          { new: true }
        );
        res.status(200).json(updatewithalreadyEmail);
      } else {
        const result = await Comments.insertMany([
          {
            productId: _id,
            commenters: [
              {
                EmailCommenter: Email,
                comments: [
                  {
                    starRating,
                    time,
                    title,
                    comment,
                  },
                ],
              },
            ],
          },
        ]);
        const commenter = result.map((a) => a.commenters);
        return res.status(200).json([...commenter]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (req.method === "GET") {
    try {
      const { productId } = req.query;
      const inforCommentsPost = await Comments.find({
        productId: productId,
      });
      const comments = inforCommentsPost.map((cms) => cms.commenters);
      console.log(comments);
      res.status(200).json(comments);
    } catch (error) {
      console.log(error);
    }
  }
};
export default handler;
