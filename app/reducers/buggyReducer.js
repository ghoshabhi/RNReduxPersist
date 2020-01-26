export const initialState = {
  data: {},
  loading: false,
};

export const blacklist = ['loading'];

export default function testReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'RESET_DATA':
    case 'UPDATE_DATA':
    case 'SET_DATA':
      return {...state, loading: true};
    case 'SET_DATA_COMMIT':
      return {...state, loading: false, data: payload.data};
    case 'UPDATE_DATA_COMMIT': {
      const newState = { ...state };
      newState.loading = false;
      delete newState.data.foo;

      return newState;
    }
    case 'RESET_DATA_COMMIT': {
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
}
