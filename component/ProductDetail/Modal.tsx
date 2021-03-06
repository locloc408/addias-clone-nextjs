import React from "react";
import {
  Typography,
  Box,
  CardMedia,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
import { ButtonNeu } from "../FirstHero/firstHeroStyle";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ModalShow } from "./ProductDetailStyle";
import { DataType } from "../../component/Type/ProductType";
import { numberCart, totalPrices } from "../../redux/slice/Cart";
import { useAppSelector } from "../../redux/store/hook";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { numberWithCommas } from "../Helper/regexFunction";
export const ModalPage = ({
  IsmodalShow,
  Product,
  temparoSize,
  ChangeInModal,
}: {
  Product: DataType;
  temparoSize: string;
  ChangeInModal: () => void;
  IsmodalShow: boolean;
}) => {
  //   const { productByID } = useSelector((state) => state.productByID);
  const { title, img, price } = Product;
  //   const { numberCart, totalPrices } = useSelector((state) => state.Carts);
  //   const history = useHistory();
  const NumberCart = useAppSelector(numberCart);
  const TotalPrice = useAppSelector(totalPrices);
  const cartPrice = numberWithCommas(TotalPrice);
  const router = useRouter();
  const handleClick = () => {
    ChangeInModal();
  };
  // const classes = useStyle();
  return (
    <>
      <Modal open={IsmodalShow}>
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
            <ModalShow>
              <Box style={{ margin: "20px" }}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h5">
                    ???? TH??M TH??NH C??NG V??O GI??? H??NG C???A B???N !
                  </Typography>
                  <IconButton
                    onClick={handleClick}
                    style={{
                      border: "1px solid black",
                      borderRadius: "0",
                      position: "relative",
                      left: "10px",
                      top: "10px",
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </Box>
                <Box style={{ display: "flex" }}>
                  <Box
                    style={{
                      display: "flex",
                      margin: "20px",
                      borderRight: "1px solid black",
                      width: "45%",
                    }}
                  >
                    <CardMedia
                      style={{ height: "125px", width: "200px" }}
                      image={img}
                    />
                    <Box style={{ marginLeft: "20px", marginRight: "20px" }}>
                      <Typography>{title}</Typography>
                      <Typography>{price}??</Typography>
                      <Typography>{temparoSize}</Typography>
                      <Typography>S??? L?????ng : 1</Typography>
                    </Box>
                  </Box>
                  <Box style={{ margin: "10px", width: "55%" }}>
                    <Box style={{ borderBottom: "1px solid black" }}>
                      <Typography style={{ fontSize: "18px" }}>
                        GI??? H??NG C???A B???N
                      </Typography>
                      <Typography>{NumberCart} M???t H??ng</Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography style={{ fontSize: "13px" }}>
                          T???ng Gi?? Tr??? S???n Ph???m :{" "}
                        </Typography>
                        <Typography>{cartPrice}</Typography>
                      </Box>

                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>T???ng Ph?? Giao H??ng </Typography>
                        <Typography>MIEN PHI</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        T???NG C???NG {cartPrice}
                      </Typography>
                      <ButtonNeu
                        backgroundcolor={"white"}
                        left={180}
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => {
                          router.push("/cart");
                        }}
                      >
                        XEM L???I GI??? H??NG
                      </ButtonNeu>
                      <Button
                        style={{
                          border: "1px groove black",
                          padding: "10px",
                          marginTop: "15px",
                          width: "235px",
                        }}
                      >
                        Thanh To??n
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ModalShow>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};
