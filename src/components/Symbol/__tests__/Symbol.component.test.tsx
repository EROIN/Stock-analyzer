import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import {Symbol} from '../Symbol.component';
// eslint-disable-next-line jest/no-mocks-import
import {SYMBOLS} from '../../../__mocks__/symbolSearch.mocks';

describe('<Symbol/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(<Symbol data={SYMBOLS[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with empty data', () => {
    const tree = renderer
      //@ts-ignore
      .create(<Symbol data={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
