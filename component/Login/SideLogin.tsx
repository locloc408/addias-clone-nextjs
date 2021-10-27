import { Typography } from "@mui/material";
import { ArrowForward, Check } from "@mui/icons-material";
import { LinkStyle } from "../Navbar/navbarStyle";
import { ButtonNeu } from "../FirstHero/firstHeroStyle";
export const SideLogin = () => {
  return (
    <div style={{ marginLeft: "80px" }}>
      <Typography variant="h3">Tạo Một Tài Khoản</Typography>
      <Typography
        style={{ textDecoration: "none", width: "600px" }}
        variant="h5"
      >
        Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn và điền
        vào mẫu trên trang tiếp theo và tận hưởng những lợi ích của việc sở hữu
        một tài khoản.
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography>
          <Check sx={{ marginTop: "10px" }} />
          Tổng quan đơn giản về thông tin cá nhân của bạn
        </Typography>

        <Typography>
          <Check sx={{ marginTop: "10px" }} />
          Thanh toán nhanh hơn
        </Typography>

        <Typography>
          <Check sx={{ marginTop: "10px" }} />
          Một lần đăng nhập chung duy nhất để tương tác với các sản phẩm và dịch
          vụ của adidas
        </Typography>
        <Typography>
          <Check sx={{ marginTop: "10px" }} />
          Ưu đãi và khuyến mãi độc quyền
        </Typography>

        <Typography>
          <Check sx={{ marginTop: "10px" }} />
          Các sản phẩm mới nhất
        </Typography>

        <Typography>
          <Check sx={{ marginTop: "10px" }} />
          Các bộ sưu tập giới hạn và bộ sưu tập theo mùa mới
        </Typography>

        <Typography>
          <Check sx={{ marginTop: "10px" }} />
          Các sự kiện sắp tới
        </Typography>
        <LinkStyle passHref href="/register">
          {" "}
          <ButtonNeu
            left={114}
            backgroundcolor="white"
            endIcon={<ArrowForward />}
          >
            Đăng Ký
          </ButtonNeu>
        </LinkStyle>
      </div>
    </div>
  );
};
