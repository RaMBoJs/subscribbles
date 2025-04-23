import { useState } from "react";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import swrConfig from "@/lib/fetch/swrConfig";
import Head from "next/head";
import useAppDataTransactions from "@/hooks/useAppDataTransactions";
import useAppDataCategories from "@/hooks/usaAppDataCategories";

export default function App({ Component, pageProps }) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filterType, setFilterType] = useState("all");

  // custom hooks to load, write data
  const {
    transactionsObjects,
    isLoadingTransactions,
    errorTransactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  } = useAppDataTransactions();
  const {
    categoriesObjects,
    isLoadingCategories,
    errorCategories,
    addCategories,
  } = useAppDataCategories();

  // Data Handler
  function handleAddTransaction(newTransactionObject) {
    addTransaction(newTransactionObject);
  }
  function handleDeleteTransaction(transaction) {
    deleteTransaction(transaction);
  }

  function handleUpdateTransaction(transaction, dataBody) {
    updateTransaction(transaction, dataBody);
  }
  // --------------

  // Filter Data
  const filteredData = transactionsObjects
    .filter(
      (transaction) =>
        selectedFilter === "All" || transaction.category === selectedFilter
    )
    .filter(
      (transaction) => filterType === "all" || transaction.type === filterType
    );

  function handleOnChangeTypeView(event) {
    setFilterType(event.target.value);
  }

  function handleOnSubmitFilterCategory(event) {
    event.preventDefault();
    const inputOption = event.target.elements.option.value;
    setSelectedFilter(inputOption);
  }
  // --------------

  // Loading data & Show Data load errors
  if (isLoadingTransactions || isLoadingCategories) {
    return <p>Loading data...</p>;
  }

  if (errorTransactions || errorCategories) {
    return <p>Error: {errorTransactions.message || errorCategories.message}</p>;
  }

  return (
    <>
      <SWRConfig value={swrConfig} />
      <Head>
        <title> Finory | RaMBo-Js</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactionsData={filteredData}
        handleOnChangeTypeView={handleOnChangeTypeView}
        handleAddTransaction={handleAddTransaction}
        handleDeleteTransaction={handleDeleteTransaction}
        handleOnSubmitFilterCategory={handleOnSubmitFilterCategory}
        handleUpdateTransaction={handleUpdateTransaction}
      />
    </>
  );
}
