import initialState from '../initialState';

import * as types from '../constants';

import movePiece from './movePiece';

export default (state = initialState, action) => {
  switch (action.type) {

    case types.ACTION_TYPE_MOVE_PIECE:
      return movePiece(state, action);

    // other ACTION_TYPEs...

    default:
      return state;
  }
};
