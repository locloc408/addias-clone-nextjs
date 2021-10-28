import { SideLogin } from "../component/Login/SideLogin";
import { LoginForm } from "../component/Login/LoginForm";
import { GetStaticProps } from "next";
import { getSession, providers } from "next-auth/client";

const Login = () => {
  return (
    <div style={{ display: "flex" }}>
      <LoginForm></LoginForm>
      <SideLogin></SideLogin>
    </div>
  );
};
Login.displayName = "Login";
export default Login;
