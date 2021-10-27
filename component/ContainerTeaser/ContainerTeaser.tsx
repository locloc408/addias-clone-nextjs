import { Typography, CardMedia, Box, Grid, Link } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import { ButtonNeu } from "../FirstHero/firstHeroStyle";
import { LinkStyle } from "../Navbar/navbarStyle";
import { useTheme, useMediaQuery } from "@mui/material";
export const ContainerTeaser = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={{
        marginTop: "80px",
        paddingLeft: {
          lg: 10,
          sm: 0,
        },
        paddingRight: {
          lg: 10,
          sm: 0,
        },
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
    >
      <Grid item lg={6} xs={12} sm={12}>
        <LinkStyle href="https://www.adidas.com.vn/vi/forum-giay">
          <Box>
            <ReactPlayer
              width={isMobile ? "100%" : 640}
              playing
              loop
              muted
              url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/originals-fw21-forum-drop1-launch-catlp-teaser-card-2x1-d_tlehpx.mp4"
            ></ReactPlayer>
            <Box sx={{ padding: "20px" }}>
              <Typography sx={{ fontSize: "28px" }}>
                A NEW GENERATION
              </Typography>
              <Typography>
                Náo nhiệt và táo bạo nhưng luôn cởi mở — đôi giày sáng tạo cho
                chính bạn
              </Typography>
              <ButtonNeu left={145} backgroundcolor={"white"}>
                KHÁM PHÁ NGAY
              </ButtonNeu>
            </Box>
          </Box>
        </LinkStyle>
      </Grid>
      <Grid item lg={6} xs={12} sm={12}>
        <LinkStyle href="https://www.adidas.com.vn/vi/stay_in_play">
          <ReactPlayer
            width={isMobile ? "100%" : 640}
            playing
            loop
            muted
            url="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/training-fw21-stayinplay-glp-sustain-2-teaser_card-d_au4dwf.mp4"
          ></ReactPlayer>
          <Box sx={{ padding: "20px" }}>
            <Typography sx={{ fontSize: "28px" }}>STAY IN PLAY</Typography>
            <Typography>
              Quần Bó Nguyệt San Techfit bổ sung lớp bảo vệ.
            </Typography>
            <ButtonNeu left={145} backgroundcolor={"white"}>
              KHÁM PHÁ NGAY
            </ButtonNeu>
          </Box>
        </LinkStyle>
      </Grid>
    </Grid>
  );
};
