import {getChartDataFromAPIData, getXAxisFormat} from '../timeSeries.utils';
// eslint-disable-next-line jest/no-mocks-import
import {TIME_SERIES_DATA} from '../../__mocks__/timeSeries.mocks';
// eslint-disable-next-line jest/no-mocks-import
import {CHART_DATA_MOCK} from '../../__mocks__/chartData.mocks';

describe('getChartDataFromAPIData', () => {
  it('return data in correct chart format', () => {
    expect(getChartDataFromAPIData(TIME_SERIES_DATA)).toEqual(CHART_DATA_MOCK);
  });
});

describe('getXAxisFormat', () => {
  it('return data X-AXIS format', () => {
    expect(getXAxisFormat('2022-01-01')).toEqual('01 Jan');
  });
});
