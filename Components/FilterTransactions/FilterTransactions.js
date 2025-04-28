import { StyledSelect, StyledForm } from "./Styled-FilterTransactions";

function FilterTransaction({ handleOnSubmitFilterCategory, categoriesData }) {
  return (
    <StyledForm onChange={handleOnSubmitFilterCategory}>
      <StyledSelect name="option">
        <option value={"All"}>All Categories</option>
        {categoriesData.map((element) => {
          return (
            <option key={element._id} value={element.category}>
              {element.categoryText}
            </option>
          );
        })}
      </StyledSelect>
    </StyledForm>
  );
}

export default FilterTransaction;
