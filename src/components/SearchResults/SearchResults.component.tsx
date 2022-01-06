import {useEffect, useState} from 'react';
import {Tabs} from 'antd';
import {StepBackwardOutlined, StepForwardOutlined} from '@ant-design/icons';

const {TabPane} = Tabs;

import './SearchResults.scss';

import {SearchResultsProps} from './SearchResults.types';
import {SearchedTab} from '../../components/SearchedTab/SearchedTab.component';
import {Refresher} from '../../components/Refresher/Refresher.component';
import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export const SearchResults = (props: SearchResultsProps) => {
  const {
    data: {results, activeKey: nextKey},
    refreshData,
  } = props;

  const [activeKeyIndex, setActiveKeyIndex] = useState<string>('');

  useEffect(() => {
    setActiveKeyIndex(nextKey);
  }, [nextKey]);

  const reFetchData = () => {
    refreshData(results[activeKeyIndex]['Symbol']);
  };

  const changeActiveKey = (increment: number) => () => {
    const allKeys = Object.keys(results);
    let currentKey = allKeys.findIndex((key: string) => key === activeKeyIndex);
    currentKey = currentKey + increment;
    console.log(currentKey);

    if (currentKey < 0) currentKey = allKeys.length - 1;
    else if (currentKey >= allKeys.length) currentKey = 0;
    console.log(currentKey, allKeys[currentKey], results[allKeys[currentKey]]);
    setActiveKeyIndex(allKeys[currentKey]);
  };

  const onChange = (activeKey: string) => {
    console.log(activeKey);

    setActiveKeyIndex(activeKey);
  };

  const addTabs = (stockKey: string) => (
    <TabPane
      key={results[stockKey]['Symbol'] || '<Invalid Key>'}
      tab={results[stockKey]['Name'] || '<Invalid Key>'}
    >
      <SearchedTab data={results[stockKey]} />
    </TabPane>
  );

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
      {results[activeKeyIndex] &&
        Object.keys(results[activeKeyIndex]).length > 0 && (
          <Refresher refreshData={reFetchData} />
        )}
      <StepBackwardOutlined
        className="search-result-previous-icon"
        onClick={changeActiveKey(-1)}
      />
      <Tabs type="editable-card" activeKey={activeKeyIndex} onChange={onChange}>
        {Object.keys(results).map(addTabs)}
      </Tabs>
      <StepForwardOutlined
        className="search-result-next-icon"
        onClick={changeActiveKey(1)}
      />
    </div>
  );
};
