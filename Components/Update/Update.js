import { data } from "@/assets/transactions";
import { useState } from "react";
import { StyledModalBackground, StyledUpdateForm } from "./Style-Update";
import Image from "next/image";

function Update({ transaction, handleOnSubmitUpdateTransaction }) {
  const [showForm, setShowForm] = useState(false);
  const [formdata, setformdata] = useState({
    ...transaction,
    date: transaction.date.slice(0, 10),
  });

  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <button
        style={{ background: "none", border: "none" }}
        onClick={handleShowForm}
      >
        <Image src="./pencil-line.svg" alt="bild" width="25" height="25" />
      </button>

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
              value={formdata.amount}
              required
              onChange={(event) =>
                setformdata({ ...formdata, amount: event.target.value })
              }
            ></input>
            <input
              type="date"
              name="date"
              value={formdata.date}
              required
              onChange={(event) =>
                setformdata({ ...formdata, date: event.target.value })
              }
            ></input>
            <label htmlFor="expense">expense</label>
            <input
              type="radio"
              name="type"
              value="expense"
              id="expense"
              checked={formdata.type === "expense"}
              onChange={(event) =>
                setformdata({ ...formdata, type: event.target.value })
              }
              required
            ></input>
            <label htmlFor="income">income</label>
            <input
              type="radio"
              name="type"
              value="income"
              id="income"
              checked={formdata.type === "income"}
              onChange={(event) =>
                setformdata({ ...formdata, type: event.target.value })
              }
            ></input>
            <select
              name="category"
              required
              value={formdata.category}
              onChange={(event) =>
                setformdata({ ...formdata, category: event.target.value })
              }
            >
              {data.map((element, index) => {
                return (
                  <option key={index} value={element.category}>
                    {element.category}
                  </option>
                );
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
