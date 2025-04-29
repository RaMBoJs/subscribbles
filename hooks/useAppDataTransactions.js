import { useState, useEffect } from "react";
import useSWR from "swr";
import swrConfig from "@/lib/fetch/swrConfig";

function useAppDataTransactions() {
  const {
    data: transactionsData,
    isLoading: isLoadingTransactions,
    error: errorTransactions,
    mutate,
  } = useSWR(`/api/transactions`, swrConfig.fetcher);

  const [transactionsObjects, setTransactionsObjects] = useState([]);

  useEffect(() => {
    if (Array.isArray(transactionsData)) {
      setTransactionsObjects((previousData) =>
        JSON.stringify(previousData) === JSON.stringify(transactionsData)
          ? previousData
          : transactionsData
      );
    }
  }, [transactionsData]);

  function addTransaction(newTransactionObject) {
    setTransactionsObjects((previousData) => [
      newTransactionObject,
      ...previousData,
    ]);
    mutate(`/api/transactions`, transactionsObjects);
  }

  function deleteTransaction(transaction) {
    setTransactionsObjects((previousData) =>
      previousData.filter((element) => element._id !== transaction._id)
    );
    mutate(`/api/transactions`, (previousData) =>
      previousData.filter((element) => element._id !== transaction._id)
    );
  }

  function updateTransaction(transaction, dataBody) {
    dataBody = { ...dataBody, _id: transaction._id };
    setTransactionsObjects((previousData) =>
      previousData.map((element) =>
        element._id === transaction._id ? dataBody : element
      )
    );
    mutate(`/api/transactions`, (previousData) =>
      previousData.map((element) =>
        element._id === transaction._id ? dataBody : element
      )
    );
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
