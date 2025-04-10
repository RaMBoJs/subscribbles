import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [filteredData, setFilteredData] = useState(transactionsData);

  function handleAddTransaction(newTransaction) {
    setTransactionsData((prev) => [newTransaction, ...prev]);
  }

  function handleDeleteTransaction(transactionId) {
    const filterdTransaction = transactionsData.filter(
      (element) => transactionId.id !== element.id
    );
    setTransactionsData(filterdTransaction);
  }
  function handleOnChange(event) {
    let filteredOpjects = transactionsData;
    if (event.target.value !== "all") {
      filteredOpjects = transactionsData.filter(
        (element) => element.type === event.target.value
      );
    }
    setFilteredData(filteredOpjects);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactionsData={filteredData}
        handleOnChange={handleOnChange}
        onAddTransaction={handleAddTransaction}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </>
  );
}
