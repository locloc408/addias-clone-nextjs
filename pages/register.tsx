import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { SideRegister } from "../component/Register/SideRegister";
import { RegisterForm } from "../component/Register/RegisterForm";
import { Box } from "@mui/material";
import { getData } from "../component/Helper/Axios/fetchProductList";
import { signIn } from "next-auth/client";
import { useAppDispatch } from "../redux/store/hook";
import { setUser } from "../redux/slice/User";
const defaultValues = {
  firstName: "",
  lastName: "",
  //   DateOfBirth: new Date("2020-08-01T00:00:00"),
  gender: "",
  email: "",
  password: "",
};

interface DefaultValues {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [alert, setAlert] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<DefaultValues>({ defaultValues });
  const onsub = async (data) => {
    const res = await getData.registerAuth(data);
    const { email, password } = data;
    if (res.message === "success") {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.ok) {
        dispatch(setUser(res.result));
        router.push("/");
      }
    } else {
      setAlert(true);
    }
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <RegisterForm
          control={control}
          handleSubmit={handleSubmit}
          onsub={onsub}
          errors={errors ? errors : null}
          alert={alert}
        />

        <SideRegister />
      </Box>
    </>
  );
};
Register.displayName = "Register";
export default Register;
