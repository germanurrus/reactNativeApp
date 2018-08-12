import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './reducers';

// export const history = createHistory();

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {};

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const middleware = [
  logger, navMiddleware,
];


const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middleware),
);
persistStore(
  store,
  null,
  () => {
    store.getState();// if you want to get restoredState
  },
);

export default store;
