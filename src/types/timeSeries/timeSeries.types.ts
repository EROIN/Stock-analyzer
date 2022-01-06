export interface TimeSeriesMetaData {
  string: Record<string, string>;
}

export interface TimeSeries {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export interface TimeSeriesDaily {
  string: TimeSeries;
}

export interface GetTimeSeriesAPIResponse {
  'Meta Data': TimeSeriesMetaData;
  'Time Series (Daily)': TimeSeriesDaily;
}
