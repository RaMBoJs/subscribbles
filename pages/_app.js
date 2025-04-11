import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [filteredData, setFilteredData] = useState(transactionsData);

  function handleAddTransaction(newTransaction) {
    setTransactionsData([newTransaction, ...transactionsData]);
    setFilteredData([newTransaction, ...filteredData]);
  }

  function handleDeleteTransaction(transactionId) {
    const filterdTransaction = transactionsData.filter(
      (element) => transactionId.id !== element.id
    );
    setTransactionsData(filterdTransaction);
    setFilteredData(filterdTransaction);
  }
  function handleOnChange(event) {
    let filteredObjects = transactionsData;
    if (event.target.value !== "all") {
      filteredObjects = transactionsData.filter(
        (element) => element.type === event.target.value
      );
    }
    setFilteredData(filteredObjects);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactionsData={filteredData}
        handleOnChange={handleOnChange}
        handleAddTransaction={handleAddTransaction}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </>
  );
}
