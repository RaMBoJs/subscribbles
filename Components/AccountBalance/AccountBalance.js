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
    iconColor = "#228B22";
  }
  if (total < 0) {
    iconColor = "#ff2800";
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
