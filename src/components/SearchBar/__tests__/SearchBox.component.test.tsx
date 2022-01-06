import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import {SearchBox} from '../SearchBox.component';

describe('<SearchBox/>', () => {
  it('renders correctly with default props', () => {
    const getStockDetails = jest.fn();
    const tree = renderer
      .create(<SearchBox getStockDetails={getStockDetails} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<SearchBox/>: API calls', () => {
  let component: JSX.Element;
  const getStockDetails = jest.fn();

  beforeEach(() => {
    component = <SearchBox getStockDetails={getStockDetails} />;
  });

  it('calls debounced API', () => {
    render(component);
    const input = screen.getByLabelText('search-input');

    fireEvent.click(input);
    // @ts-ignore
    console.log(input.value);
    fireEvent.change(input, {target: {value: 'IBM{enter}'}});
    fireEvent.keyPress(input, {key: 'Enter', charCode: 13});
    expect(getStockDetails).toHaveBeenCalledTimes(1);
  });
});
