import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/styles";
import { DestopNav } from "./DestopNav/DestopNav";
import { MobileNav } from "./Mobile/mobileNav";
import CloseIcon from "@mui/icons-material/Close";
import { NavItems } from "./DestopNav/DestopNav";
import { Theme } from "@mui/system";
export const Navbar = () => {
  const theme = useTheme<Theme>();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? (
        <MobileNav
          anchor={"left"}
          Icon={CloseIcon}
          Name={"Adidas"}
          NavItems={NavItems}
          check={1}
        />
      ) : (
        <>
          <DestopNav />
        </>
      )}
    </>
  );
};
