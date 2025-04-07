import styled from "styled-components";

const StyledIconWrapper = styled.div`
  grid-area: symbol;
  justify-self: end;
  transform: translate(
    0px,
    -28px
  ); // verschieben vom ursprung in (x position, y position).
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  background-color: ${({ $iconColor }) => $iconColor};
  width: 55px;
  height: 30px;
  border-radius: 30px;
`;

const StyledIconSigma = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export { StyledIconSigma, StyledIconWrapper };
