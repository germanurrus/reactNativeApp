import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import logger from 'redux-logger';
import appReducer from './reducers';

const initialState = {};

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const store = createStore(
  appReducer,
  initialState,
  applyMiddleware(logger, middleware),
);


export default store;
