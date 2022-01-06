import {useState} from 'react';
import {Tabs} from 'antd';
import {StepBackwardOutlined, StepForwardOutlined} from '@ant-design/icons';

const {TabPane} = Tabs;

import './SearchResults.scss';

import {SearchResultsProps} from './SearchResults.types';
import {SearchedTab} from '../../components/SearchedTab/SearchedTab.component';
import {Refresher} from '../../components/Refresher/Refresher.component';
import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export const SearchResults = (props: SearchResultsProps) => {
  const {data, refreshData} = props;

  const [activeKeyIndex, setActiveKeyIndex] = useState<number>(0);

  const reFetchData = () => {
    refreshData(data[activeKeyIndex]['Symbol']);
  };

  const changeActiveKey = (keyIndex: number) => () => {
    if (keyIndex < 0) keyIndex = data.length - 1;
    else if (keyIndex >= data.length) keyIndex = 0;
    setActiveKeyIndex(keyIndex);
  };

  const onChange = (activeKey: any) => {
    const keyIndex = data.findIndex(result => result['Symbol'] === activeKey);
    setActiveKeyIndex(keyIndex);
  };

  const addTabs = (result: StockDetailAPIResponse) => (
    <TabPane key={result['Symbol']} tab={result['Name']}>
      <SearchedTab data={result} />
    </TabPane>
  );

  if (data.length == 0)
    return <div className="search-result-empty">Search Something!!</div>;
  else if (data.length === 1)
    return (
      <div className="search-results-tabs-container">
        <Refresher refreshData={reFetchData} />
        <SearchedTab data={data[0]} />
      </div>
    );
  return (
    <div className="search-results-tabs-container">
      <Refresher refreshData={reFetchData} />
      <StepBackwardOutlined
        className="search-result-previous-icon"
        onClick={changeActiveKey(activeKeyIndex - 1)}
      />
      <Tabs
        type="editable-card"
        activeKey={data[activeKeyIndex]['Symbol']}
        onChange={onChange}
      >
        {data.map(addTabs)}
      </Tabs>
      <StepForwardOutlined
        className="search-result-next-icon"
        onClick={changeActiveKey(activeKeyIndex + 1)}
      />
    </div>
  );
};
