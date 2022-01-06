import './SearchedTab.scss';

import {SearchedTabProps} from './SearchedTab.types';

export const SearchedTab = (props: SearchedTabProps) => {
  const {data} = props;
  return <div>{data.Name}</div>;
};
