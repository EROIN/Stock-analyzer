import {GetTimeSeriesAPIResponse} from '../types/timeSeries/timeSeries.types';
import {parseFetchResponse} from '../utils/common.utils';
import {GET_TIME_SERIES_URL} from '../constants/timeSeries.constants';

export const getTimeSeriesForSymbol = async (
  symbol: string,
): Promise<GetTimeSeriesAPIResponse> => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}${GET_TIME_SERIES_URL}${symbol}&apikey=${process.env.REACT_APP_STOCKS_API_KEY3}`,
  ).then(parseFetchResponse);
};
