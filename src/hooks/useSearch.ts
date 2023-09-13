import { useCallback, useState } from "react";
import { fetcher } from "../api/fetcher";
import debounced from "lodash.debounce";
import { SearchResponse } from "./types";
export const useSearch = () => {
  const [suggestedList, setSuggestedLsit] = useState<SearchResponse>({
    continents: null,
    countries: null,
    languages: null,
  });

  const handleSearch = async (query: string) => {
    const response = await fetcher("/search", {
      body: JSON.stringify({ query: query }),
    });
    const suggestedList = await response.json();
    setSuggestedLsit(suggestedList);
  };

  const handleSearchDebounced = useCallback(debounced(handleSearch, 500), []);
  return {
    search: handleSearchDebounced,
    suggestedList,
  };
};
