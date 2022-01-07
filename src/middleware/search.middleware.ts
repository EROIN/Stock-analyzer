import {LabelInValueType, RawValueType} from 'rc-select/lib/Select';

import {
  GET_STOCK_DETAILS_URL,
  SEARCH_TERM_URL,
} from '../constants/search.constants';
import {parseFetchResponse} from '../utils/common.utils';

import {
  SymbolSearchAPIResponse,
  StockDetailAPIResponse,
} from '../types/search/symbolSearch.types';

export const getSearchSymbols = async (
  searchTerm: string,
): Promise<SymbolSearchAPIResponse> => {
  return fetch(
    `${process.env.REACT_APP_BASE_URLs}${SEARCH_TERM_URL}${searchTerm}&apikey=${process.env.REACT_APP_STOCKS_API_KEY3}`,
  ).then(parseFetchResponse);
};

export const getStockDetailsFromSymbol = async (
  symbol: RawValueType | LabelInValueType,
): Promise<StockDetailAPIResponse> => {
  return fetch(
    `${process.env.REACT_APP_BASE_URLs}${GET_STOCK_DETAILS_URL}${symbol}&apikey=${process.env.REACT_APP_STOCKS_API_KEY3}`,
  ).then(parseFetchResponse);
};
