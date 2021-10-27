import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { FC, useState } from "react";
import React from "react";
import { useStyle } from "../navbarStyle";
import { CustomDrawer } from "./Drawler";
import { useAppDispatch } from "../../../redux/store/hook";
import { setOpen } from "../../../redux/slice/Nav";
import { mainMenuMobile } from "../../Type/NavType";
import { NavItems } from "../../Type/NavType";

export const MainMenuMobile: FC<mainMenuMobile> = ({
  NavItems,
  Icon,
  check,
}) => {
  const [hover, handleHover] = useState();
  const setHover = (data) => {
    handleHover(data);
  };
  const dispatch = useAppDispatch();
  const classes = useStyle();

  return (
    <div className={classes.MainMenuMobile}>
      {NavItems?.map((items: NavItems, index) => {
        return (
          <Box key={index}>
            <ListItem
              button
              onClick={() => {
                setHover(index);
                dispatch(setOpen(true));
              }}
            >
              <ListItemText>{check === 1 ? items.type : items}</ListItemText>
              <ListItemIcon>
                <NavigateNext />
              </ListItemIcon>
            </ListItem>
            {hover === index && (
           
                <CustomDrawer
                  anchor={"right"}
                  Icon={Icon}
                  Name={items.type}
                  NavItems={items.status}
                  check={2}
                ></CustomDrawer>
            )}
          </Box>
        );
      })}
    </div>
  );
};
