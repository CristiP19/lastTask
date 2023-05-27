import React from "react";
import AuthForm from "components/common/authForm";
import {LoginPageStyle} from "./styled";

export const AuthPage = () => {

  return (
    <LoginPageStyle>
      <AuthForm />
    </LoginPageStyle>
  );
};
