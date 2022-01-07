import './Symbol.scss';

import {SymbolProps} from './Symbol.types';

export const Symbol = (props: SymbolProps) => {
  const {data} = props;
  return (
    <>
      <div className="symbol-container">
        {data['2. name']} ({data['1. symbol']})
      </div>
      <div className="symbol-details">
        Open: {data['5. marketOpen']}, Close: {data['6. marketClose']}
      </div>
    </>
  );
};

// added so that if someone doesnt pass by mistake, it doesnt break the page
Symbol.defaultProps = {
  data: {},
};
