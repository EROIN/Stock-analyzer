import {RawValueType} from 'rc-select/lib/Select';

import {
  getSearchSymbols,
  getStockDetailsFromSymbol,
} from '../search.middleware';
import {
  GET_STOCK_DETAILS_URL,
  SEARCH_TERM_URL,
} from '../../constants/search.constants';
//@ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({rates: {CAD: 1.42}}),
  }),
);

process.env.REACT_APP_BASE_URL = 'baseUrl/';
process.env.REACT_APP_STOCKS_API_KEY3 = 'apikey';

describe('getSearchSymbols api call', () => {
  it('getSearchSymbols: should call api with correct data', async () => {
    await getSearchSymbols('9999999999');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `baseUrl/${SEARCH_TERM_URL}9999999999&apikey=apikey`,
    );
  });
});

describe('getStockDetailsFromSymbol api call', () => {
  it('getStockDetailsFromSymbol: should call api with correct data', async () => {
    await getStockDetailsFromSymbol('SYM' as RawValueType);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `baseUrl/${GET_STOCK_DETAILS_URL}SYM&apikey=apikey`,
    );
  });
});
