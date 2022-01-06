import {Tabs} from 'antd';
const {TabPane} = Tabs;

import './SearchResults.scss';

import {SearchResultsProps} from './SearchResults.types';
import {SearchedTab} from '../../components/SearchedTab/SearchedTab.component';
import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export const SearchResults = (props: SearchResultsProps) => {
  const {data} = props;

  const addTabs = (result: StockDetailAPIResponse) => (
    <TabPane key={result['Symbol']} tab={result['Name']}>
      <SearchedTab data={result} />
    </TabPane>
  );

  if (data.length == 0)
    return <div className="search-result-empty">Search Something!!</div>;
  else if (data.length === 1) return <SearchedTab data={data[0]} />;
  return (
    <div className="search-results-tabs-container">
      <Tabs type="editable-card" activeKey={data[0]['Symbol']}>
        {data.map(addTabs)}
      </Tabs>
    </div>
  );
};
