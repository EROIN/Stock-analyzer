import {
  SearchResultsStore,
  StockDetailAPIResponse,
} from '../types/search/symbolSearch.types';

export const getNewKeyFromSearchResponse = (
  stockDetails: StockDetailAPIResponse,
  symbol: string,
): string => {
  const newKey =
    Object.keys(stockDetails).length > 0 && stockDetails.Note == undefined
      ? symbol
      : 'nodata';
  return newKey.toLowerCase();
};

export const getNewSearchResults = (
  prevSearchResults: SearchResultsStore,
  stockDetails: StockDetailAPIResponse,
  newKey: string,
) => {
  // this is beacuse API is rate limited
  if (stockDetails.Note) stockDetails = {} as StockDetailAPIResponse;
  return {
    results: {
      ...prevSearchResults.results,
      [newKey]: stockDetails,
    },
  };
};
