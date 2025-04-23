async function handleTransactionSubmit(event, handleAddTransaction) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (data.transactionType === "expense") {
    data.transactionAmount = data.transactionAmount * -1;
  }

  const requestBody = {
    date: data.date,
    category: data.category,
    amount: parseFloat(data.amount),
    type: data.type,
  };

  try {
    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error("Error on save: ", result.error);
    } else {
      handleAddTransaction(requestBody);
    }
  } catch (error) {
    console.error("Request Error: ", error);
  }

  event.target.reset();
}

export default handleTransactionSubmit;
