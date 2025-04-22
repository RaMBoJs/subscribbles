import { useState } from "react";
import {
  StyledModalBackground,
  StyledUpdateForm,
  StyledButton,
} from "./Style-Update";
import Image from "next/image";
import categoriesData from "@/assets/categories";

function Update({ transaction, handleOnSubmitUpdateTransaction }) {
  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <StyledButton type="button" name="editButton" onClick={handleShowForm}>
        <Image src="./pencil-line.svg" alt="bild" width="25" height="25" />
      </StyledButton>

      {showForm && (
        <StyledModalBackground>
          <StyledUpdateForm
            onSubmit={(event) => {
              handleOnSubmitUpdateTransaction(event, transaction);
              handleShowForm();
            }}
          >
            <input
              type="number"
              name="amount"
              defaultValue={transaction.amount}
              required
              step="0.01"
            />
            <input
              type="date"
              name="date"
              defaultValue={transaction.date.slice(0, 10)}
              required
            />
            <select name="type" defaultValue={transaction.type} required>
              <option value={"income"}>Income</option>
              <option value={"expense"}>Expense</option>
            </select>
            <select
              name="category"
              required
              defaultValue={transaction.category}
            >
              {categoriesData.map((element) => {
                return element.id !== 0 ? (
                  <option key={element.id} defaultValue={element.categoryValue}>
                    {element.categoryText}
                  </option>
                ) : null;
              })}
            </select>
            <button type="submit">Update</button>
            <button type="button" onClick={handleShowForm}>
              Cancel
            </button>
          </StyledUpdateForm>
        </StyledModalBackground>
      )}
    </>
  );
}

export default Update;
