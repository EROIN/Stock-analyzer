import {LabelInValueType, RawValueType} from 'rc-select/lib/Select';

import {
  GET_STOCK_DETAILS_URL,
  SEARCH_TERM_URL,
} from '../constants/search.constants';
import {parseFetchResponse} from '../utils/common.utils';

import {SymbolSearchAPIResponse} from '../types/search/symbolSearch.types';

export const getSearchSymbols = async (
  searchTerm: string,
): Promise<SymbolSearchAPIResponse> => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}${SEARCH_TERM_URL}${searchTerm}&apikey=${process.env.REACT_APP_STOCKS_API_KEY}`,
  ).then(parseFetchResponse);
};

export const getStockDetailsFromSymbol = async (
  symbol: RawValueType | LabelInValueType,
) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}${GET_STOCK_DETAILS_URL}${symbol}&apikey=${process.env.REACT_APP_STOCKS_API_KEY}`,
  ).then(parseFetchResponse);
};
