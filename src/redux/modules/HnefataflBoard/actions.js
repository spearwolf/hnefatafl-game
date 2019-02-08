import { ACTION_TYPE_MOVE_PIECE } from './constants';

export const movePiece = (pieceId, row, col) => ({
  type: ACTION_TYPE_MOVE_PIECE,
  pieceId,
  row,
  col,
});
