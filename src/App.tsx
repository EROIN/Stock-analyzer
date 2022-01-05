import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import './App.scss';
import {getStore, history} from './redux/store';

import Routes from './routes';

function App() {
  return (
    <Provider store={getStore()}>
      <ConnectedRouter history={history}>
        <>
          <Routes />
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
