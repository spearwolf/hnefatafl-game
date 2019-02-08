
export const NAMESPACE = 'HnefataflBoard';

const defineActionType = (...path) => [`@@${NAMESPACE}`, ...path].join('/');

export const ACTION_TYPE_MOVE_PIECE = defineActionType('movePiece');
export const ACTION_TYPE_CHOOSE_OR_MOVE_PIECE = defineActionType('chooseOrMovePiece');
