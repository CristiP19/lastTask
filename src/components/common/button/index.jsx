import React from "react";
import { ButtonStyled } from "./styled";

const Button = ({ children, type, onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
