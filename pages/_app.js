import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);

  function handleAddTransaction(newTransaction) {
    setTransactionsData((prev) => [newTransaction, ...prev]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactionsData={transactionsData}
       onAddTransaction={handleAddTransaction}
      />
    </>
  );
}
