import {
  StyledButton,
  StyledSelect,
  StyledForm,
} from "./Styled-FilterTransactions";

function FilterTransaction({ handleOnSubmitFilterCategory, categoriesData }) {
  return (
    <>
      <StyledForm onSubmit={handleOnSubmitFilterCategory}>
        <StyledSelect name="option">
          <option value={"All"}>All</option>
          {categoriesData.map((element) => {
            return (
              <option key={element._id} value={element.category}>
                {element.categoryText}
              </option>
            );
          })}
        </StyledSelect>
        <StyledButton type="submit">Hier drücken</StyledButton>
      </StyledForm>
    </>
  );
}

export default FilterTransaction;
