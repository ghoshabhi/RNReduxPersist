import counter, {blacklist as counterBlacklist} from './counterReducer';
import test, {blacklist as testBlacklist} from './testReducer';

// register all reducers here. Injected into store at ./store.js
export default {
  counter,
  test,
};

export const persistReducers = ['counter', 'test'];

export const blacklists = {
  counter: counterBlacklist,
  test: testBlacklist,
};
