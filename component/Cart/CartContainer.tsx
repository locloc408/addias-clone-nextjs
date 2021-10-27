import React from "react";
import {
  Grid,
  Typography,
  Box,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/store/hook";
import { adjustCart, deleteCart } from "../../redux/slice/Cart";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  CardAction,
  CardContainer,
  CardImg,
  Cardcontain,
  Cardd,
} from "./CartStyle";
import { numberCart, Carts, totalPrices } from "../../redux/slice/Cart";
import { DataType } from "../Type/ProductType";
import { nanoid } from "@reduxjs/toolkit";
import { numberWithCommas } from "../Helper/regexFunction";
export const CartContainer = () => {
  const dispatch = useAppDispatch();
  const carts = useAppSelector(Carts);
  const TotalPrice = useAppSelector(totalPrices);
  const cartPrice = numberWithCommas(TotalPrice);
  const NumberCart = useAppSelector(numberCart);
  return (
    <CardContainer container spacing={3}>
      <Box>
        <Typography variant="h3">Giỏ Hàng Của Bạn</Typography>
        <Typography>
          Tổng Cộng : ({NumberCart} Sản Phẩm) {cartPrice}{" "}
        </Typography>
      </Box>
      {carts.map((cart: DataType) => {
        const { _id, img, title, price, quantity, size } = cart;
        const detailPrice = numberWithCommas(parseInt(price) * quantity);
        return (
          <Grid
            key={nanoid()}
            item
            sm={12}
            xs={12}
            sx={{
              "&.MuiGrid-item": {
                paddingLeft: {
                  xs: 0,
                },
              },
            }}
          >
            <Cardd>
              <CardImg image={img} />
              <Cardcontain>
                <CardContent>
                  <Typography>{title}</Typography>
                  <Typography>{detailPrice}đ</Typography>
                  <Typography>Size :{size}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    onClick={() => {
                      dispatch(adjustCart({ ...cart, quantity: 1 }));
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                  <Typography>{quantity}</Typography>
                  <IconButton
                    onClick={() => {
                      dispatch(adjustCart({ ...cart, quantity: -1 }));
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </CardActions>
              </Cardcontain>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    lg: "flex",
                  },
                  alignItems: {
                    xs: "flex-end",
                    lg: "flex-end",
                  },
                  flexDirection: {
                    xs: "column",
                    lg: "column",
                  },
                  marginRight: {
                    xs: "15px",
                  },
                }}
              >
                <IconButton
                  onClick={() => {
                    dispatch(deleteCart({ ...cart }));
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </Box>
            </Cardd>
          </Grid>
        );
      })}
    </CardContainer>
  );
};
