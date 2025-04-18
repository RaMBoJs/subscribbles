import {
  StyledTransactionCard,
  StyledCatergory,
  StyledType,
  StyledAmount,
  StyledDate,
  StyledIcon,
  StyledContainer,
} from "./Styled-TransactionCard";
import Delete from "../Delete/DeleteTransactionCard";

function TransactionCard({ transaction, handleDeleteTransaction }) {
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
        <StyledAmount>{`${transaction.amount.toFixed(2)} €`}</StyledAmount>
        <StyledDate>{transaction.date}</StyledDate>
        <Delete
          transactionId={transaction}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </StyledTransactionCard>
    </>
  );
}

export default TransactionCard;
