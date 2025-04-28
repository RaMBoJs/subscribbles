import styled from "styled-components";

const StyledWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    ". . symbol"
    "title title title"
    "description amount amount";

  padding: 1rem;
  margin: 1rem auto;
  background-color: rgb(202, 183, 183);
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  height: 200px;
  background: rgb(255, 255, 255);
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  padding: 1rem;
  border: 2px solid rgb(246, 237, 237);
`;

const StyledIconWrapper = styled.div`
  grid-area: symbol;
  justify-self: end;
  align-self: start;
  border: 1px solid black;
  background-color: ${({ $iconColor }) => $iconColor};
  width: 45px;
  height: 35px;
  border-radius: 30px;
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
  place-self: center;
  font-size: 1.6rem;
`;
const StyledDescriptionTotal = styled.p`
  grid-area: description;
  place-self: start;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledBalance = styled.p`
  grid-area: amount;
  place-self: end;
  font-size: 1.5rem;
  font-weight: bold;
`;

export {
  StyledWrapper,
  StyledBalance,
  StyledIconSigma,
  StyledIconWrapper,
  StyledCardTitle,
  StyledDescriptionTotal,
};
