import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { TextInput } from "../Form/TextInput";
import { RadioGroups } from "../Form/RadioGroup";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { ButtonNeu } from "../FirstHero/firstHeroStyle";
export const RegisterForm = ({
  handleSubmit,
  onsub,
  control,
  errors,
  alert,
}) => {
  return (
    <form onSubmit={handleSubmit(onsub)}>
      <Box sx={{ display: "flex", margin: "20px" }}>
        <Box style={{ marginLeft: "100px", width: "437px" }}>
          <Typography variant="h3">ĐĂNG KÝ</Typography>
          <Typography>Đăng Ký Bằng</Typography>
          <Button variant="outlined" endIcon={<FacebookIcon />}>
            FaceBook
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            variant="outlined"
            endIcon={<InstagramIcon />}
          >
            Instagram
          </Button>
          <Typography>Hoặc</Typography>
          <Typography>Tên Của Bạn</Typography>

          {/* họ và tên */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextInput
              name={"firstName"}
              label={"Tên"}
              control={control}
              errors={errors}
              type={"text"}
            />
            <TextInput
              name={"lastName"}
              label={"Họ"}
              control={control}
              errors={errors}
              type={"text"}
            />
          </Box>

          {/* ngày tháng năm sinh */}
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div className={classes.marginTop}>
                <Typography>Ngày Sinh</Typography>
                <Controller
                  name="DateOfBirth "
                  control={control}
                  render={({ field }) => (
                    <KeyboardDatePicker
                      variant="dialog"
                      format="dd/MM/yyyy"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  )}
                />
              </div>
            </MuiPickersUtilsProvider> */}
          <Typography sx={{ marginTop: "30px" }} style={{ width: "400px" }}>
            Chúng tôi thu thập ngày sinh nhằm tuân thủ Chính sách Bảo mật. Hơn
            thế bạn sẽ nhận được một món quà bất ngờ từ chúng tôi trong ngày
            sinh nhật của bạn!
          </Typography>

          {/* Giới tính */}
          <Typography sx={{ marginTop: "30px" }}>GIỚI TÍNH</Typography>
          <RadioGroups control={control} errors={errors} />
          <Typography sx={{ marginTop: "30px" }}>CHI TIẾT ĐĂNG NHẬP</Typography>
          <TextInput
            control={control}
            type={"email"}
            label={"email"}
            name={"email"}
            errors={errors}
          />
          {alert && (
            <>
              <p style={{ marginTop: "10px", color: "red " }}>
                EMAIL NÀY ĐÃ TỒN TẠI
              </p>
            </>
          )}
          <TextInput
            control={control}
            type={"password"}
            label={"Mật Khẩu"}
            name={"password"}
            errors={errors}
          />
          <ButtonNeu
            backgroundcolor={"white"}
            type="submit"
            left={114}
            endIcon={<ArrowForward />}
          >
            Đăng Ký
          </ButtonNeu>
        </Box>
      </Box>
    </form>
  );
};
