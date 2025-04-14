import { data } from "@/assets/transactions";
import {
  StyledButton,
  StyledSelect,
  StyledForm,
} from "./Styled-FilterTransactions";

function FilterTransaction({ handleOnSubmitFilterCategory }) {
  return (
    <>
      <StyledForm onSubmit={handleOnSubmitFilterCategory}>
        <StyledSelect name="option">
          <option value={"All"}>All</option>
          {data.map((element, index) => {
            return (
              <option key={index} value={element.category}>
                {element.category}
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
