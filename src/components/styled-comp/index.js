import React from "react";
import Button from "./button/Button";
import Wrapper from "./wrapper/Wrapper";

const StyledComponents = () => {
  return (
    <Wrapper bgColor="wheat">
      <Button primary>Primary</Button>
      <Button>Default</Button>
    </Wrapper>
  );
};

export default StyledComponents;
