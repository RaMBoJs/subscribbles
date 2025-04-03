import { uid } from "uid";
import React from "react";
import { useRef } from "react";
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

const TransactionForm = ({ transactionsData, setTransactionsData }) => {
  const identNumber = uid();
  const formRef = useRef();

  function HandleCreateNewTransaction(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.type === "expense") {
      data.amount = data.amount * -1;
    }

    const requestBody = {
      id: identNumber,
      category: data.category,
      date: data.date,
      amount: parseFloat(data.amount),
      type: data.type,
    };

    setTransactionsData([requestBody, ...transactionsData]);
    formRef.current.reset();
  }

  return (
    <StyledForm onSubmit={HandleCreateNewTransaction} ref={formRef}>
      <StyledDescription>Create a new Transaction Entry</StyledDescription>

      <StyledCategory
        aria-label="Category input"
        id="category"
        name="category"
        required
      >
        {categoriesData.map((element) => (
          <option key={element.id} value={element.categoryValue}>
            {element.categoryText}
          </option>
        ))}
      </StyledCategory>

      <StyledDate
        aria-label="Date input"
        id="date"
        type="date"
        name="date"
        required
      ></StyledDate>

      <StyledAmount
        aria-label="Amount input"
        id="amount"
        type="number"
        name="amount"
        placeholder="Enter Amount"
        required
        inputMode="decimal"
        pattern="[0-9]*"
        onInput={(element) => {
          element.target.value = element.target.value.replace(/[^\d.]/g, "");
        }}
      ></StyledAmount>
      <StyledRadio aria-label="Type selection">
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

      <StyledButton aria-label="Create Transaction" type="submit">
        Create Transaction
      </StyledButton>
    </StyledForm>
  );
};

export default TransactionForm;
