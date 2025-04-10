import styled from "styled-components";

const DropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "CategoryFilter IncomeExpanse";
`;

const StyledSelect = styled.select`
  grid-area: IncomeExpanse;
  place-self: end;
  background-color: grey;
  border: 2px solid black;
  width: 150px;
  border-radius: 10px;
  height: 30px;
  margin: 1px 0px 20px 0px;
`;

export { StyledSelect, DropdownWrapper };
