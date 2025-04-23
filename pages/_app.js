import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions"; // old
import { SWRConfig } from "swr";
import swrConfig from "@/lib/fetch/swrConfig";
import Head from "next/head";
import useAppDataTransactions from "@/hooks/useAppDataTransactions";
import useAppDataCategories from "@/hooks/usaAppDataCategories";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filterType, setFilterType] = useState("all");

  // custom hooks to load, write data
  const {
    transactionsObjects,
    addTransaction,
    isLoadingTransactions,
    errorTransactions,
  } = useAppDataTransactions();
  const {
    categoriesObjects,
    isLoadingCategories,
    errorCategories,
    addCategories,
  } = useAppDataCategories();

  // Handler
  function handleAddTransaction(newTransactionObject) {
    addTransaction(newTransactionObject);
  }
  // --------------

  const filteredData = transactionsData
    .filter(
      (transaction) =>
        selectedFilter === "All" || transaction.category === selectedFilter
    )
    .filter(
      (transaction) => filterType === "all" || transaction.type === filterType
    );

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

  function handleOnSubmitUpdateTransaction(event, transaction) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dataBody = {
      ...data,
      id: transaction.id,
      amount: parseFloat(data.amount),
    };
    const updatedTransactions = transactionsData.map((element) =>
      element.id === transaction.id ? dataBody : element
    );
    setTransactionsData(updatedTransactions);
    event.target.reset();
  }

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
        handleOnSubmitUpdateTransaction={handleOnSubmitUpdateTransaction}
      />
    </>
  );
}
