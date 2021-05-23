import React from "react";
import Button from "./button/Button";
import ExtendedLearnFSD from "./extended-link/ExtendedLearnFSD";
import HeaderText from "./header/HeaderText";
import LearnFSD from "./link/LearnFSD";
import Wrapper from "./wrapper/Wrapper";

const StyledComponents = () => {
  const [primary, setPrimary] = React.useState(false);
  return (
    <Wrapper bgColor="wheat">
      <HeaderText>My Way</HeaderText>
      <HeaderText headerColor="purple">Styled Components</HeaderText>
      <LearnFSD secondary href="https://google.com" target="_blank">
        Learn Full Stack Development
      </LearnFSD>
      <ExtendedLearnFSD>We'are Learning Styled Components</ExtendedLearnFSD>
      <Button primary={primary} onClick={() => setPrimary(!primary)}>
        {primary ? "Primary" : "Default"}
      </Button>
      <Button primary={!primary}>{!primary ? "Primary" : "Default"}</Button>
    </Wrapper>
  );
};

export default StyledComponents;
