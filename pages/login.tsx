import { SideLogin } from "../component/Login/SideLogin";
import { LoginForm } from "../component/Login/LoginForm";
import { GetStaticProps } from "next";
import { getSession, providers } from "next-auth/client";

const Login = ({ provider, session }) => {
  return (
    <div style={{ display: "flex" }}>
      <LoginForm provider={provider} session={session}></LoginForm>
      <SideLogin></SideLogin>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const provider = await providers();
  const session = await getSession();
  return {
    props: {
      provider,
      session,
    },
  };
};

export default Login;
