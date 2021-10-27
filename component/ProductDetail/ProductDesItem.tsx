import { Box, Grid, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";
const CardImg = styled(CardMedia)(() => ({
  height: "200px",
}));
export const ProductDesItem = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item lg={4}>
          <Card>
            <CardImg
              image={
                "https://assets.adidas.com/images/w_600,f_auto,q_auto/04d274f94dc140dca8d1ac980137f71f_9366/Giay_UltraBoost_21_DJen_FY0374.jpg"
              }
            />
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardImg
              image={
                "https://assets.adidas.com/images/w_600,f_auto,q_auto/32b051aee5884a40bc62ac9801542418_9366/Giay_UltraBoost_21_trang_FY0383.jpg"
              }
            />
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Card>
            <CardImg
              image={
                "https://assets.adidas.com/images/w_600,f_auto,q_auto/09e40e9369b24341a065ac9801542411_9366/Giay_UltraBoost_21_trang_FY0383.jpg"
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
