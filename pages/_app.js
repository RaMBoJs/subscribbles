import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";
import { SWRConfig } from "swr";
import swrConfig from "@/lib/fetch/swrConfig";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filterType, setFilterType] = useState("all");

  const filteredData = transactionsData
    .filter(
      (transaction) =>
        selectedFilter === "All" || transaction.category === selectedFilter
    )
    .filter(
      (transaction) => filterType === "all" || transaction.type === filterType
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

  return (
    <>
      <SWRConfig value={swrConfig} />
      <Head>
        <title>RaMBo-Js | Finory</title>
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
