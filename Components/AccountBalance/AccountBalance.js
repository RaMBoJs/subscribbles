import {
  StyledWrapper,
  StyledBalance,
  StyledCardTitle,
  StyledDescriptionTotal,
} from "./style-AccountBalance";
import IconCard from "../IconCard/IconCard";

function AccountBalance({ transactions }) {
  const total = transactions.reduce((sum, item) => sum + item.amount, 0);
  const totalAmount = total.toFixed(2);

  let iconColor = "#ffffff";
  if (total > 0) {
    iconColor = "#a5dd91";
  }
  if (total < 0) {
    iconColor = "#f47b7b";
  }

  return (
    <StyledWrapper>
      <IconCard width={24} height={24} iconColor={iconColor} />
      <StyledDescriptionTotal>Total</StyledDescriptionTotal>
      <StyledCardTitle>Account Balance</StyledCardTitle>
      <StyledBalance>{totalAmount} € </StyledBalance>
    </StyledWrapper>
  );
}

export default AccountBalance;
