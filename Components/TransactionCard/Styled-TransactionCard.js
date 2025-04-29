import styled from "styled-components";
import Image from "next/image";

const StyledTransactionCard = styled.div`
  min-width: 360px;
  min-height: 180px;
  border: solid black 1px;
  border-radius: 15px;
  margin: 6px 12px 6px 12px;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  border: 2px solid rgb(246, 237, 237);
  padding: 1rem 1rem 0rem 1rem;
`;

const StyledCatergory = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const StyledType = styled.div`
  font-size: 20px;
  margin: 2px 0px 0px 0px;
`;

const StyledAmount = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-align: end;
`;

const StyledDate = styled.div`
  font-size: 0.8rem;
  margin: 4px 0px 0px 0px;
    position: absolute;
  transform: translate(0px, -26px);
`;

const StyledIcon = styled(Image)`
  background-color: ${({ type }) =>
    type === "expense" ? "rgb(244, 123, 123)" : "rgb(165, 221, 145)"};
  border-radius: 50px;
  width: 38px;
  height: 38px;
  position: absolute;
  transform: translate(290px, -6px);
  border: 2px solid rgb(246, 237, 237);
  box-shadow: inset 2px 2px 4px rgba(34, 34, 34, 0.62),
    inset -2px -2px 4px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0),
    -4px -4px 8px rgba(255, 255, 255, 0);
  z-index: 1;
`;

const StyledContainer = styled.div`
  margin-top: 30px;
`;

const StyledIconContainer = styled.div`
  display: flex;
  margin: 6px 0px 6px 0px;
  gap: 12px;
`;

export {
  StyledTransactionCard,
  StyledCatergory,
  StyledType,
  StyledAmount,
  StyledDate,
  StyledIcon,
  StyledContainer,
  StyledIconContainer,
};
