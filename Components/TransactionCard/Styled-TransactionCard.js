import styled from "styled-components";
import Image from "next/image";

const StyledTransactionCard = styled.div`
  background-color: ${({ type }) =>
    type === "expense" ? "rgb(244, 123, 123)" : "rgb(165, 221, 145)"};
  min-width: 360px;
  height: 200px;
  border: solid black 1px;
  border-radius: 15px;
  margin: 1rem auto;
  padding: 10px;
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
`;

const StyledContainer = styled.div`
  margin-top: 40px;
`;

export {
  StyledTransactionCard,
  StyledCatergory,
  StyledType,
  StyledAmount,
  StyledDate,
  StyledIcon,
  StyledContainer,
};
