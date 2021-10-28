import { SideLogin } from "../component/Login/SideLogin";
import { LoginForm } from "../component/Login/LoginForm";

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
