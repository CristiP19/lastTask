import React from "react";
import TitleStack from "./styled";

const Title = ({ title, subtitle }) => {
  return (
    <TitleStack>
      <p className="title">{title}</p>
      <div className="stackContainer">
        <p className="subtitle">{subtitle}</p>
      </div>
    </TitleStack>
  );
};

export default Title;
