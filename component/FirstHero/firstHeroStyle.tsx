import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
export const FirstHeros = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  position: "relative",
  zIndex: -3,
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "300px",
  },
}));
export const PosterContain = styled("div")(({ theme }) => ({
  marginLeft: "20px",
  position: "absolute",
  left: "20px",
  top: "-400px",
  width: "25rem",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    left: "0",
    top: "-230px",
    width: "50%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    position: "absolute",
    left: "0",
    top: "-600px",
  },
}));
interface Color {
  color?: "red" | "blue";
  border: boolean;
}
export const PosterContentHeader = styled("div", {
  shouldForwardProp: () => true,
})<Color>(({ color, theme, border }) => ({
  color: color,
  border: border ? "red 1px solid" : "yellow 1px solid",
}));
export const PosterContendHeader = styled(Typography)(({ theme }) => ({
  color: "black",
  lineHeight: "38px",
  textAlign: "left",
  fontSize: "24px",
  marginBottom: "5px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
  },
}));
export const PosterContainerDes = styled(Typography)(({ theme }) => ({
  lineHeight: "24px",
  fontSize: "18px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
  },
}));
interface ButtonNeuType {
  left: number;
  backgroundcolor: string;
}
export const ButtonNeu = styled(Button, {
  shouldForwardProp: () => true,
})<ButtonNeuType>(({ theme, left, backgroundcolor }) => ({
  marginTop: "20px",
  height: "50px",
  paddingLeft: "30px",
  paddingRight: "30px",
  backgroundColor: "black",
  border: "none",
  position: "relative",
  cursor: "pointer",
  zIndex: 2,
  color: "white",
  [theme.breakpoints.down("sm")]: {
    height: "3rem",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    marginBottom: "10px",
  },
  "&::before": {
    content: "''",
    position: "absolute",
    top: "50px",
    width: "100%",
    height: "3px",
    backgroundColor: backgroundcolor,
    display: "block",
    marginLeft: "10px",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    [theme.breakpoints.down("sm")]: {
      top: "30px",
      display: "none",
    },
  },
  "&::after": {
    content: "''",
    position: "absolute",
    left: left,
    width: "50px",
    height: "3px",
    backgroundColor: backgroundcolor,
    display: "block",
    marginLeft: "10px",
    borderTop: "1px solid black",
    transform: "rotate(90deg)",
    top: "26px",
    borderLeft: "0.3px solid black",
    [theme.breakpoints.down("sm")]: {
      left: "47vw",
      width: "30px",
      top: "23px",
      display: "none",
    },
  },
  "& span": {
    color: "white",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontsize: "16px",
    },
  },
  "&:hover": {
    backgroundColor: "black",
    "& span": {
      color: "#9e9e9e",
    },
  },
}));
