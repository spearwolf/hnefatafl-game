export default (state, action) => {

  const piece = state.pieces[action.pieceId];

  if (piece) {
    return {
      ...state,

      pieces: {
        ...state.pieces,

        [action.pieceId]: {
          ...piece,

          row: action.row,
          col: action.col,
        }
      }
    };
  }

  return state;
};
