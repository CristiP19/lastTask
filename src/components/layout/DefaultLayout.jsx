import React from "react";
import Navbar from "./navbar";
import Wrapper from "./wrapper";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wrapper id="main">{children}</Wrapper>
    </>
  );
};

export default DefaultLayout;
