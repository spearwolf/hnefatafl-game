import { connect } from 'react-redux';

import { getRows, getCols, getTileSize, getTiles } from '../../redux/modules/HnefataflBoard/selectors';

import HnefataflBoard from './HnefataflBoard';

const mapStateToProps = (state) => ({
  rows: getRows(state),
  cols: getCols(state),
  tileSize: getTileSize(state),
  tiles: getTiles(state),
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
// });

export default connect(mapStateToProps, null)(HnefataflBoard);
