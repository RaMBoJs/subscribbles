import {
  StyledTransactionCard,
  StyledCatergory,
  StyledType,
  StyledAmount,
  StyledDate,
  StyledIcon,
  StyledContainer,
  StyledIconContainer,
} from "./Styled-TransactionCard";
import Delete from "../Delete/DeleteTransactionCard";
import Update from "../Update/Update";

function TransactionCard({
  transaction,
  handleDeleteTransaction,
  handleUpdateTransaction,
}) {
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
    <StyledTransactionCard>
      <StyledIcon
        type={transaction.type}
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
      <StyledDate>{transaction.date.slice(0, 10)}</StyledDate>
      <StyledIconContainer>
        <Delete
          transaction={transaction}
          handleDeleteTransaction={handleDeleteTransaction}
        />
        <Update
          transaction={transaction}
          handleUpdateTransaction={handleUpdateTransaction}
        />
      </StyledIconContainer>
    </StyledTransactionCard>
  );
}

export default TransactionCard;
