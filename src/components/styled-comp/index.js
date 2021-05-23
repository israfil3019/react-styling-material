import React from "react";
import Button from "./button/Button";
import HeaderText from "./header/HeaderText";
import Wrapper from "./wrapper/Wrapper";

const StyledComponents = () => {
  return (
    <Wrapper bgColor="wheat">
      <HeaderText>My Way</HeaderText>
      <HeaderText headerColor="purple">Styled Components</HeaderText>
      <Button primary>Primary</Button>
      <Button>Default</Button>
    </Wrapper>
  );
};

export default StyledComponents;
