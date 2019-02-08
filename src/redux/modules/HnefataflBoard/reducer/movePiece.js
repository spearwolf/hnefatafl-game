export default (state, { pieceId, row, col }) => {

  const piece = state.pieces[pieceId];

  if (piece) {
    return {
      ...state,

      pieces: {
        ...state.pieces,

        [pieceId]: {
          ...piece,

          row,
          col,
        }
      }
    };
  }

  return state;
};
