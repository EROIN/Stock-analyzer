import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export interface SearchResultsProps {
  data: StockDetailAPIResponse[];
  refreshData: (key: string) => void;
}
