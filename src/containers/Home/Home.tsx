import {useState} from 'react';

import './Home.scss';

import {SearchBox, SearchResults} from '../../components';
import {getStockDetailsFromSymbol} from '../../middleware/search.middleware';
// import {SEARCH_RESULTS} from '../../__mocks__/searchResult.mocks';
import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export function Home() {
  const [searchResults, setSearchresults] = useState<StockDetailAPIResponse[]>(
    [],
  );

  const getStockDetails = async (symbol: string) => {
    const stockDetails = await getStockDetailsFromSymbol(symbol);
    setSearchresults(prevSearchResults => [...prevSearchResults, stockDetails]);
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
        <SearchResults data={searchResults} refreshData={refreshData} />
      </section>
    </div>
  );
}
