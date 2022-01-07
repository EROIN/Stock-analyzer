import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import {SearchResults} from '../SearchResults.component';
// eslint-disable-next-line jest/no-mocks-import
import {SEARCH_RESULTS} from '../../../__mocks__/searchResult.mocks';
jest.mock('../../../middleware/timeSeries.middleware', () => ({
  getTimeSeriesForSymbol: jest.fn(() => Promise.resolve()),
}));

describe('<SearchResults/>', () => {
  it('renders correctly with no data', () => {
    const tree = renderer.create(<SearchResults data={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with one result', () => {
    const tree = renderer
      //@ts-ignore
      .create(
        <SearchResults
          data={{
            ibm: SEARCH_RESULTS.results.ibm,
          }}
          activeKey="ibm"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with multiple results', () => {
    const tree = renderer
      //@ts-ignore
      .create(<SearchResults data={SEARCH_RESULTS.results} activeKey="ibm" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
