import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [showAddNewTransation, setShowAddNewTransaction] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredData =
    selectedFilter === "All"
      ? transactionsData
      : transactionsData.filter(
          (element) => element.category === selectedFilter
        );

  function handleAddTransaction(newTransaction) {
    setTransactionsData([newTransaction, ...transactionsData]);
  }

  function handleDeleteTransaction(transactionId) {
    const filterdTransaction = transactionsData.filter(
      (element) => transactionId.id !== element.id
    );
    setTransactionsData(filterdTransaction);
  }

  function handleOnSubmitFilterCategory(event) {
    event.preventDefault();
    const inputOption = event.target.elements.option.value;
    setSelectedFilter(inputOption);
    event.target.reset();
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactionsData={filteredData}
        onAddTransaction={handleAddTransaction}
        onDeleteTransaction={handleDeleteTransaction}
        showAddNewTransation={showAddNewTransation}
        handleOnSubmitFilterCategory={handleOnSubmitFilterCategory}
      />
    </>
  );
}
