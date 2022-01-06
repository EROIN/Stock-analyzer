import './SearchResults.scss';

import {SearchResultsProps} from './SearchResults.types';

export const SearchResults = (props: SearchResultsProps) => {
  const {data} = props;

  if (data.length == 0) return <section>Search Something</section>;

  return <div>{data[0].Name}</div>;
};
