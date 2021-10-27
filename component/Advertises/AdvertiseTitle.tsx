import { motion } from "framer-motion";
import { Typography, Button, ButtonGroup } from "@mui/material";
export const AdvertiseTitle = ({ inView }) => {
  return (
    <motion.div
      initial={{ x: "-400px", opacity: 0 }}
      animate={inView ? { x: "0px", opacity: 1 } : ""}
      transition={{
        duration: 0.25,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Typography style={{ padding: "10px" }} variant="h3">
        Bộ Sưu Tập Thể Thao
      </Typography>
      <ButtonGroup>
        {["Nam", "Nữ", "Trẻ Em", "Thể Thao"].map((advertiseTitle) => {
          return (
            <Button key={advertiseTitle}>
              <Typography>{advertiseTitle}</Typography>
            </Button>
          );
        })}
      </ButtonGroup>
    </motion.div>
  );
};
