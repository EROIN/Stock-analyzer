import {SearchResultsStore} from '../../types/search/symbolSearch.types';

export interface SearchResultsProps {
  data: SearchResultsStore;
  refreshData: (key: string) => void;
}
