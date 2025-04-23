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

  return {
    transactionsObjects,
    isLoadingTransactions,
    errorTransactions,
    addTransaction,
    deleteTransaction,
  };
}

export default useAppDataTransactions;
