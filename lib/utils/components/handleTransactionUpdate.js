async function handleTransactionUpdate(
  event,
  transaction,
  handleUpdateTransaction
) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (data.type === "expense") {
    data.amount = data.amount * -1;
  }
  const dataBody = {
    ...data,
    amount: parseFloat(data.amount),
  };
  const id = transaction._id;

  try {
    const res = await fetch(`/api/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBody),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error("Error on save: ", result.error);
    } else {
      handleUpdateTransaction(transaction, dataBody);
    }
  } catch (error) {
    console.error("Request Error: ", error);
  }
  event.target.reset();
}

export default handleTransactionUpdate;
