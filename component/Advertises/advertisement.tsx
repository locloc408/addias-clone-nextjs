import {
  Typography,
  CardMedia,
  CardContent,
  Pagination,
  Stack,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Advertise } from "../Type/Advertise";
import Slider from "react-slick";
import { Settings } from "react-slick";
import React, { useRef, useState } from "react";
import { LinkStyle } from "../Navbar/navbarStyle";
import { useMediaQuery, useTheme } from "@mui/material";
export const AdvertiseList = ({
  inView,
  advertises,
}: {
  advertises: Advertise[];
  classes: any;
  inView: boolean;
}) => {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const slickref = useRef<any>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleSlick = (event: React.ChangeEvent<unknown>, value: number) => {
    if (value > slideIndex) {
      slickref.current.slickNext();
      setSlideIndex(value);
    }
    if (value < slideIndex) {
      slickref.current.slickPrev();
      setSlideIndex(value);
    }
  };
  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <motion.div
        initial={{ x: "-100vw", opacity: 0.4 }}
        animate={
          inView
            ? {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }
            : ""
        }
      >
        <Slider ref={slickref} {...settings}>
          {advertises?.map((ad: Advertise) => {
            return (
              <LinkStyle
                href="https://www.adidas.com.vn/vi/search?q=tokyo"
                key={ad._id.toString()}
              >
                <CardMedia
                  image={`${ad.pictureSRC}`}
                  style={{ height: "500px", width: "100%" }}
                ></CardMedia>
                <CardContent>
                  <Typography variant="h4">{ad.title}</Typography>
                  <Typography>{ad.desc}</Typography>
                </CardContent>
              </LinkStyle>
            );
          })}
        </Slider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={isMobile ? 4 : 2}
              page={slideIndex}
              onChange={handleSlick}
            ></Pagination>
          </Stack>
        </Box>
      </motion.div>
    </>
  );
};
