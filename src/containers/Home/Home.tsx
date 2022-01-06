import {useState} from 'react';

import './Home.scss';

import {SearchBox, SearchResults} from '../../components';
import {getStockDetailsFromSymbol} from '../../middleware/search.middleware';
// import {SEARCH_RESULTS} from '../../__mocks__/searchResult.mocks';
import {SearchResultsStore} from '../../types/search/symbolSearch.types';
import {
  getNewKeyFromSearchResponse,
  getNewSearchResults,
} from '../../utils/search.utils';

export function Home() {
  const [searchResults, setSearchresults] = useState<SearchResultsStore>({
    results: {},
  });

  const [activeKey, setActiveKey] = useState<string>('');

  const getStockDetails = async (symbol: string) => {
    const stockDetails = await getStockDetailsFromSymbol(symbol);
    const newKey = getNewKeyFromSearchResponse(stockDetails, symbol);
    setSearchresults(prevSearchResults =>
      getNewSearchResults(prevSearchResults, stockDetails, newKey),
    );
    setActiveKey(newKey);
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
        <SearchResults
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          data={searchResults.results}
          refreshData={refreshData}
        />
      </section>
    </div>
  );
}
