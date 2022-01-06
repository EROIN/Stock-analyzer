import './SearchedTab.scss';

import {SearchedTabProps} from './SearchedTab.types';

export const SearchedTab = (props: SearchedTabProps) => {
  const {data} = props;
  if (Object.keys(data).length == 0)
    return (
      <div className="search-tab-stock-name">Stock details not found.</div>
    );

  return (
    <div>
      <div className="search-tab-stock-name">
        {data.Name}
        &nbsp;<span>({data.Symbol})</span>
      </div>
      <div className="search-tab-stock-detail-row">
        Current Price: <span>{data['50DayMovingAverage']}</span>
        {/* (50day avg being used since API doesnt have price data) */}
      </div>
      <div className="search-tab-stock-detail-row">
        Exchange: <span>{data.Exchange}</span>
      </div>
      <div className="search-tab-stock-detail-row">
        Industry: <span>{data.Industry}</span>
      </div>
      <div className="search-tab-stock-detail-row">
        P/E: <span>{data.PERatio}</span>
      </div>
      <div className="search-tab-stock-detail-row">
        Market Cap:{' '}
        <span>
          {data.MarketCapitalization}
          &nbsp;{data.Currency}
        </span>
      </div>
      <div className="search-tab-stock-detail-row">
        <p>{data.Description}</p>
      </div>
    </div>
  );
};
