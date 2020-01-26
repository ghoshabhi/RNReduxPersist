import counter, {blacklist as counterBlacklist} from './counterReducer';
import buggy, {blacklist as buggyBlacklist} from './buggyReducer';

// register all reducers here. Injected into store at ./store.js
export default {
  counter,
  buggy,
};

export const persistReducers = ['counter', 'buggy'];

export const blacklists = {
  counter: counterBlacklist,
  buggy: buggyBlacklist,
};
