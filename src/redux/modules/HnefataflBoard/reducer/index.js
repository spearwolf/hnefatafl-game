import initialState from '../initialState';

import * as types from '../constants';

import movePiece from './movePiece';
import chooseOrMovePiece from './chooseOrMovePiece';

export default (state = initialState, action) => {
  switch (action.type) {

    case types.ACTION_TYPE_MOVE_PIECE:
      return movePiece(state, action);

    case types.ACTION_TYPE_CHOOSE_OR_MOVE_PIECE:
      return chooseOrMovePiece(state, action);

    // other ACTION_TYPEs...

    default:
      return state;
  }
};
