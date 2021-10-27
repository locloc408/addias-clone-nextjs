import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { styled } from "@mui/material/styles";
import { MenuItem } from "@mui/material";
interface Props {
  isactive: number;
}
export const MainMenuLinks = styled("div", {
  shouldForwardProp: () => true,
})<Props>(({ isactive }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  position: "relative",
  cursor: "pointer",
  color: isactive === 1 && "rgb(99, 93, 255)",
  lineHeight: "2.4rem",
  fontWeight: 500,
  height: "86px",
  paddingLeft: "35px",
  paddingRight: "12px",
  fontSize: "1.4rem",
  "&:after": {
    content: "''",
    height: 3,
    position: "absolute",
    right: 0,
    left: 0,
    top: 60,
    width: isactive ? "100%" : "0",
    backgroundColor: isactive === 1 ? "rgb(99, 93, 255)" : "black",
  },
}));
// interface MenuType {
//   active: boolean;
// }

export const MenuI = styled(MenuItem)(() => ({
  "&:hover": {
    backgroundColor: "white",
    color: "#804AE8",
  },
  backgroundColor: "white",
  zIndex: 5,
}));

export const MainMenuStyled = styled("div")(() => ({
  width: "500px",
  display: "flex",
  justifyContent: "space-evenly",
  textAlign: "center",
  alignItems: "center",
}));
