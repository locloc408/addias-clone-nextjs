import { Drawer, Typography, Box, IconButton } from "@mui/material";
import { ButtonNeu } from "../FirstHero/firstHeroStyle";
import { LinkStyle } from "../Navbar/navbarStyle";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export const MobileModal = ({
  IsmodalShow,
  ChangeInModal,
}: {
  ChangeInModal: () => void;
  IsmodalShow: boolean;
}) => {
  return (
    <Drawer open={IsmodalShow} anchor={"bottom"}>
      <Box sx={{ padding: "20px" }}>
        <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
          ĐÃ THÊM VÀO GIỎ HÀNG CỦA BẠN THÀNH CÔNG
        </Typography>
        <LinkStyle href="/cart">
          <ButtonNeu
            backgroundcolor={"white"}
            endIcon={<ArrowForwardIcon />}
            left={120}
          >
            XEM LẠI GIỎ HÀNG
          </ButtonNeu>
        </LinkStyle>
      </Box>
      <IconButton
        sx={{ position: "relative", bottom: "220px", right: "-190px" }}
        onClick={() => ChangeInModal()}
      >
        <ClearIcon />
      </IconButton>
    </Drawer>
  );
};
