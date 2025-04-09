import styled from "styled-components";
import Image from "next/image";
import Delete from "./Delete/DeleteTransactionCard";

export default function TransactionCard({ transaction, onDeleteTransaction }) {
  let iconImageSrc = "";
  if (transaction.category === "Groceries") {
    iconImageSrc = "salad.svg";
  }
  if (transaction.category === "Rent") {
    iconImageSrc = "house.svg";
  }
  if (transaction.category === "Salary") {
    iconImageSrc = "hand-coins.svg";
  }
  if (transaction.category === "Insurance") {
    iconImageSrc = "umbrella.svg";
  }
  if (transaction.category === "Entertainment") {
    iconImageSrc = "clapperboard.svg";
  }
  if (transaction.category === "Restaurants") {
    iconImageSrc = "utensils.svg";
  }
  if (transaction.category === "Investment") {
    iconImageSrc = "chart-line.svg";
  }
  if (transaction.category === "Transportation") {
    iconImageSrc = "car.svg";
  }
  if (transaction.category === "Education") {
    iconImageSrc = "graduation-cap.svg";
  }
  if (transaction.category === "Savings") {
    iconImageSrc = "circle-dollar-sign.svg";
  }

  return (
    <>
      <StyledTransactionCard type={transaction.type}>
        <StyledIcon
          src={iconImageSrc}
          alt={`${transaction.category}-icon`}
          width="25"
          height="25"
        />

        <StyledContainer>
          <StyledCatergory>{transaction.category}</StyledCatergory>
          <StyledType>{transaction.type}</StyledType>
        </StyledContainer>

        <StyledAmount>{`${transaction.amount}€`}</StyledAmount>

        <StyledDate>{transaction.date}</StyledDate>
        <Delete
          transactionId={transaction}
          onDeleteTransaction={onDeleteTransaction}
        />
      </StyledTransactionCard>
    </>
  );
}

const StyledTransactionCard = styled.div`
  background-color: ${({ type }) =>
    type === "expense" ? "rgb(244, 123, 123)" : "rgb(165, 221, 145)"};
  width: 360px;
  height: 200px;
  border: solid black 1px;
  border-radius: 15px;
  margin-bottom: 20px;
  margin-left: 8px;
  margin-top: 10px;
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
