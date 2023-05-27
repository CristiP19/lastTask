import React from "react";
import RegisterForm from "components/registerForm/RegisterForm";
import { LoginPageStyle } from "./styled";

const RegisterPage = () => {
  return (
    <LoginPageStyle>
      <RegisterForm />
    </LoginPageStyle>
  );
};

export default RegisterPage;
