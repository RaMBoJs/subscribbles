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
  margin: 6px 12px 6px 12px;
  padding: min(3rem, 2%);
  border-radius: 20px;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  padding: 1rem;
  border: 2px solid rgb(246, 237, 237);
`;
const StyledFormHeadline = styled.p`
  grid-area: description;
  font-size: 1.1rem;
  font-weight: bold;
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
  margin: 6px;
  color: rgb(98, 87, 84);
  border: 2px solid rgb(246, 237, 237);
  box-shadow: inset 2px 2px 4px rgba(34, 34, 34, 0.62),
    inset -2px -2px 4px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0),
    -4px -4px 8px rgba(255, 255, 255, 0);
`;
const StyledDateInput = styled.input`
  place-self: center;
  grid-area: date;
  width: 150px;
  border-radius: 10px;
  height: 30px;
  margin: 6px;
  color: rgb(98, 87, 84);
  border: 2px solid rgb(246, 237, 237);
  box-shadow: inset 2px 2px 4px rgba(34, 34, 34, 0.62),
    inset -2px -2px 4px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0),
    -4px -4px 8px rgba(255, 255, 255, 0);
`;

const StyledTypeRadio = styled.div`
  place-self: center;
  grid-area: type;
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  margin: 6px;
  font-size: 15px;
  font-weight: bold;
`;

const StyledAmountInput = styled.input`
  place-self: center;
  grid-area: amount;
  width: 150px;
  border-radius: 10px;
  height: 30px;
  margin: 6px;
  color: rgb(98, 87, 84);
  border: 2px solid rgb(246, 237, 237);
  box-shadow: inset 2px 2px 4px rgba(34, 34, 34, 0.62),
    inset -2px -2px 4px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0),
    -4px -4px 8px rgba(255, 255, 255, 0);

  &::placeholder {
    color: rgb(98, 87, 84);
  }
`;

const StyledSubmitButton = styled.button`
  grid-area: button;
  place-self: center;
  width: 150px;
  height: 40px;
  border-radius: 30px;
  margin: 6px;
  color: black;
  background: rgb(255, 255, 255);
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
export {
  StyledSubmitButton,
  StyledAmountInput,
  StyledTypeRadio,
  StyledDateInput,
  StyledCategoryInput,
  StyledFormHeadline,
  StyledTransactionForm,
};
