import { makeStyles } from "@mui/styles";
import { Typography, IconButton, Box, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "../../../src/Link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CustomDrawer } from "./Drawler";
import { useAppDispatch } from "../../../redux/store/hook";
import { FC } from "react";
import { mobileNav } from "../../Type/NavType";
import { setOpen } from "../../../redux/slice/Nav";
import Image from "next/image";
import { SideMenuBadge, LinkStyle } from "../navbarStyle";
import { ShoppingCart } from "@mui/icons-material";
import { useAppSelector } from "../../../redux/store/hook";
import { numberCart } from "../../../redux/slice/Cart";
const useStyle = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "black",
    "&:active": {
      boxShadow: "none",
      backgroundColor: "white",
      textDecoration: "none",
      color: "black",
    },
  },
}));
export const MobileNav: FC<mobileNav> = ({
  anchor,
  Name,
  Icon,
  NavItems,
  check,
}) => {
  const classes = useStyle();
  // const { numberCart } = useSelector((state) => state.Carts);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  // const { open } = useSelector((state) => state.Nav);
  const NumberCart = useAppSelector(numberCart);
  const dispatch = useAppDispatch();
  return (
    <>
      <div ref={ref}>
        <motion.div
          initial={{ y: "-300vh" }}
          animate={inView ? { y: 0 } : ""}
          transition={{
            type: "spring",
            duration: 0.1,
            stiffness: 100,
          }}
          style={{ width: "100%" }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box>
              <IconButton
                onClick={() => {
                  dispatch(setOpen(true));
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                //style={{ marginLeft: "40px" }}
                //className={classes.link}
                //to="/"
                href="/"
              >
                <div style={{ height: 80, width: 70, position: "relative" }}>
                  <Image src="/adidas.svg" layout="fill" />
                </div>
              </Link>
            </div>
            <Box
              sx={{
                display: {
                  xs: "flex",
                },
                justifyContent: {
                  xs: "flex-end",
                },
              }}
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
              <LinkStyle href="/cart">
                <SideMenuBadge
                  sx={{
                    ".MuiBadge-badge": {
                      backgroundColor: "#e91e63",
                      color: "white",
                    },
                  }}
                  badgeContent={NumberCart}
                >
                  <ShoppingCart />
                </SideMenuBadge>
              </LinkStyle>
            </Box>
          </Box>
          <CustomDrawer
            anchor={anchor}
            Icon={Icon}
            Name={Name}
            NavItems={NavItems}
            check={check}
          />
        </motion.div>
      </div>
    </>
  );
};
