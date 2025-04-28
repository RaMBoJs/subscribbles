import styled from "styled-components";
import Image from "next/image";

const StyledTransactionCard = styled.div`
  min-width: 360px;
  height: 215px;
  border: solid black 1px;
  border-radius: 15px;
  margin: 1rem auto;
  padding: 10px;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  padding: 1rem;
  border: 2px solid rgb(246, 237, 237);
`;

const StyledCatergory = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const StyledType = styled.div`
  font-size: 20px;
  margin-top: 2px;
`;

const StyledAmount = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-align: end;
  margin-top: -45px;
`;

const StyledDate = styled.div`
  margin-top: 20px;
`;

const StyledIcon = styled(Image)`
  margin-left: 310px;
  background-color: ${({ type }) =>
    type === "expense" ? "rgb(244, 123, 123)" : "rgb(165, 221, 145)"};
  border-radius: 50px;
  width: 35px;
  height: 35px;
`;

const StyledContainer = styled.div`
  margin-top: 40px;
`;

const StyledIconContainer = styled.div`
  display: flex;
  margin: 5px 0px 0px 0px;
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
