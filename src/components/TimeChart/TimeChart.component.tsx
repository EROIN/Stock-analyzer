import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import './TimeChart.scss';
// import {TIME_SERIES_DATA} from '../../__mocks__/timeSeries.mocks';
import {
  getChartDataFromAPIData,
  getXAxisFormat,
} from '../../utils/timeSeries.utils';
import {TimeChartProps} from './TimeChart.types';

export const TimeChart = (props: TimeChartProps) => {
  const {chartData} = props;

  if (!chartData) return null;

  const data = getChartDataFromAPIData(chartData);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={getXAxisFormat} angle={-45} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="close"
          stroke="#8884d8"
          activeDot={{r: 8}}
        />
        <Line type="monotone" dataKey="high" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
