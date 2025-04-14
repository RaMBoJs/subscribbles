import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [filterType, setFilterType] = useState("all");

  const filteredData =
    filterType === "all"
      ? transactionsData
      : transactionsData.filter(
          (transactions) => transactions.type === filterType
        );

  function handleAddTransaction(newTransaction) {
    setTransactionsData([newTransaction, ...transactionsData]);
  }

  function handleDeleteTransaction(transaction) {
    const filteredTransaction = transactionsData.filter(
      (element) => transaction.id !== element.id
    );
    setTransactionsData(filteredTransaction);
  }
  function handleOnChange(event) {
    setFilterType(event.target.value);
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
