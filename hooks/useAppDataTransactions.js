import { useState, useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import swrConfig from "@/lib/fetch/swrConfig";

function useAppDataTransactions() {
  const {
    data: transactionsData,
    isLoading: isLoadingTransactions,
    error: errorTransactions,
  } = useSWR(`/api/transactions`, swrConfig.fetcher, SWRConfig);

  const [transactionsObjects, setTransactionsObjects] = useState([]);

  useEffect(() => {
    if (transactionsData && Array.isArray(transactionsData)) {
      setTransactionsObjects(transactionsData);
    }
  }, [transactionsData]);

  function addTransaction(newTransactionObject) {
    setTransactionsObjects([newTransactionObject, ...transactionsObjects]);
  }

  function deleteTransaction(transaction) {
    const filteredTransactionObjects = transactionsObjects.filter(
      (element) => transaction._id !== element._id
    );
    setTransactionsObjects(filteredTransactionObjects);
  }

  function updateTransaction(transaction, dataBody) {
    const updatedTransactionsObjects = transactionsObjects.map((element) =>
      element._id === transaction._id ? dataBody : element
    );
    setTransactionsObjects(updatedTransactionsObjects);
  }

  return {
    transactionsObjects,
    isLoadingTransactions,
    errorTransactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  };
}

export default useAppDataTransactions;
