import styled from "styled-components";

const DropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "CategoryFilter IncomeExpanse";
`;

const StyledSelect = styled.select`
  grid-area: IncomeExpanse;
  place-self: end;
  border: 2px solid black;
  width: 150px;
  border-radius: 10px;
  height: 30px;
  margin: 1px 0px 20px 0px;
  //Neumorphen
  color: rgb(98, 87, 84);
  border: 2px solid rgb(246, 237, 237);
  box-shadow: inset 2px 2px 4px rgba(34, 34, 34, 0.62),
    inset -2px -2px 4px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0),
    -4px -4px 8px rgba(255, 255, 255, 0);
`;

export { StyledSelect, DropdownWrapper };
