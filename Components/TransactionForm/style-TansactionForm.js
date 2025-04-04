import styled from "styled-components";

const StyledTransactionForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "description description"
    "category date"
    "amount type"
    "button button";
  gap: 0.5rem;
  background-color: grey;
  min-width: 360px;
  padding: min(3rem, 2%);
  border-radius: 20px;
`;
const StyledFormHeadline = styled.p`
  grid-area: description;
  font-size: 1.2rem;
  grid-column: 1 / -1;
  place-self: center;
  margin: 6px 6px 10px 6px;
`;

const StyledCategoryInput = styled.select`
  grid-area: category;
  place-self: center;
  width: 150px;
  border-radius: 10px;
  height: 30px;
  border: none;
  margin: 6px;
`;
const StyledDateInput = styled.input`
  place-self: center;
  grid-area: date;
  width: 150px;
  border-radius: 10px;
  height: 30px;
  border: none;
  margin: 6px;
`;

const StyledTypeRadio = styled.div`
  place-self: center;
  grid-area: type;
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  margin: 6px;
`;

const StyledAmountInput = styled.input`
  place-self: center;
  grid-area: amount;
  width: 150px;
  border-radius: 10px;
  height: 30px;
  margin: 6px;
  border: none;
`;

const StyledSubmitButton = styled.button`
  grid-area: button;
  place-self: center;
  width: 150px;
  height: 40px;
  border-radius: 30px;
  margin: 5px;
`;
export {
  StyledSubmitButton,
  StyledAmountInput,
  StyledTypeRadio,
  StyledDateInput,
  StyledCategoryInput,
  StyledFormHeadline,
  StyledTransactionForm
};
