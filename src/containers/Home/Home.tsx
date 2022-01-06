import {useState} from 'react';

import './Home.scss';

import {SearchBox, SearchResults} from '../../components';
import {getStockDetailsFromSymbol} from '../../middleware/search.middleware';
import {SEARCH_RESULTS} from '../../__mocks__/searchResult.mocks';
import {SearchResultsStore} from '../../types/search/symbolSearch.types';

export function Home() {
  const [searchResults, setSearchresults] = useState<SearchResultsStore>({
    activeKey: '',
    results: {},
  });

  const getStockDetails = async (symbol: string) => {
    const stockDetails = await getStockDetailsFromSymbol(symbol);
    setSearchresults(prevSearchResults => {
      const newKey =
        Object.keys(stockDetails).length > 0 ? symbol : '<Invalid Key>';
      return {
        ...prevSearchResults,
        activeKey: symbol,
        results: {
          ...prevSearchResults.results,
          [newKey]: stockDetails,
        },
      };
    });
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
        <SearchResults data={SEARCH_RESULTS} refreshData={refreshData} />
      </section>
    </div>
  );
}
