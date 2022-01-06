import {StockDetailAPIResponse} from '../../types/search/symbolSearch.types';

export interface SearchResultsProps {
  data: Record<string, StockDetailAPIResponse>;
  activeKey: string;
  setActiveKey: (key: string) => void;
  refreshData: (key: string) => void;
}
