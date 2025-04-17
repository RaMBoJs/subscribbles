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
  const [formData, setFormData] = useState({
    ...transaction,
    date: transaction.date.slice(0, 10),
  });

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
              value={formData.amount}
              required
              onChange={(event) =>
                setFormData({ ...formData, amount: event.target.value })
              }
            ></input>
            <input
              type="date"
              name="date"
              value={formData.date}
              required
              onChange={(event) =>
                setFormData({ ...formData, date: event.target.value })
              }
            ></input>
            <label htmlFor="expense">expense</label>
            <input
              type="radio"
              name="type"
              value="expense"
              id="expense"
              checked={formData.type === "expense"}
              onChange={(event) =>
                setFormData({ ...formData, type: event.target.value })
              }
              required
            ></input>
            <label htmlFor="income">income</label>
            <input
              type="radio"
              name="type"
              value="income"
              id="income"
              checked={formData.type === "income"}
              onChange={(event) =>
                setFormData({ ...formData, type: event.target.value })
              }
            ></input>
            <select
              name="category"
              required
              value={formData.category}
              onChange={(event) =>
                setFormData({ ...formData, category: event.target.value })
              }
            >
              {categoriesData.map((element) => {
                return element.id !== 0 ? (
                  <option key={element.id} value={element.categoryValue}>
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
