import { connect } from 'react-redux';

import { getTileSize, getPieceLibrary } from '../../../redux/modules/HnefataflBoard/selectors';

import VikingPiece from './VikingPiece';

const mapStateToProps = (state) => ({
  tileSize: getTileSize(state),
  pieceLibrary: getPieceLibrary(state),
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
// });

export default connect(mapStateToProps, null)(VikingPiece);
