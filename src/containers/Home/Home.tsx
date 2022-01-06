import {useState} from 'react';
import {LabelInValueType, RawValueType} from 'rc-select/lib/Select';

import './Home.scss';

import {SearchBox, SearchResults} from '../../components';
import {getStockDetailsFromSymbol} from '../../middleware/search.middleware';
import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export function Home() {
  const [searchResults, setSearchresults] = useState<StockDetailAPIResponse[]>(
    [],
  );

  const getStockDetails = async (symbol: RawValueType | LabelInValueType) => {
    const stockDetails = await getStockDetailsFromSymbol(symbol);
    setSearchresults(prevSearchResults => [...prevSearchResults, stockDetails]);
  };

  return (
    <div className="container">
      <aside className="header-image"></aside>
      <section className="header-container">
        <SearchBox getStockDetails={getStockDetails} />
        <SearchResults data={searchResults} />
      </section>
    </div>
  );
}
