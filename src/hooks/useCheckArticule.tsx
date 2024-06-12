import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SearchResult } from "../types";

interface WikipediaSearchResponse {
  query: {
    pages: {};
  };
}

interface UseWikipediaSearchProps {
  pageid: number;
}

const fetchWikipediaArticule = async (
  pageid: number
): Promise<SearchResult[]> => {
  const { data } = await axios.get<WikipediaSearchResponse>(
    "https://en.wikipedia.org/w/api.php",
    {
      params: {
        action: "query",
        list: "search",
        srsearch: query,
        format: "json",
        origin: "*",
      },
    }
  );
  return data.query.search;
};

export const useWikipediaSearch = ({ query }: UseWikipediaSearchProps) => {
  return useQuery({
    queryKey: ["wikipediaSearch", query],
    queryFn: () => fetchWikipediaSearchResults(query),
    enabled: !!query,
    placeholderData: keepPreviousData,
  });
};
