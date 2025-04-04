import { uid } from "uid";
import React from "react";
import categoriesData from "@/assets/categories";
import {
  StyledButton,
  StyledAmount,
  StyledRadio,
  StyledDate,
  StyledCategory,
  StyledDescription,
  StyledForm,
} from "@/Components/TransactionForm/style-TansactionForm";

const TransactionForm = ({ onAddTransaction }) => {
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

    onAddTransaction(requestBody);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledDescription>Create a new Transaction Entry</StyledDescription>

      <StyledCategory aria-label="Category input" name="category" required>
        {categoriesData.map((element) => (
          <option key={element.id} value={element.categoryValue}>
            {element.categoryText}
          </option>
        ))}
      </StyledCategory>

      <StyledDate aria-label="Date input" type="date" name="date" required />

      <StyledAmount
        aria-label="Amount input"
        type="number"
        step="0.01"
        name="amount"
        placeholder="Enter Amount"
        required
      />
      <StyledRadio>
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
      </StyledRadio>

      <StyledButton type="submit">Create Transaction</StyledButton>
    </StyledForm>
  );
};

export default TransactionForm;
