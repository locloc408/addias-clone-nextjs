import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardMedia,
  CardActions,
  IconButton,
  CardContent,
  Grid,
} from "@mui/material";
export const CardImg = styled(CardMedia)(({ theme }) => ({
  minWidth: "240px",
  minHeight: "240px",
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    minWidth: "140px",
    minHeight: "145px",
  },
}));
export const Cardd = styled(Card)(({ theme }) => ({
  width: "720px",
  display: "flex",
  border: "1px solid black",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "93%",
    height: "145px",
  },
}));
export const Cardcontain = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  marginLeft: "20px",
  marginBottom: "30px",
  width: "205px",

  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    padding: 0,
  },
}));
export const CardAction = styled(CardActions)(() => ({
  display: "flex",
  border: "1px black solid",
  borderRadius: "50px",
  flexDirection: "column",
}));
export const CardContainer = styled(Grid)(({ theme }) => ({
  marginLeft: "80px",
  marginTop: "20px",
  Minwidth: "205px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
  },
}));
