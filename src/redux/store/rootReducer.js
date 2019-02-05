import { combineReducers } from 'redux';

import HnefataflBoard, { NAMESPACE as HnefataflBoardNS } from '../modules/HnefataflBoard';

// https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf#redux

export default combineReducers({
  [HnefataflBoardNS]: HnefataflBoard,
});