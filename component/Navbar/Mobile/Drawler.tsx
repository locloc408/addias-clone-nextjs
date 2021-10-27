import React, { FC } from "react";
import {
  Box,
  Drawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Link from "../../../src/Link";
import { MainMenuMobile } from "./MainMenuMobile";
import { useAppSelector } from "../../../redux/store/hook";
import { useAppDispatch } from "../../../redux/store/hook";
import { setOpen } from "../../../redux/slice/Nav";
import { mobileNav } from "../../Type/NavType";
import { open } from "../../../redux/slice/Nav";
export const CustomDrawer: FC<mobileNav> = ({
  anchor,
  Icon,
  Name,
  NavItems,
  check,
}) => {
  const openDrawer = useAppSelector(open);
  const dispatch = useAppDispatch();
  return (
    <>
      <Drawer
        anchor={anchor}
        open={openDrawer}
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Box>
          <Box style={{ paddingLeft: "20px" }}>
            <ListItem button>
              <ListItemText>
                <Link href="/">
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: 20,
                    }}
                  >
                    {Name}
                  </Typography>
                </Link>
              </ListItemText>
              <ListItemIcon
                onClick={() => {
                  dispatch(setOpen(false));
                }}
              >
                <Icon />
              </ListItemIcon>
            </ListItem>
          </Box>
          <Box>
            <MainMenuMobile NavItems={NavItems} Icon={Icon} check={check} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
