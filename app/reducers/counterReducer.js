export const initialState = {
  count: 0,
};

export const blacklist = ['count'];

export default function counterReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
