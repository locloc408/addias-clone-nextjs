import { Typography, Box } from "@mui/material";
import { Check } from "@mui/icons-material";
export const SideRegister = () => {
  return (
    <Box style={{ marginLeft: "100px" }}>
      <Typography variant="h3">TẠO MỘT TÀI KHOẢN</Typography>
      <Typography>Đăng Nhập chung sẽ giúp bạn</Typography>
      <div>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Check style={{ paddingRight: "10px" }} />
          <Typography>
            Một lần đăng nhập chung duy nhất để tương tác với các sản phẩm và
            dịch vụ của adidas
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Check style={{ paddingRight: "10px" }} />
          <Typography>Thanh toán nhanh hơn</Typography>
        </Box>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Check style={{ paddingRight: "10px" }} />
          <Typography>Xem lịch sử đặt hàng riêng của bạn</Typography>
        </Box>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Check style={{ paddingRight: "10px" }} />
          <Typography>Thêm hoặc thay đổi tùy chọn email</Typography>
        </Box>
      </div>
    </Box>
  );
};
