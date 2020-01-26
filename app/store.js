import FilesystemStorage from 'redux-persist-filesystem-storage';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';

import allReducers, {blacklists, persistReducers} from './reducers';

const rootPersistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  blacklist: [...persistReducers],
};

const reducers = {
  ...allReducers,
};

// configure persistReducer's for each of the reducers
persistReducers.forEach(key => {
  reducers[key] = persistReducer(
    {
      key,
      storage: FilesystemStorage,
      blacklist: blacklists[key],
    },
    reducers[key],
  );
});

const persistedReducer = persistReducer(
  rootPersistConfig,
  combineReducers(reducers),
);

const composedEnhancers = composeWithDevTools({
  maxAge: 100,
})(applyMiddleware(createLogger()));

let store;
let persistor;

export default () => {
  store = createStore(persistedReducer, composedEnhancers);
  persistor = persistStore(store);
  return {store, persistor};
};
