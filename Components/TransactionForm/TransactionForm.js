import categoriesData from "@/assets/categories";
import {
  StyledSubmitButton,
  StyledAmountInput,
  StyledTypeRadio,
  StyledDateInput,
  StyledCategoryInput,
  StyledFormHeadline,
  StyledTransactionForm,
} from "@/Components/TransactionForm/style-TansactionForm";
import handleTransactionSubmit from "@/lib/utils/components/TransactionForm/handleTransactionSubmit";

const TransactionForm = ({ handleAddTransaction }) => {
  return (
    <StyledTransactionForm
      onSubmit={(event) => handleTransactionSubmit(event, handleAddTransaction)}
    >
      <StyledFormHeadline>Create a new Transaction Entry</StyledFormHeadline>

      <StyledCategoryInput aria-label="Category input" name="category" required>
        {categoriesData.map((element) => (
          <option key={element.id} value={element.categoryValue}>
            {element.categoryText}
          </option>
        ))}
      </StyledCategoryInput>

      <StyledDateInput
        aria-label="Date input"
        type="date"
        name="date"
        required
      />

      <StyledAmountInput
        aria-label="Amount input"
        type="number"
        step="0.01"
        name="amount"
        placeholder="Enter Amount"
        required
      />
      <StyledTypeRadio>
        <label htmlFor="radioInputIncome">
          <input
            id="radioInputIncome"
            type="radio"
            name="type"
            value="income"
            required
          />
          Income
        </label>

        <label htmlFor="radioInputExpense">
          <input
            id="radioInputExpense"
            type="radio"
            name="type"
            value="expense"
            required
          />
          Expense
        </label>
      </StyledTypeRadio>

      <StyledSubmitButton type="submit">Create Transaction</StyledSubmitButton>
    </StyledTransactionForm>
  );
};

export default TransactionForm;
