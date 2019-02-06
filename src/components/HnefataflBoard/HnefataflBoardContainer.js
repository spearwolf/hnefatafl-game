import { connect } from 'react-redux';

import { getRows, getCols, getTileSize } from '../../redux/modules/HnefataflBoard/selectors';

import HnefataflBoard from './HnefataflBoard';

const mapStateToProps = (state) => ({
  rows: getRows(state),
  cols: getCols(state),
  tileSize: getTileSize(state),
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
// });

export default connect(mapStateToProps, null)(HnefataflBoard);
