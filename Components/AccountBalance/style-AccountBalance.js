import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    ". . symbol"
    "title title title"
    "description amount amount";
  position: relative;
  min-width: 360px;
  min-height: 140px;
  margin: 6px 12px 6px 12px;
  background-color: rgb(202, 183, 183);
  border-radius: 16px;
  background: rgb(255, 255, 255);
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  border: 2px solid rgb(246, 237, 237);
`;

const StyledIconSigma = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const StyledCardTitle = styled.h2`
  grid-area: title;
  justify-self: center;
  font-size: 1.4rem;
  margin: 0px;
`;
const StyledDescriptionTotal = styled.p`
  grid-area: description;
  justify-self: start;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 12px;
`;

const StyledBalance = styled.p`
  grid-area: amount;
  justify-self: end;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 12px;
`;

export {
  StyledWrapper,
  StyledBalance,
  StyledIconSigma,
  StyledCardTitle,
  StyledDescriptionTotal,
};
