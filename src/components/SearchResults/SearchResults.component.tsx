import {useEffect, useState} from 'react';
import {Tabs} from 'antd';
import {StepBackwardOutlined, StepForwardOutlined} from '@ant-design/icons';

const {TabPane} = Tabs;

import './SearchResults.scss';

import {SearchResultsProps} from './SearchResults.types';
import {SearchedTab} from '../../components/SearchedTab/SearchedTab.component';
import {Refresher} from '../../components/Refresher/Refresher.component';
// import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export const SearchResults = (props: SearchResultsProps) => {
  const {data: results, activeKey: nextKey, refreshData} = props;

  const [activeKey, setactiveKey] = useState<string>('');

  useEffect(() => {
    console.log('nextKey', nextKey);
    setactiveKey(nextKey);
  }, [nextKey]);

  const reFetchData = () => {
    refreshData(results[activeKey]['Symbol']);
  };

  const changeActiveKey = (increment: number) => () => {
    const allKeys = Object.keys(results);
    let currentKey = allKeys.findIndex((key: string) => key === activeKey);
    currentKey = currentKey + increment;
    if (currentKey < 0) currentKey = allKeys.length - 1;
    else if (currentKey >= allKeys.length) currentKey = 0;
    setactiveKey(allKeys[currentKey]);
  };

  const onChange = (newActiveKey: string) => {
    setactiveKey(newActiveKey);
  };

  const addTabs = (stockKey: string) => (
    <TabPane
      key={
        results[stockKey]['Symbol']
          ? results[stockKey]['Symbol'].toLowerCase()
          : 'nodata'
      }
      tab={results[stockKey]['Name'] || 'NoData'}
    >
      <SearchedTab data={results[stockKey]} />
    </TabPane>
  );

  console.log(activeKey);

  if (Object.keys(results).length == 0)
    return <div className="search-result-empty">Search Something!!</div>;
  else if (Object.keys(results).length === 1)
    return (
      <div className="search-results-tabs-container">
        {Object.keys(results[nextKey]).length > 0 && (
          <Refresher refreshData={reFetchData} />
        )}
        <SearchedTab data={results[nextKey]} />
      </div>
    );
  return (
    <div className="search-results-tabs-container">
      {results[activeKey] && Object.keys(results[activeKey]).length > 0 && (
        <Refresher refreshData={reFetchData} />
      )}
      <StepBackwardOutlined
        className="search-result-previous-icon"
        onClick={changeActiveKey(-1)}
      />
      <Tabs type="editable-card" activeKey={activeKey} onChange={onChange}>
        {Object.keys(results).map(addTabs)}
      </Tabs>
      <StepForwardOutlined
        className="search-result-next-icon"
        onClick={changeActiveKey(1)}
      />
    </div>
  );
};
