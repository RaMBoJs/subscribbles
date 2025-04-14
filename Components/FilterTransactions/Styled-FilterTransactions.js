import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "selector ." "button .";
  gap: 0.5rem;
  background-color: white;
  min-width: 360px;
  padding: min(3rem, 2%);
  border-radius: 20px;
`;

const StyledSelect = styled.select`
  grid-area: selector;
  place-self: start;
  background-color: grey;
  border: 2px solid black;
  width: 120px;
  border-radius: 10px;
  height: 30px;
  margin: 1px 0px 20px 0px;
`;

const StyledButton = styled.button`
  grid-area: button;
  border: 2px solid black;
  width: 120px;
  border-radius: 25px;
  height: 30px;
  margin: 1px 0px 20px 0px;
`;

export { StyledButton, StyledSelect, StyledForm };
