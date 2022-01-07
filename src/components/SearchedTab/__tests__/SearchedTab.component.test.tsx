import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';

import {SearchedTab} from '../SearchedTab.component';
// eslint-disable-next-line jest/no-mocks-import
import {SEARCH_RESULTS} from '../../../__mocks__/searchResult.mocks';
import {getTimeSeriesForSymbol} from '../../../middleware/timeSeries.middleware';

jest.mock('../../../middleware/timeSeries.middleware', () => ({
  getTimeSeriesForSymbol: jest.fn(() => Promise.resolve()),
}));

describe('<SearchedTab/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer
      .create(<SearchedTab data={SEARCH_RESULTS.results.ibm} activeKey="ibm" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with empty data', () => {
    const tree = renderer
      //@ts-ignore
      .create(<SearchedTab data={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<SearchedTab/>: API call', () => {
  it('calls time series api on mount', () => {
    (getTimeSeriesForSymbol as jest.Mock).mockClear();
    const activeKey = 'ibm';
    render(
      <SearchedTab data={SEARCH_RESULTS.results.ibm} activeKey={activeKey} />,
    );
    expect(getTimeSeriesForSymbol).toHaveBeenCalledTimes(1);
    expect(getTimeSeriesForSymbol).toHaveBeenCalledWith(activeKey);
  });
});
