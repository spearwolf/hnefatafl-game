import * as type from './constants';

export const movePiece = (pieceId, row, col) => ({
  type: type.ACTION_TYPE_MOVE_PIECE,
  pieceId,
  row,
  col,
});

export const chooseOrMovePiece = (row, col) => ({
  type: type.ACTION_TYPE_CHOOSE_OR_MOVE_PIECE,
  row,
  col,
});
