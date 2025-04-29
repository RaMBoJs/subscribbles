import styled from "styled-components";

const StyledIconWrapper = styled.div`
  grid-area: symbol;
  justify-self: end;
  transform: translate(-10px, -10px);
  text-align: center;
  background-color: ${({ $iconColor }) => $iconColor};
  width: 55px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid rgb(246, 237, 237);
`;

const StyledIconSigma = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export { StyledIconSigma, StyledIconWrapper };
