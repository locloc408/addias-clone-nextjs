import {
  Typography,
  Checkbox,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
//import { productApi } from "../../api/productsApi";
import { getData } from "../Helper/Axios/fetchProductList";
//import { setUser } from "../../../redux/Slices/users";
import { useAppDispatch, useAppSelector } from "../../redux/store/hook";
import { setUser } from "../../redux/slice/User";
import { useForm } from "react-hook-form";
import { TextInput } from "../Form/TextInput";
import { ButtonNeu } from "../FirstHero/firstHeroStyle";
import { signIn } from "next-auth/client";
import { Google } from "@mui/icons-material";
import { useSession } from "next-auth/client";

export const LoginForm = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [alert, setAlert] = useState(false);
  const [check, setCheck] = useState(false);
  interface LoginType {
    email: string;
    password: string;
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log(loading);
  const dispatch = useAppDispatch();
  const handleLogin = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        setAlert(true);
      } else {
        const user = await getData.Login({ email, password });
        setAlert(false);
        dispatch(setUser(user));
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        width: {
          lg: "450px",
          xs: "auto",
        },
        marginLeft: {
          lg: "50px",
          xs: 0,
        },
        paddingLeft: "15px",
        paddingTop: "15px",
      }}
    >
      <form>
        <Typography variant="h2">Đăng Nhập</Typography>
        <Typography variant="h4">Bạn Quên Mật Khẩu ?</Typography>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextInput
            control={control}
            name={"email"}
            label={"email"}
            errors={errors}
            type={"email"}
          />
          <TextInput
            control={control}
            name={"password"}
            label={"mật khẩu"}
            type={"password"}
            errors={errors}
          />
          {alert && (
            <p style={{ color: "red" }}>
              Email/mật khẩu chưa đúng - vui lòng kiểm tra lại
            </p>
          )}
        </div>

        <div style={{ display: "flex" }}>
          <Checkbox checked={check} onClick={(check) => setCheck(!check)} />
          <Button onClick={(check) => setCheck(!check)}>
            Giữ Đăng Nhập Cho Tôi
          </Button>
        </div>
        <ButtonNeu
          backgroundcolor="white"
          left={134}
          onClick={handleSubmit(handleLogin)}
          type="submit"
          endIcon={<ArrowForward />}
        >
          Đăng Nhập
        </ButtonNeu>
        <Box sx={{ position: "relative", top: "20px" }}>
          <Button
            sx={{ color: "rgb(86, 78, 209)" }}
            variant="outlined"
            endIcon={<Google />}
            onClick={async () => {
              signIn("google", { callbackUrl: `${process.env.NEXTAUTH_URL}` });
            }}
          >
            Google
          </Button>
        </Box>
      </form>
    </Box>
  );
};
