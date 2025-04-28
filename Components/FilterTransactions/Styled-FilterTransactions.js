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
  border: 2px solid black;
  width: 120px;
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

const StyledButton = styled.button`
  grid-area: button;
  border: 2px solid black;
  width: 120px;
  border-radius: 25px;
  height: 30px;
  margin: 1px 0px 20px 0px;

//Neumorphen
background:rgb(255, 255, 255);
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; 
  color: rgb(98, 87, 84);
`;

export { StyledButton, StyledSelect, StyledForm };
