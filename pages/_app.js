import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);

  function handleAddTransaction(newTransaction) {
    setTransactionsData((prev) => [newTransaction, ...prev]);
  }

  function handleDelete(transaction) {
    const filterdTransaction = transactionsData.filter(
      (element) => transaction.id !== element.id
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
        handleDelete={handleDelete}
      />
    </>
  );
}
