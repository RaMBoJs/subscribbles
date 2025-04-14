import { StyledSelect, DropdownWrapper } from "./Styled-incomeExpanse";

function IncomeExpanseView({ handleOnChangeTypeView }) {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "income", label: "Income" },
    { value: "expense", label: "Expanse" },
  ];

  return (
    <DropdownWrapper>
      <StyledSelect
        aria-label="Filter by type"
        onChange={handleOnChangeTypeView}
      >
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
