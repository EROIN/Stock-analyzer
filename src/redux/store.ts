import {combineReducers} from '@reduxjs/toolkit';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './modules/counter/counter.module';
import customMiddlewares from './middleware';

export const history = createBrowserHistory({basename: '/Stock-analyzer/'});

const createRootReducer = (browserHistory: any) =>
  combineReducers({
    router: connectRouter(browserHistory),
    counter: counterReducer,
  });

export const getStore = function configureStore(preloadedState?: any) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), thunk, ...customMiddlewares),
      // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      //   (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  return store;
};
