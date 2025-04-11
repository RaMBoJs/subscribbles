import styled from "styled-components";

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

const StyledAddHintCard = styled.div`
  height: 100px;
  width: 360px;
  background-color: rgb(229, 229, 220);
  border-radius: 10px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
