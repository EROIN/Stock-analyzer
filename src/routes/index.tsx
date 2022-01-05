import {Route, Switch} from 'react-router';

import {Home, Home2} from '../containers';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Home2" component={Home2} />
    <Route
      exact
      path="/test"
      render={() => (
        <>
          <h1>test</h1>
        </>
      )}
    />
    <Route render={() => <div>Miss</div>} />
  </Switch>
);
