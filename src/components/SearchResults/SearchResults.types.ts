import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export interface SearchResultsProps {
  data: Record<string, StockDetailAPIResponse>;
  activeKey: string;
  refreshData: (key: string) => void;
}
