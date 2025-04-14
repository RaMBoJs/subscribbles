import { uid } from "uid";
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

const TransactionForm = ({ handleAddTransaction }) => {
  const identNumber = uid();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.type === "expense") {
      data.amount = data.amount * -1;
    }

    const requestBody = {
      ...data,
      id: identNumber,
      amount: parseFloat(data.amount),
    };

    handleAddTransaction(requestBody);
    event.target.reset();
  }

  return (
    <StyledTransactionForm onSubmit={handleSubmit}>
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
