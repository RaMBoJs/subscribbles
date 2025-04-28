import { StyledSelect } from "./Styled-incomeExpanse";

function IncomeExpanseView({ handleOnChangeTypeView }) {
  const filterOptions = [
    { value: "all", label: "All Types" },
    { value: "income", label: "Income" },
    { value: "expense", label: "Expanse" },
  ];

  return (
    <StyledSelect aria-label="Filter by type" onChange={handleOnChangeTypeView}>
      {filterOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default IncomeExpanseView;
