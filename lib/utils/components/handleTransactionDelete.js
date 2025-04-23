async function handleTransactionDelete(transaction, handleDeleteTransaction) {
  const id = transaction._id;
  try {
    const res = await fetch(`/api/transactions/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.error("Error on save: ", result.error);
    } else {
      handleDeleteTransaction(transaction);
    }
  } catch (error) {
    console.error("Request Error: ", error);
  }
}

export default handleTransactionDelete;
