import {Input, AutoComplete} from 'antd';
import {useMemo, useState} from 'react';

import './SearchBox.scss';

import {Symbol} from '../Symbol/Symbol.component';

import {getSearchSymbols} from '../../middleware/search.middleware';

import {SearchBoxProps} from './SearchBox.types';
import {SymbolSearch} from '../../types/search/symbolSearch.types';
import {debounceFunc} from '../../utils/common.utils';

// import {SYMBOLS} from '../../__mocks__/symbolSearch.mocks';

export const SearchBox = ({getStockDetails}: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [dataSource, setDataSource] = useState<SymbolSearch[]>([]);

  const onSearch = async (input: string) => {
    const response = await getSearchSymbols(input);
    setDataSource(response.bestMatches);
  };

  const renderSearchOptions = (data: SymbolSearch) => ({
    value: data['1. symbol'],
    label: <Symbol data={data} />,
  });

  const throttleGetStockDetails = useMemo(
    (): ((input: string) => void) => debounceFunc(onSearch, 400),
    [],
  );

  return (
    <AutoComplete
      className="auto-complete"
      options={dataSource.map(renderSearchOptions)}
      value={inputValue}
      onChange={setInputValue}
      onSearch={throttleGetStockDetails}
      onSelect={getStockDetails}
    >
      <Input.Search
        enterButton
        size="large"
        placeholder="Enter Stock Code"
        className="search-input"
        onSearch={onSearch}
      />
    </AutoComplete>
  );
};
