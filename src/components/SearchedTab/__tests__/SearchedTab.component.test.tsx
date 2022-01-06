import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import {SearchedTab} from '../SearchedTab.component';
// eslint-disable-next-line jest/no-mocks-import
import {SEARCH_RESULTS} from '../../../__mocks__/searchResult.mocks';

describe('<SearchedTab/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer
      .create(<SearchedTab data={SEARCH_RESULTS.results.ibm} />)
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
