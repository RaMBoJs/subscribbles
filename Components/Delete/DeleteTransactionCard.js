import Image from "next/image";
import { useState } from "react";

import {
  StyledTrashImage,
  StyledToggleButton,
  StyledDeleteCard,
  StyledCancelButton,
  StyledYesButton,
  StyledCenterText,
  StyledFlex,
} from "./style-DeleteTransactionCard";

function DeleteTransactionCard({ transaction, handleDelete }) {
  const [toogleButton, setToggleButton] = useState(false);

  function handletoggle() {
    setToggleButton(!toogleButton);
  }

  return (
    <>
      <StyledToggleButton
        onClick={() => {
          handletoggle();
        }}
      >
        <Image src="/circle-x.svg" height={25} width={25} alt="circle-icon" />
      </StyledToggleButton>

      {toogleButton && (
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
                setToggleButton(false);
              }}
            >
              No, cancel
            </StyledCancelButton>
            <StyledYesButton
              onClick={() => {
                handleDelete(transaction);
              }}
            >
              Yes, I am sure
            </StyledYesButton>
          </StyledFlex>
        </StyledDeleteCard>
      )}
    </>
  );
}

export default DeleteTransactionCard;
