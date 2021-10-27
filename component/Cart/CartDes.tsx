import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { numberCart, totalPrices } from "../../redux/slice/Cart";
import { useAppSelector } from "../../redux/store/hook";
import { numberWithCommas } from "../Helper/regexFunction";
export const CartDes = () => {
  const NumberCart = useAppSelector(numberCart);
  const TotalPrice = useAppSelector(totalPrices);
  const cartPrice = numberWithCommas(TotalPrice);
  return (
    <Box
      sx={{
        margin: {
          lg: "10px",
          xs: 0,
        },
        width: {
          lg: "55%",
          xs: "100%",
        },
        marginTop: {
          lg: "120px",
          xs: "30px",
        },
        paddingLeft: {
          xs: "15px",
        },
        position: "relative",
        overflow: "auto",
      }}
    >
      <div style={{ position: "sticky", top: 0 }}>
        <Box style={{ borderBottom: "1px solid black" }}>
          <Typography style={{ fontSize: "18px" }}>GIỎ HÀNG CỦA BẠN</Typography>
          <Typography>{NumberCart} Mặt Hàng</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: {
                xs: "40px",
              },
            }}
          >
            <Typography style={{ fontSize: "13px" }}>
              Tổng Giá Trị Sản Phẩm :{" "}
            </Typography>
            <Typography>{cartPrice}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: {
                xs: "40px",
              },
            }}
          >
            <Typography>Tổng Phí Giao Hàng </Typography>
            <Typography>MIỄN PHÍ</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">TỔNG CỘNG {cartPrice}</Typography>
          <Button
            style={{
              border: "1px groove black",
              padding: "10px",
              marginTop: "15px",
              width: "235px",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Thanh Toán
          </Button>
        </Box>
      </div>
    </Box>
  );
};
