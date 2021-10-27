import { Typography, Button, ButtonGroup, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import { addCart } from "../../redux/slice/Cart";
import { useAppDispatch } from "../../redux/store/hook";
import { ModalPage } from "./Modal";
import { ProductDes, ProductDetail, SizeButton } from "./ProductDetailStyle";
import { useRef } from "react";
import { ButtonNeu } from "../FirstHero/firstHeroStyle";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { DataType } from "../Type/ProductType";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Image from "next/image";
import { nanoid } from "@reduxjs/toolkit";
import { numberWithCommas } from "../Helper/regexFunction";
import { ObjectId } from "mongoose";
import { MobileModal } from "./MobileModal";
export const ProductDetailComponent = ({ Product }: { Product: DataType }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { title, img, sizes, type, price } = Product;
  const [temparoSize, setTemporarySize] = useState("");
  const [isSizedClick, setIsSizeClick] = useState(false);
  const [ShowSizeIsNotChecked, setShowSizeIsNotChecked] = useState(false);
  const [IsmodalShow, setModalShow] = useState(false);
  const Emty = () => {
    return <p style={{ color: "red" }}>Vui Lòng Chọn Size Của Bạn</p>;
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const ChangeInModal = () => {
    setIsSizeClick(false);
    setActiveIndex("");
    setModalShow(false);
  };
  const [hideOnScroll, setHideOnScroll] = useState(null);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );
  const PriceValue = numberWithCommas(parseInt(price));
  return (
    <>
      <ProductDetail>
        <Box
          sx={{
            height: {
              lg: 600,
              xs: 400,
            },
            width: {
              lg: 600,
              xs: "100%",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <Image src={img} layout="fill" />
          </Box>
        </Box>
        <div>
          <div>
            <ProductDes>
              <Box>
                <Typography sx={{ margin: "10px" }} variant="h3">
                  {title}
                </Typography>
              </Box>
              <Typography sx={{ margin: "10px" }} variant="h5">
                {PriceValue}đ
              </Typography>
              <Typography sx={{ margin: "10px" }} variant="h5">
                CHỌN SIZE
              </Typography>

              <ButtonGroup sx={{ margin: "10px" }}>
                {sizes?.map((size, index) => {
                  return (
                    <SizeButton
                      disableRipple
                      activeindex={activeIndex === index ? 1 : 0}
                      onClick={() => {
                        setIsSizeClick(true);
                        setActiveIndex(index);
                        setTemporarySize(size);
                        setShowSizeIsNotChecked(false);
                      }}
                      key={nanoid()}
                    >
                      {size}
                    </SizeButton>
                  );
                })}
              </ButtonGroup>
              {ShowSizeIsNotChecked ? <Emty /> : null}
              <Box sx={{ margin: "10px" }}>
                <Typography sx={{ margin: "10px" }}>{type}</Typography>
                <Button
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "#804AE8",
                    color: "white",
                  }}
                >
                  Biểu Đồ Kích Cỡ
                </Button>
                <Box>
                  <ButtonNeu
                    //className={classes.button}
                    backgroundcolor="white"
                    left={197}
                    onClick={() => {
                      if (isSizedClick) {
                        dispatch(addCart({ ...Product, size: temparoSize }));
                        setModalShow(!IsmodalShow);
                      } else {
                        setShowSizeIsNotChecked(true);
                      }
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Thêm Vào Giỏ Hàng
                  </ButtonNeu>
                </Box>
              </Box>
            </ProductDes>
          </div>
        </div>
      </ProductDetail>
      {IsmodalShow && (
        <>
          {isMobile ? (
            <MobileModal
              ChangeInModal={ChangeInModal}
              IsmodalShow={IsmodalShow}
            />
          ) : (
            <ModalPage
              IsmodalShow={IsmodalShow}
              Product={Product}
              temparoSize={temparoSize}
              ChangeInModal={ChangeInModal}
            />
          )}
        </>
      )}
    </>
  );
};
