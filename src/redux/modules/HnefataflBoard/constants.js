
export const NAMESPACE = 'HnefataflBoard';

const defineActionType = (...path) => [`@@${NAMESPACE}`, ...path].join('/');

export const ACTION_TYPE_MOVE_PIECE = defineActionType('movePiece');
