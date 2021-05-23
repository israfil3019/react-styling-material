import styled, { css } from "styled-components";

export default styled.a`
  font-size: 1.5rem;
  transition: ease 0.25s all;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  ${(props) =>
    props.secondary &&
    css`
      background-color: #7e3b8e;
      border-radius: 8px;
      padding: 8px;
      cursor: none;
    `}
  :hover {
    font-size: 1.8rem;
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
