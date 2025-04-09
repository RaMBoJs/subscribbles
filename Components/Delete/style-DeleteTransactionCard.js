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
  border: solid black 1px;
  border-radius: 10px;
`;

const StyledCancelButton = styled.button`
  background-color: rgb(241, 236, 236);
  border-radius: 10px;
  border: "solid black 1px";
`;

const StyledYesButton = styled.button`
  background-color: rgb(239, 112, 112);
  border-radius: 10px;
  border: "solid black 1px";
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

export {
  StyledTrashImage,
  StyledToggle,
  StyledDeleteCard,
  StyledCancelButton,
  StyledYesButton,
  StyledCenterText,
  StyledFlex,
};
