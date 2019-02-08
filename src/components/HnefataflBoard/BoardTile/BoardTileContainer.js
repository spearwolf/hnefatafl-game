import { connect } from 'react-redux';

import { getTileSize, getTiles, getCols, getTileBackImages } from '../../../redux/modules/HnefataflBoard/selectors';
import { chooseOrMovePiece } from '../../../redux/modules/HnefataflBoard/actions';

import BoardTile from './BoardTile';

const mapStateToProps = (state, { row, col }) => {
  const tiles = getTiles(state);
  const cols = getCols(state);

  return {
    tileType: tiles[col + (row * cols)],
    tileSize: getTileSize(state),
    backImages: getTileBackImages(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTap: () => dispatch(chooseOrMovePiece(ownProps.row, ownProps.col)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardTile);
