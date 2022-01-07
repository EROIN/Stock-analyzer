import {useState} from 'react';
import {Spin} from 'antd';

import './Home.scss';

import {SearchBox, SearchResults} from '../../components';
import {getStockDetailsFromSymbol} from '../../middleware/search.middleware';
import {SEARCH_RESULTS} from '../../__mocks__/searchResult.mocks';
import {SearchResultsStore} from '../../types/search/symbolSearch.types';
import {
  getNewKeyFromSearchResponse,
  getNewSearchResults,
} from '../../utils/search.utils';

export function Home() {
  const [searchResults, setSearchresults] = useState<SearchResultsStore>({
    results: {},
  });

  const [activeKey, setActiveKey] = useState<string>('intc');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getStockDetails = async (symbol: string) => {
    try {
      setIsLoading(true);
      const stockDetails = await getStockDetailsFromSymbol(symbol);
      const newKey = getNewKeyFromSearchResponse(stockDetails, symbol);
      setSearchresults(prevSearchResults =>
        getNewSearchResults(prevSearchResults, stockDetails, newKey),
      );
      setActiveKey(newKey);
    } catch (error) {
      // show toast
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = (key: string) => {
    getStockDetails(key).catch(console.log);
  };

  return (
    <div className="container">
      <aside className="header-image"></aside>
      <section className="header-container">
        <SearchBox getStockDetails={getStockDetails} />
      </section>
      <section className="search-results-container">
        {isLoading && (
          <div className="popup">
            <Spin size="large" />
          </div>
        )}
        <SearchResults
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          data={SEARCH_RESULTS.results}
          refreshData={refreshData}
        />
      </section>
    </div>
  );
}
