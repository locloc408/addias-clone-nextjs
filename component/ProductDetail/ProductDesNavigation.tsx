import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const ProductDescription = styled("div")(() => ({
  borderTop: "0.1px groove #fafafa",
  borderBottom: "0.1px groove #fafafa",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "47%",
}));
export const ProductDesNavigation = () => {
  return (
    <ProductDescription>
      <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
        <Button
          sx={{
            marginRight: "10px",
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          BỘ SƯU TẬP
        </Button>
      </div>
      <div>
        <Button
          sx={{
            color: "black",
            marginRight: "10px",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          MÔ TẢ
        </Button>
      </div>
      <div>
        <Button
          sx={{
            color: "black",
            marginRight: "10px",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          THÔNG TIN CHI TIẾT
        </Button>
      </div>
      <div>
        <Button
          sx={{
            color: "black",
            marginRight: "10px",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          ĐÁNH GIÁ
        </Button>
      </div>
    </ProductDescription>
  );
};
