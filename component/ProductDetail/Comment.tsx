import { Typography, Box, Modal, Button } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useSession } from "next-auth/client";
import { useAppSelector } from "../../redux/store/hook";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { getData } from "../Helper/Axios/fetchProductList";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import { email } from "../../redux/slice/User";
import { nanoid } from "@reduxjs/toolkit";
import { ObjectID } from "bson";
import { useForm } from "react-hook-form";
import { TextInput, StarRating } from "../Form/TextInput";
import { motion } from "framer-motion";
import StarRate from "react-rating-stars-component";
interface CommentContainer {
  title: string;
  comment: string;
  time: string;
  starRating: number;
  _id: ObjectID;
}
export interface Commentform {
  title: string;
  comment: string;
  starRating: number;
}
interface CommentType {
  EmailCommenter: String;
  comments: [CommentContainer];
}
export interface CommentsType {
  commenters: CommentType[];
  productId: ObjectID;
}
interface data {
  0: CommentType[];
}
const defaultValues = {
  title: "",
  comment: "",
  starRating: 0,
};

const StarRateLoop = (n: number) => {
  const stars = Math.floor(n);
  let loop = [];
  for (let i = 0; i < stars; i++) {
    loop.push(<StarRateIcon key={nanoid()} />);
  }
  return loop;
};
export const Comment = ({ Collection4dId }) => {
  const { mutate } = useSWRConfig();
  const [showModal, setModal] = useState(false);
  const [session] = useSession();
  const Email = useAppSelector(email);
  const fetcher = useCallback(
    (url) => axios.get(url).then((res) => res.data),
    []
  );
  const handleComment = async ({ title, comment, starRating }) => {
    setModal(true);
    const time =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    reset(defaultValues);

    const data = await getData.Setcomment({
      _id: Collection4dId,
      Email,
      title,
      comment,
      starRating,
      time,
    });
    mutate(
      `${process.env.NEXT_PUBLIC_BASE_URI}/ProductList/Comment/${Collection4dId} `,
      data,
      false
    );
    console.log(data);
  };
  const { data } = useSWR<data>(
    `${process.env.NEXT_PUBLIC_BASE_URI}/ProductList/Comment/${Collection4dId} `,
    fetcher
  );
  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm<Commentform>({ defaultValues });
  const today = new Date();
  const StarRatings = () => {
    if (data && data[0]?.length !== undefined) {
      const starRating = data[0].map((a) => a.comments);
      if (starRating.length > 1) {
        const Total: any = starRating.reduce((prev: any, cur: any) => {
          const total = prev.length + cur.length;
          return total;
        });
      } else {
        const total = starRating[0].length;
        return total;
      }
    } else {
      return 0;
    }
  };
  const starRatingAverage = () => {
    if (data && data[0]?.length !== undefined) {
      if (StarRatings() !== 0) {
        const starRating = data[0].map((a) => {
          const b = a.comments.map((c) => c.starRating);
          return b;
        });
        if (starRating.length > 1) {
          const TotalStarRatings = starRating.flat(2).reduce((prev, cur) => {
            return prev + cur;
          });
          const averageStarRatings = TotalStarRatings / StarRatings();
          return averageStarRatings;
        } else {
          const totalStarRatings = starRating[0].reduce((prev, cur) => {
            return prev + cur;
          });
          return totalStarRatings / StarRatings();
        }
      } else {
        return 0;
      }
    }
  };
  return (
    <Box
      sx={{
        paddingLeft: "20px",
        paddingRight: "20px",
        display: {
          lg: "flex",
          xs: "block",
        },
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "16px",
          paddingRight: "120px",
        }}
      >
        <Typography sx={{ fontSize: "32px", fontWeight: 500 }}>
          XẾP HẠNG VÀ ĐÁNH GIÁ
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "245px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#2ada71",
              }}
            >
              <Box sx={{ fontSize: "56px", paddingRight: "15px" }}>
                {starRatingAverage()}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  {StarRateLoop(starRatingAverage()).length > 0 &&
                    StarRateLoop(starRatingAverage()).map((loop) => loop)}
                </Box>
                <Box sx={{ fontSize: "18px" }}>{StarRatings()} Reviews</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: {
            lg: "50%",
            xs: "100%",
          },
        }}
      >
        {session && (
          <Box>
            <Box>
              <TextInput
                control={control}
                name={"title"}
                errors={errors}
                label={"Tiêu đề"}
                type={"text"}
              ></TextInput>
              <TextInput
                control={control}
                name={"comment"}
                errors={errors}
                label={"Bình luận"}
                type={"text"}
              ></TextInput>

              <StarRating control={control} name={"starRating"} />
              <Button
                onClick={handleSubmit(handleComment)}
                sx={{ backgroundColor: "#804AE8", color: "white" }}
                type="submit"
              >
                Bình Luận
              </Button>
            </Box>
          </Box>
        )}
        {data &&
          data[0]?.map((commenters: CommentType) => {
            const comments = commenters.comments?.map(
              (comment: CommentContainer) => {
                return (
                  <div key={nanoid()} style={{ paddingTop: "20px" }}>
                    <Box sx={{ borderBottom: "1px black solid" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <StarRate
                          size={24}
                          value={comment.starRating}
                          emptyicon={<StarRateIcon />}
                          edit={false}
                        ></StarRate>
                        <Typography sx={{ marginTop: "10px" }}>
                          {comment.time}
                        </Typography>
                      </div>

                      <Typography sx={{ fontSize: "34px", fontWeight: 500 }}>
                        {comment.title}
                      </Typography>

                      <Typography sx={{ fontSize: "19px" }}>
                        {comment.comment}
                      </Typography>
                      <Typography>{commenters.EmailCommenter}</Typography>
                    </Box>
                  </div>
                );
              }
            );
            return <div key={nanoid()}>{comments}</div>;
          })}
      </Box>
      <Modal open={showModal} onClose={() => setModal(false)}>
        <motion.div
          initial={{ y: "-100vh", opacity: 0.2 }}
          animate={{ y: "50vh", opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <div style={{ backgroundColor: "white" }}>
              <Typography>Cảm ơn bạn đã đánh giá</Typography>
            </div>
          </Box>
        </motion.div>
      </Modal>
    </Box>
  );
};
