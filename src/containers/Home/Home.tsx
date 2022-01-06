import {useState} from 'react';

import './Home.scss';

import {SearchBox, SearchResults} from '../../components';
import {getStockDetailsFromSymbol} from '../../middleware/search.middleware';
// import {SEARCH_RESULTS} from '../../__mocks__/searchResult.mocks';
import {
  SearchResultsStore,
  StockDetailAPIResponse,
} from '../../types/search/symbolSearch.types';

export function Home() {
  const [searchResults, setSearchresults] = useState<SearchResultsStore>({
    activeKey: '',
    results: {},
  });

  const getStockDetails = async (symbol: string) => {
    let stockDetails = await getStockDetailsFromSymbol(symbol);
    setSearchresults(prevSearchResults => {
      let newKey =
        Object.keys(stockDetails).length > 0 && stockDetails.Note == undefined
          ? symbol
          : 'nodata';
      newKey = newKey.toLowerCase();
      // this is beacuse API is rate limited
      if (stockDetails.Note) stockDetails = {} as StockDetailAPIResponse;
      return {
        activeKey: newKey,
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
        <SearchResults data={searchResults} refreshData={refreshData} />
      </section>
    </div>
  );
}
