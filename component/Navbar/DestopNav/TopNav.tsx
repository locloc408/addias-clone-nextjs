import { LinkStyle } from "../navbarStyle";
import { TopNavBar, TopNavContainer, NavContainer } from "../navbarStyle";
import { useSession } from "next-auth/client";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { signOut } from "next-auth/client";
import { useAppSelector } from "../../../redux/store/hook";
import { email, firstName, lastName, gender } from "../../../redux/slice/User";
import { useEffect, useState } from "react";
import Image from "next/image";
export const TopNav = () => {
  const [session, loading] = useSession();
  const LastName = useAppSelector(lastName);
  const FirstName = useAppSelector(firstName);
  return (
    <>
      <TopNavBar>
        <TopNavContainer>
          <NavContainer
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {!session && !loading && (
              <Box
                sx={{
                  borderRadius: "1rem",
                  backgroundColor: "rgb(99, 93, 255)",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  marginRight: "13px",
                  "&:hover": {
                    backgroundColor: "rgb(86, 78, 209)",
                  },
                }}
              >
                <LinkStyle href="/login">
                  <Typography
                    sx={{
                      color: "white",
                    }}
                  >
                    Đăng Nhập
                  </Typography>
                </LinkStyle>
              </Box>
            )}
            {session && (
              <div style={{ display: "flex" }}>
                <Button
                  onClick={() => {
                    signOut();
                  }}
                  sx={{
                    borderRadius: "1rem",
                    backgroundColor: "rgb(99, 93, 255)",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    marginRight: "13px",
                    "&:hover": {
                      backgroundColor: "rgb(86, 78, 209)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                    }}
                  >
                    Đăng Xuất
                  </Typography>
                </Button>
                <Button
                  sx={{
                    borderRadius: "1rem",
                    backgroundColor: "#804AE8",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    marginRight: "13px",
                    "&:hover": {
                      backgroundColor: "rgb(86, 78, 209)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                    }}
                  >
                    Xin Chao {LastName + " " + FirstName}
                  </Typography>
                </Button>
              </div>
            )}
          </NavContainer>
          <div>
            <CardMedia
              sx={{
                height: "20px",
                width: "20px",
              }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
            />
          </div>
        </TopNavContainer>
      </TopNavBar>
    </>
  );
};
