import Image from "next/image";
import { useState } from "react";

import {
  StyledTrashImage,
  StyledToggle,
  StyledDeleteCard,
  StyledCancelButton,
  StyledYesButton,
  StyledCenterText,
  StyledFlex,
} from "./style-DeleteTransactionCard";
import styled from "styled-components";

function DeleteTransactionCard({ transactionId, onDeleteTransaction }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StyledToggle
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Image src="/circle-x.svg" height={25} width={25} alt="circle-icon" />
      </StyledToggle>

      {isModalOpen && (
        <StyledModal>
          <StyledDeleteCard>
            <StyledTrashImage
              src="/trash.svg"
              width={25}
              height={25}
              alt="trash-icon"
            />
            <StyledCenterText>
              Are you sure you want to delete this product?
            </StyledCenterText>
            <StyledFlex>
              <StyledCancelButton
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                No, cancel
              </StyledCancelButton>
              <StyledYesButton
                onClick={() => {
                  onDeleteTransaction(transactionId);
                }}
              >
                Yes, I am sure
              </StyledYesButton>
            </StyledFlex>
          </StyledDeleteCard>
        </StyledModal>
      )}
    </>
  );
}

export default DeleteTransactionCard;

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
