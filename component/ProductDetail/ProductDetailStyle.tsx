import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
interface Sizebutton {
  activeindex: number;
}
export const SizeButton = styled(Button, {
  shouldForwardProp: () => true,
})<Sizebutton>(({ activeindex }) => ({
  "&:hover": {
    backgroundColor: "black",
    boxShadow: "none",
    color: "white",
    "& span": {
      color: "white",
    },
  },
  backgroundColor: activeindex === 1 && "black",
  color: activeindex === 1 && "white",
}));
export const ProductDetail = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.only("xs")]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));
export const ProductImgContainer = styled("div")(({ theme }) => ({
  width: "700px",
  backgroundColor: "#EBEEEF",
  display: "flex",
  paddingLeft: "100px",
  cursor: "zoom-in",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "50%",
    height: "300px",
    backgroundColor: "#EBEEEF",
  },
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    height: "300px",
    backgroundColor: "#EBEEEF",
    padding: 0,
  },
}));

export const ProductDesContainer = styled("div")(() => ({
  // position: "sticky",
  // transition: "transform 0.6s ease",
}));
export const ProductDes = styled("div")(() => ({
  marginTop: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "20px",
  marginRight: "20px",
  zIndex: -1,
}));
export const ProductDescription = styled("div")(() => ({
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  display: "flex",
  justifyContent: "center",
  position: "relative",
}));

export const ModalShow = styled("div")(() => ({
  width: "650px",
  height: "360px",
  backgroundColor: "white",
}));
