import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filterType, setFilterType] = useState("all");

  let filteredData =
    selectedFilter === "All"
      ? transactionsData
      : transactionsData.filter(
          (element) => element.category === selectedFilter);

  //double used
   filteredData =
    filterType === "all"
      ? transactionsData
      : transactionsData.filter(
          (transactions) => transactions.type === filterType);

  function handleAddTransaction(newTransaction) {
    setTransactionsData([newTransaction, ...transactionsData]);
  }

  function handleDeleteTransaction(transaction) {
    const filteredTransaction = transactionsData.filter(
      (element) => transaction.id !== element.id
    );
    setTransactionsData(filteredTransaction);
  }
  function handleOnChangeTypeView(event) {
    setFilterType(event.target.value);
  }

  function handleOnSubmitFilterCategory(event) {
    event.preventDefault();
    const inputOption = event.target.elements.option.value;
    setSelectedFilter(inputOption);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactionsData={filteredData}
        handleOnChangeTypeView={handleOnChangeTypeView}
        handleAddTransaction={handleAddTransaction}
        handleDeleteTransaction={handleDeleteTransaction}
        handleOnSubmitFilterCategory={handleOnSubmitFilterCategory}
      />
    </>
  );
}
