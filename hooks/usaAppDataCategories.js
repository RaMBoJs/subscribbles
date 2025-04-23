import { useState, useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import swrConfig from "@/lib/fetch/swrConfig";

function useAppDataCategories() {
  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useSWR(`/api/categories`, swrConfig.fetcher, SWRConfig);

  const [categoriesObjects, setCategoriesObjects] = useState([]);

  useEffect(() => {
    if (categoriesData && Array.isArray(categoriesData)) {
      setCategoriesObjects(categoriesData);
    }
  }, [categoriesData]);

  function addCategories(newCategoryObject) {
    setCategoriesObjects([newCategoryObject, ...categoriesObjects]);
  }

  return {
    categoriesObjects,
    isLoadingCategories,
    errorCategories,
    addCategories,
  };
}

export default useAppDataCategories;
