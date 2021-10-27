import { Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { motion } from "framer-motion";
import { FC } from "react";
import { MainMenus, NavItems } from "../../Type/NavType";
import { MainMenuLinks, MenuI, MainMenuStyled } from "./MainMenuStyle";
import { nanoid } from "@reduxjs/toolkit";
export const MainMenu: FC<MainMenus> = ({ NavItems }) => {
  const [hover, handleHover] = useState<any>(false);
  return (
    <>
      <MainMenuStyled>
        {NavItems.map((item: NavItems, index) => {
          return (
            <div key={nanoid()}>
              <div
                onMouseEnter={() => {
                  handleHover(item.id);
                }}
                onMouseLeave={() => {
                  handleHover(null);
                }}
              >
                <MainMenuLinks isactive={hover === item.id ? 1 : 0}>
                  <Typography
                    style={{
                      color: index === 0 ? "#f50057" : "black",
                      fontSize: index === 0 && "24px",
                      fontWeight: index === 0 && 600,
                    }}
                  >
                    {item.type}
                  </Typography>
                  <ExpandMoreIcon
                    style={{ color: index === 0 ? "#f50057" : "black" }}
                  />
                </MainMenuLinks>

                <Box
                  sx={{
                    left: "90px",
                    top: "0.1rem",
                    width: "calc(300px * 2 + 100%)",
                    flexWrap: "nowrap",
                    position: "absolute",
                  }}
                >
                  <Box
                    sx={{
                      color: "rgb(0,0,0)",
                      paddingTop: "0.9rem",
                      width: "1144px",
                      right: 0,
                      left: 50,
                      top: "4.3rem",
                      visibility: hover === item.id ? "visible" : "hidden",
                      position: "absolute",
                      zIndex: 99999,
                      display: "inline-block",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0.2, x: "-20px" }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "rgb(255, 255, 255)",
                          borderRadius: "1rem",
                          boxShadow:
                            "rgb(0 0 0 / 8%) 0px 4.48625rem 5.27794rem, rgb(0 0 0 / 6%) 0px 1.87425rem 2.205rem, rgb(0 0 0 / 5%) 0px 1.00206rem 1.1789rem, rgb(0 0 0 / 4%) 0px 0.561748rem 0.66088rem, rgb(0 0 0 / 3%) 0px 0.29834rem 0.350988rem, rgb(0 0 0 / 4%) 0px -0.2rem 1.2rem",
                        }}
                      >
                        {item.status.map((status) => {
                          return <MenuI key={nanoid()}>{status}</MenuI>;
                        })}
                      </Box>
                    </motion.div>
                  </Box>
                </Box>
              </div>
            </div>
          );
        })}
      </MainMenuStyled>
    </>
  );
};
