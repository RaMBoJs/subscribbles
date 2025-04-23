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

  return {
    transactionsObjects,
    isLoadingTransactions,
    errorTransactions,
    addTransaction,
  };
}

export default useAppDataTransactions;
