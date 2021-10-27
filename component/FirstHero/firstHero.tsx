import React from "react";
import { Box } from "@mui/material";
import Link from "../../src/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import {
  PosterContain,
  PosterContendHeader,
  PosterContainerDes,
  ButtonNeu,
  FirstHeros,
} from "./firstHeroStyle";
import Image from "next/image";
import { red } from "@mui/material/colors";
import { LinkStyle } from "../Navbar/navbarStyle";

export const FirstHero = () => {
  return (
    <div>
      <div>
        <motion.div>
          <FirstHeros>
            <Image
              layout="fill"
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/beige-launch-hp-masthead-dual-global-d_tcm337-734494.jpg"
            />
          </FirstHeros>
        </motion.div>
        <motion.div
          initial={{ x: "-200vw", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 120,
          }}
        >
          <PosterContain>
            <PosterContendHeader variant="h6">
              Our Take On ToNal
            </PosterContendHeader>
            <PosterContainerDes>
              Chúng tôi đã mời gia đình adidas tại NYC để giới thiệu cảm nhận cá
              nhân về những gam màu vượt thời gian
            </PosterContainerDes>
            <div>
              <ButtonNeu
                backgroundcolor={"#A68877"}
                left={166}
                endIcon={<ArrowForwardIcon />}
              >
                <LinkStyle href="/">
                  <span>Shop Neutrals</span>
                </LinkStyle>
              </ButtonNeu>
            </div>
          </PosterContain>
        </motion.div>
      </div>
    </div>
  );
};
