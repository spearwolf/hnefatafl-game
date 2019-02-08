import movePiece from './movePiece';

const findPieceAt = ({ pieces }, row, col) => Object.entries(pieces).find(piece => piece[1].row === row && piece[1].col === col);

export default (state, { row, col }) => {

  const choosePiece = findPieceAt(state, row, col);

  if (choosePiece) {
    const [pieceId] = choosePiece;
    if (pieceId !== state.currentPiece) {
      return {

        ...state,

        currentPiece: pieceId,

      };
    } else {
      return state;
    }
  }

  const { currentPiece } = state;

  if (currentPiece) {
    return movePiece(state, { pieceId: currentPiece, row, col });
  }

  return state;
};
