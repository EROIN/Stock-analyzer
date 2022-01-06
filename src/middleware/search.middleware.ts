import {SEARCH_TERM_URL} from '../constants/search.constants';
import {SymbolSearchAPIResponse} from '../types/search/symbolSearch.types';

export const getSearchSymbols = async (
  searchTerm: string,
): Promise<SymbolSearchAPIResponse> => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}${SEARCH_TERM_URL}${searchTerm}&apikey=${process.env.REACT_APP_STOCKS_API_KEY}`,
  ).then(res => res.json());
};
