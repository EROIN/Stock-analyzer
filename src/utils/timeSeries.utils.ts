import {GetTimeSeriesAPIResponse} from '../types/timeSeries/timeSeries.types';

export const getChartDataFromAPIData = (apiData: GetTimeSeriesAPIResponse) => {
  const timeSeries = apiData['Time Series (Daily)'];
  return Object.keys(timeSeries)
    .slice(0, 50)
    .reduce((accumulator: any, current: string) => {
      return [
        ...accumulator,
        {
          date: current,
          //@ts-ignore
          close: Number(timeSeries[current]['4. close']),
          //@ts-ignore
          high: Number(timeSeries[current]['2. high']),
        },
      ];
    }, []);
};

export const getXAxisFormat = (key: string) => {
  const split = key.split('-');
  const date = new Date(
    Number(split[0]),
    Number(split[1]) - 1,
    Number(split[2]),
  );
  return `${split[2]} ${date.toLocaleString('default', {month: 'short'})}`;
};
