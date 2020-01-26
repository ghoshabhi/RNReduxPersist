import FilesystemStorage from 'redux-persist-filesystem-storage';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import allReducers, {blacklists, persistReducers} from './reducers/index';

const rootPersistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  blacklist: [...persistReducers],
};

const reducers = {
  ...allReducers,
};

console.log({ reducers, persistReducers });

persistReducers.forEach(key => {
  console.log({ key, blacklists: blacklists[key], reducer: reducers[key] })
  reducers[key] = persistReducer({
    key,
    storage: FilesystemStorage,
    blacklist: blacklists[key],
  }, reducers[key]);
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
  return { store, persistor };
};

export const getPersistor = () => persistor;
export const getStore = () => store;
