import styled from "styled-components";

const StyledForm = styled.div`
  width: 150px;
`;

const StyledSelect = styled.select`
  width: 150px;
  border-radius: 10px;
  height: 30px;
  color: rgb(98, 87, 84);
  border: 2px solid rgb(246, 237, 237);
  box-shadow: inset 2px 2px 4px rgba(34, 34, 34, 0.62),
    inset -2px -2px 4px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0),
    -4px -4px 8px rgba(255, 255, 255, 0);
`;

export { StyledSelect, StyledForm };
