import React from "react";
import { Typography, CardMedia, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { ProductList } from "../../redux/slice/ProductList";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "../../redux/store/hook";
import { Settings, CustomArrowProps } from "react-slick";
import { LinkStyle } from "../Navbar/navbarStyle";
const ProductCardDes = styled(Typography)(() => ({
  textDecoration: "none",
  color: "black",
}));
export const Next = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        right: "0px",
        zIndex: 2,
        color: "black",
        backgroundColor: "black",
        height: "50px",
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
};

export const Pre = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "0px",
        zIndex: 2,
        color: "black",
        backgroundColor: "black",
        height: "50px",
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
};
export const Products = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const products = useAppSelector(ProductList);

  const settings: Settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Next />,
    prevArrow: <Pre />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          nextArrow: <Next />,
          prevArrow: <Pre />,
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
      <div ref={ref}>
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
          <Typography
            style={{ paddingTop: "60px", textAlign: "center" }}
            variant="h3"
          >
            UltraBoost
          </Typography>

          <Slider {...settings}>
            {products?.map((product) => {
              return (
                <div key={nanoid()}>
                  <LinkStyle href={`productsList/${product._id}`}>
                    <Box
                      sx={{
                        "&:hover": {
                          border: "1px solid black",
                          cursor: "pointer",
                        },
                        width: "98%",
                      }}
                    >
                      <CardMedia
                        image={`${product.img}`}
                        style={{ height: "300px", width: "100%" }}
                      ></CardMedia>
                      <ProductCardDes variant="h5">
                        {product.title}
                      </ProductCardDes>
                      <ProductCardDes>{product.type}</ProductCardDes>
                    </Box>
                  </LinkStyle>
                </div>
              );
            })}
          </Slider>
        </motion.div>
      </div>
    </>
  );
};
