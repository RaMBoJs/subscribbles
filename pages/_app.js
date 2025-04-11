import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [showAddNewTransation, setShowAddNewTransaction] = useState(false);

  function handleAddTransaction(newTransaction) {
    setTransactionsData((prev) => [newTransaction, ...prev]);
  }

  function handleDeleteTransaction(transactionId) {
    const filterdTransaction = transactionsData.filter(
      (element) => transactionId.id !== element.id
    );
    setTransactionsData(filterdTransaction);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactionsData={transactionsData}
        onAddTransaction={handleAddTransaction}
        onDeleteTransaction={handleDeleteTransaction}
        showAddNewTransation={showAddNewTransation}
      />
    </>
  );
}
