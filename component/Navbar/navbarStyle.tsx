import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { styled } from "@mui/material/styles";
import { TextField, Badge, Typography } from "@mui/material";
import Link from "../../src/Link";
export const SideMenuSearch = styled(TextField)(() => ({
  width: "130px",
  position: "relative",
  bottom: "20px",
}));
export const SideMenuBadge = styled(Badge)(({ theme }) => ({
  marginTop: "5px",
  "&:hover": {
    backgroundColor: "white",
  },
}));
export const SideMenuBar = styled("div")(() => ({
  marginTop: "30px",
  position: "relative",
  right: "40px",
}));
export const Nav = styled("div")(() => ({
  color: "black",
  position: "relative",
  zIndex: 999,
}));
export const NavContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "5px",
}));

export const TopNavBar = styled("div")(() => ({
  marginLeft: "6.25rem",
  paddingLeft: "2.5rem",
  paddingRight: "2.5rem",
}));

export const TopNavContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "10px",
}));
export const LogoContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  left: "50px",
}));
export const LinkStyle = styled(Link)(() => ({
  textDecoration: "none",
  color: "black",
}));
export const BrandName = styled(Typography)(() => ({
  fontSize: "32px",
  position: "relative",
  bottom: "18px",
  left: "25px",
  color: "black",
}));
export const MainMenu = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  top: "20px",
  right: "0px",
  left: "60px",
}));
export const useStyle = makeStyles((theme: Theme) => ({
  drawerPaper: {
    width: "100%",
    zIndex: 99,
    height: "100%",
    position: "relative",
  },
  closeDrawer: {
    position: "relative",
    left: "60px",
  },
  MainMenuMobile: {
    paddingLeft: "20px",
  },
}));
