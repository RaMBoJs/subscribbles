import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/assets/transactions";

export default function App({ Component, pageProps }) {
  const [transactionsData, setTransactionsData] = useState(data);
  const [showAddNewTransation, setShowAddNewTransaction] = useState(false);
  const [filterd, setfilterd] = useState([]);
  const [filterdAll, setFilteredAll] = useState([]);
  const [isVisibleData, setVisible] = useState([]);

  useEffect(() => {
    setVisible(filterd);
  }, [filterd]);

  useEffect(() => {
    setVisible(filterdAll);
  }, [filterdAll]);

  useEffect(() => {
    setVisible(transactionsData);
  }, [transactionsData]);

  function handleAddTransaction(newTransaction) {
    setTransactionsData((prev) => [newTransaction, ...prev]);
  }

  function handleDeleteTransaction(transactionId) {
    const filterdTransaction = transactionsData.filter(
      (element) => transactionId.id !== element.id
    );
    setTransactionsData(filterdTransaction);
  }

  function handleFilter(event) {
    event.preventDefault();

    const inputOption = event.target.elements.option.value;

    if (inputOption === "All") {
      const filterdCategory = transactionsData.map((element) => {
        return element;
      });
      setFilteredAll(filterdCategory);
    }

    if (inputOption !== "All") {
      const filterdCategory = transactionsData.filter(
        (element) => element.category === inputOption
      );
      setfilterd(filterdCategory);
    }
    event.target.reset();
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactionsData={isVisibleData}
        onAddTransaction={handleAddTransaction}
        onDeleteTransaction={handleDeleteTransaction}
        showAddNewTransation={showAddNewTransation}
        handleFilter={handleFilter}
      />
    </>
  );
}
