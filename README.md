# RNReduxPersist: Bug with JS delete operator

Issue: https://github.com/rt2zz/redux-persist/issues/740

Initial State:

![Initial State](./screenshots/initial_state.png)

Set Data:

![Set Data](./screenshots/set_data.png)

Update Data:

![Update Data](./screenshots/update_data.png)

Even though it looks like the state updated (from the last screenshot), when you restart the app - the old state persists.

![After Restart](./screenshots/after_restart.png)
