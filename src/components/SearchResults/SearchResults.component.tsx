import {Tabs} from 'antd';
import {StepBackwardOutlined, StepForwardOutlined} from '@ant-design/icons';

const {TabPane} = Tabs;

import './SearchResults.scss';

import {SearchResultsProps} from './SearchResults.types';
import {SearchedTab} from '../../components/SearchedTab/SearchedTab.component';
import {Refresher} from '../../components/Refresher/Refresher.component';
import {noOp} from '../../utils/common.utils';
// import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export const SearchResults = (props: SearchResultsProps) => {
  const {data: results, activeKey, refreshData, setActiveKey} = props;

  if (!results[activeKey])
    return <div className="search-result-empty">Search Something!!</div>;

  const reFetchData = () => {
    refreshData(results[activeKey]['Symbol']);
  };

  const changeActiveKey = (increment: number) => () => {
    const allKeys = Object.keys(results);
    let currentKey = allKeys.findIndex((key: string) => key === activeKey);
    currentKey = currentKey + increment;
    if (currentKey < 0) currentKey = allKeys.length - 1;
    else if (currentKey >= allKeys.length) currentKey = 0;
    setActiveKey(allKeys[currentKey]);
  };

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
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
      <SearchedTab data={results[stockKey]} activeKey={activeKey} />
    </TabPane>
  );

  if (Object.keys(results).length === 1)
    return (
      <div className="search-results-tabs-container">
        {Object.keys(results[activeKey]).length > 0 && (
          <Refresher refreshData={reFetchData} />
        )}
        <SearchedTab data={results[activeKey]} activeKey={activeKey} />
      </div>
    );
  return (
    <div className="search-results-tabs-container">
      {results[activeKey] && Object.keys(results[activeKey]).length > 0 && (
        <Refresher refreshData={reFetchData} />
      )}
      <StepBackwardOutlined
        aria-label="go-to-previous-search-tab"
        className="search-result-previous-icon"
        onClick={changeActiveKey(-1)}
      />
      <Tabs type="editable-card" activeKey={activeKey} onChange={onChange}>
        {Object.keys(results).map(addTabs)}
      </Tabs>
      <StepForwardOutlined
        aria-label="go-to-next-search-tab"
        className="search-result-next-icon"
        onClick={changeActiveKey(1)}
      />
    </div>
  );
};

// added so that if someone doesnt pass by mistake, it doesnt break the page
SearchResults.defaultProps = {
  data: {
    '': {},
  },
  activeKey: '',
  setActiveKey: noOp,
  refreshData: noOp,
};
