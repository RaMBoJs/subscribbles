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
  StyledModal,
} from "./style-DeleteTransactionCard";
import handleTransactionDelete from "@/lib/utils/components/handleTransactionDelete";

function DeleteTransactionCard({ transaction, handleDeleteTransaction }) {
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
                  handleTransactionDelete(transaction, handleDeleteTransaction);
                  setIsModalOpen(false);
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
