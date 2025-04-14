import { StyledAddHintCard } from "./Styled-NoDataHint";

function NoDataHint({ transactionsData }) {
  let isVisible = false;
  if (transactionsData.length === 0) {
    isVisible = !isVisible;
  }
  return (
    <>
      {isVisible && (
        <StyledAddHintCard>
          No Data avalible! Create Transaction
        </StyledAddHintCard>
      )}
    </>
  );
}

export default NoDataHint;
