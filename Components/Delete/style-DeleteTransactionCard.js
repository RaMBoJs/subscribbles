import styled from "styled-components";
import Image from "next/image";
// rewiev
const StyledTrashImage = styled(Image)`
  margin-left: 160px;
  margin-top: 10px;
`;

const StyledToggle = styled.div`
  background-color: none;
`;

const StyledDeleteCard = styled.div`
  height: 100px;
  width: 360px;
  background-color: rgb(234, 228, 228);
  /* border: solid black 1px; */
  border-radius: 10px;

//Neumorphen 
  border: 2px solid rgb(246, 237, 237);
  background-color:rgb(255, 255, 255); 
  box-shadow:
  6px 6px 10px rgb(207, 207, 207),    
 -6px -6px 10px  rgba(141, 141, 141, 0.76); 




`;

const StyledCancelButton = styled.button`
  background-color: rgb(241, 236, 236);
  border-radius: 10px;
  border: "solid black 1px";
//Neumorphen
  background: rgb(255, 255, 255);
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; 
  
`;

const StyledYesButton = styled.button`
  background-color: rgb(239, 112, 112);
  border-radius: 10px;
  border: "solid black 1px";
  background:  rgb(239, 112, 112);
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; 



`;

const StyledCenterText = styled.p`
  margin-top: 1px;
  text-align: center;
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: -10px;
`;

const StyledModal = styled.div`
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

export {
  StyledTrashImage,
  StyledToggle,
  StyledDeleteCard,
  StyledCancelButton,
  StyledYesButton,
  StyledCenterText,
  StyledFlex,
  StyledModal,
};
