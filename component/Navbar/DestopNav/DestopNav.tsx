import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState } from "react";
import { TopNav } from "./TopNav";
import { SideMenu } from "./SideMenu";
import { useAppSelector } from "../../../redux/store/hook";
import { numberCart } from "../../../redux/slice/Cart";
import { MainMenu } from "./Mainmenu";
import { Logo } from "./Logo";
import { Nav, NavContainer } from "../navbarStyle";
export const NavItems = [
  {
    type: "NAM",
    id: "1",
    status: ["stan smith", "ultra boost", "4D"],
  },
  {
    type: "NỮ",
    id: "2",
    status: ["FORUM", "HER STUDIO", "ÁO KHOÁC CHO NỮ"],
  },
  {
    id: "3",
    type: "THỂ THAO",
    status: ["GIÀY ", "QUẦN", "ÁO", "PHỤ KIỆN"],
  },
  {
    id: "4",
    type: "TRẺ EM ",
    status: [
      "TRẺ EM(4-6 TUỔI)",
      "THANH THIẾU NIÊN(6-16 TUỔI ) ",
      "TRẺ NHỎ MỚI BIẾT ĐI (1-4 TUỔI) ",
    ],
  },
];
export const DestopNav = () => {
  // const { login, currentUser } = useSelector((state) => state.Users);
  const NumberCart = useAppSelector(numberCart);

  return (
    <>
      <motion.div
        initial={{ y: "-200vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1.5,
          stiffness: 100,
          delay: 1.2,
        }}
      >
        <TopNav />
        <Nav>
          <NavContainer>
            <Logo />
            <MainMenu NavItems={NavItems} />
            <SideMenu numberCart={NumberCart} />
          </NavContainer>
        </Nav>
      </motion.div>
    </>
  );
};
