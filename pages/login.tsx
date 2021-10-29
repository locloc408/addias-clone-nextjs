import { SideLogin } from "../component/Login/SideLogin";
import { LoginForm } from "../component/Login/LoginForm";
import { Box } from "@mui/material";
const Login = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          lg: "flex",
        },
      }}
    >
      <LoginForm></LoginForm>
      <SideLogin></SideLogin>
    </Box>
  );
};
Login.displayName = "Login";
export default Login;
