import styled from "styled-components";

const StyledModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(80, 80, 80, 0.6);
`;

const StyledUpdateForm = styled.form`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100;
  width: 100;
  margin: 0px 0px 0px 0px;
  height: 200;
  width: 200;
  background-color: rgb(90, 90, 90);
`;

const StyledButton = styled.button`
  background: none;
  border: none;
`;

export { StyledModalBackground, StyledUpdateForm, StyledButton };
