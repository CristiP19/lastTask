import { Container } from "@mui/material";
import React from "react";
import StyledWrapper from "./styled";

const Wrapper = ({ children, ...props}) => {
  return (
    <StyledWrapper>
      <Container {...props}>{children}</Container>
    </StyledWrapper>
  );
};

export default Wrapper;
