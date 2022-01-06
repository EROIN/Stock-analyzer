import {Input, AutoComplete} from 'antd';
import {useState} from 'react';

import './SearchBox.scss';

import {Symbol} from '../Symbol/Symbol.component';

import {getSearchSymbols} from '../../middleware/search.middleware';
import {SymbolSearch} from '../../types/search/symbolSearch.types';

import {SYMBOLS} from '../../__mocks__/symbolSearch.mocks';

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [dataSource, setDataSource] = useState<SymbolSearch[]>([]);

  const onSearch = async (input: string) => {
    const response = await getSearchSymbols(input);
    setDataSource(response.bestMatches);
  };

  const renderSearchOptions = (data: SymbolSearch, index: number) => (
    <AutoComplete.Option
      text={`${data['2. name']} (${data['1. symbol']})`}
      key={data['1. symbol']}
    >
      <Symbol data={data} />
    </AutoComplete.Option>
  );

  return (
    <AutoComplete
      className="auto-complete"
      dataSource={SYMBOLS.map(renderSearchOptions)}
      value={inputValue}
      onChange={setInputValue}
      onSearch={onSearch}
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
