import { StyledSelect, DropdownWrapper } from "./Styled-incomeExpanse";

function IncomeExpanseView({ handleOnChange }) {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "income", label: "Income" },
    { value: "expense", label: "Expanse" },
  ];

  return (
    <DropdownWrapper>
      <StyledSelect aria-label="Filter by type" onChange={handleOnChange}>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export default IncomeExpanseView;
