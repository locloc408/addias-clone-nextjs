import { useAppSelector } from "../../redux/store/hook";
import { Carts } from "../../redux/slice/Cart";
import { EmtyCart } from "./EmtyCart";
import { CartContainer } from "./CartContainer";
import { CartDes } from "./CartDes";
import { Box } from "@mui/material";
export const CartShopping = () => {
  const carts = useAppSelector(Carts);
  const isEmty = !carts.length;
  return isEmty ? (
    <EmtyCart />
  ) : (
    <Box
      sx={{
        display: {
          xs: "block",
          lg: "flex",
        },
        flexDirection: "row",
      }}
    >
      <CartContainer />
      <CartDes />
    </Box>
  );
};
