
const initialState = {
  foo: 'bar',
  plah: {
    x: 1,
    y: 2,
  }
};

export default (state = initialState, action) => {
  /*
  switch (action.type) {
    case types.ACTION_TYPE: return {
        ...state,
        // modify state in immutable fashion
      };
    // other ACTION_TYPEs...
    default:
      return state;
  }
  */
 return state;
};