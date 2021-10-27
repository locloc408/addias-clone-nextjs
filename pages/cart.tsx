import { Carts } from "../redux/slice/Cart";
import { Typography, Box } from "@mui/material";
import { useAppSelector } from "../redux/store/hook";
import { motion } from "framer-motion";
import { CartContainer } from "../component/Cart/CartContainer";
import { CartDes } from "../component/Cart/CartDes";
export default function Cart() {
  const carts = useAppSelector(Carts);
  const isEmty = !carts.length;
  const EmtyCart = () => {
    return (
      <>
        <Box sx={{ paddingLeft: "40px" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "48px" }}>
            Túi Của Bạn Rỗng
          </Typography>
        </Box>
      </>
    );
  };
  const FilledCart = () => {
    return (
      <>
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
      </>
    );
  };
  return <>{isEmty ? <EmtyCart /> : <FilledCart />}</>;
}
