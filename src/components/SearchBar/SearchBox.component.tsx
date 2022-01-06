import {Input, AutoComplete} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
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
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<SymbolSearch[]>([]);

  const onSearch = async (input: string) => {
    if (!input) return;
    setLoading(true);
    try {
      const response = await getSearchSymbols(input);
      setDataSource(response.bestMatches);
    } catch (e) {
      // show taost later
    } finally {
      setIsListVisible(true);
      setLoading(false);
    }
  };

  const renderSearchOptions = (data: SymbolSearch) => ({
    value: data['1. symbol'],
    label: <Symbol data={data} />,
  });

  const throttleGetStockDetails = useMemo(
    (): ((input: string) => void) => debounceFunc(onSearch, 400),
    [],
  );

  const searchStock = (input: string) => () => {
    getStockDetails(input);
    setIsListVisible(false);
  };

  const onSelectStock = (value: any) => {
    searchStock(value)();
  };

  const openList = () => setIsListVisible(true);
  const closeList = () => setIsListVisible(false);

  return (
    <AutoComplete
      className="auto-complete"
      options={dataSource.map(renderSearchOptions)}
      value={inputValue}
      onChange={setInputValue}
      onSearch={throttleGetStockDetails}
      onSelect={onSelectStock}
      open={isListVisible}
      onFocus={openList}
      onBlur={closeList}
    >
      <Input.Search
        enterButton
        size="large"
        placeholder="Enter Stock Code"
        className="search-input"
        onSearch={searchStock(inputValue)}
        suffix={
          <LoadingOutlined
            className={loading ? 'show-loading' : 'hide-loading'}
          />
        }
      />
    </AutoComplete>
  );
};
