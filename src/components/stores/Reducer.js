const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADDR':
      return {
        ...state,
        addr: action.payload
      };
    default:
      return state;
  }
};
export default Reducer;