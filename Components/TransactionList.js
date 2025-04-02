import styled from "styled-components";
import Image from "next/image";

export default function TransactionList({ singleObject }) {
  return (
    <>
      {/* Hier wird die Catergorys abgefragt und wenn eine true ist wird das dazugehörige Symbol
    eingefügt */}
      <StyledDiv type={singleObject.type}>
        {(singleObject.category === "Groceries" && (
          <StyledIcon src="\salad.svg" alt="bild" width="25" height="25" />
        )) ||
          (singleObject.category === "Rent" && (
            <StyledIcon src="\house.svg" alt="bild" width="25" height="25" />
          )) ||
          (singleObject.category === "Salary" && (
            <StyledIcon
              src="\hand-coins.svg"
              alt="bild"
              width="25"
              height="25"
            />
          )) ||
          (singleObject.category === "Insurance" && (
            <StyledIcon src="\umbrella.svg" alt="bild" width="25" height="25" />
          )) ||
          (singleObject.category === "Entertainment" && (
            <StyledIcon
              src="\clapperboard.svg"
              alt="bild"
              width="25"
              height="25"
            />
          )) ||
          (singleObject.category === "Restaurants" && (
            <StyledIcon src="\utensils.svg" alt="bild" width="25" height="25" />
          )) ||
          (singleObject.category === "Investment" && (
            <StyledIcon
              src="\chart-line.svg"
              alt="bild"
              width="25"
              height="25"
            />
          )) ||
          (singleObject.category === "Transportation" && (
            <StyledIcon src="\car.svg" alt="bild" width="25" height="25" />
          )) ||
          (singleObject.category === "Education" && (
            <StyledIcon
              src="\graduation-cap.svg"
              alt="bild"
              width="25"
              height="25"
            />
          )) ||
          (singleObject.category === "Savings" && (
            <StyledIcon
              src="\circle-dollar-sign.svg"
              alt="bild"
              width="25"
              height="25"
            />
          ))}

        <StyledFlex>
          <StyledCatergory>{singleObject.category}</StyledCatergory>
          <Styledtype>{singleObject.type}</Styledtype>
        </StyledFlex>

        <StyledAmount>
          {/* Ausgabe des Wertes. Wenn der type===Expense ist soll ein minus zeichen zugefügt werden
              ansonten ohne minus zeichen*/}
          {singleObject.type === "Expense"
            ? `-${singleObject.amount}$`
            : `${singleObject.amount}$`}
        </StyledAmount>

        <StyledDate>{singleObject.date}</StyledDate>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
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
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
