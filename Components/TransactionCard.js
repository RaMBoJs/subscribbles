import styled from "styled-components";
import Image from "next/image";

export default function TransactionCard({ transaction }) {
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
      {/* Hier wird die Catergorys abgefragt und wenn eine true ist wird das dazugehörige Symbol
    eingefügt */}
      <StyledTransactionCard type={transaction.type}>
        <StyledIcon src={iconImageSrc} alt="bild" width="25" height="25" />

        <StyledFlex>
          <StyledCatergory>{transaction.category}</StyledCatergory>
          <Styledtype>{transaction.type}</Styledtype>
        </StyledFlex>

        <StyledAmount>
          {/* Ausgabe des Wertes. Wenn der type===Expense ist soll ein minus zeichen zugefügt werden
              ansonten ohne minus zeichen*/}
          {transaction.type === "Expense"
            ? `-${transaction.amount}$`
            : `${transaction.amount}$`}
        </StyledAmount>

        <StyledDate>{transaction.date}</StyledDate>
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

const Styledtype = styled.div``;

const StyledAmount = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-align: end;
  margin-top: -45px;
`;

const StyledDate = styled.div`
  margin-top: 50px;
`;

const StyledIcon = styled(Image)`
  margin-left: 310px;
`;

const StyledFlex = styled.div`
  margin-top: 40px;
`;
