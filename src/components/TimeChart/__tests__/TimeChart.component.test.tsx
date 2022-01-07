import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import {TimeChart} from '../TimeChart.component';
// eslint-disable-next-line jest/no-mocks-import
import {TIME_SERIES_DATA} from '../../../__mocks__/timeSeries.mocks';

describe('<TimeChart/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer
      .create(<TimeChart chartData={TIME_SERIES_DATA} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with empty data', () => {
    const tree = renderer
      //@ts-ignore
      .create(<TimeChart data={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
