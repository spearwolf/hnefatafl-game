import React from 'react';
import styled from 'styled-components';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardTile from './BoardTile/BoardTileContainer';
import VikingPiece from './VikingPiece/VikingPieceContainer';

const ContainerStyled = styled.div`
  position: relative;

  width: ${({ fullWidth }) => fullWidth}px;
  height: ${({ fullHeight }) => fullHeight}px;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
`;

class Tiles extends React.PureComponent {

  renderTiles() {
    const { rows, cols } = this.props;
    const out = [];
    for (let y = 0; y < rows; ++y) {
      for (let x = 0; x < cols; ++x) {
        out.push(
          <BoardTile row={y} col={x} key={`${x}|${y}`} />
        );
      }
    }
    return out;
  }

  render() {
    return <Layer>{ this.renderTiles() }</Layer>;
  }

}

class Pieces extends React.PureComponent {

  renderPieces() {
    return Object.entries(this.props.pieces).map(([id, { type, row, col }]) => (
      <VikingPiece key={id} col={col} row={row} pieceType={type} pieceId={id} />
    ));
  }

  render() {
    return <Layer>{ this.renderPieces() }</Layer>;
  }

}

const HnefataflBoard = ({ rows, cols, tileSize, pieces }) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <ContainerStyled fullWidth={cols * tileSize} fullHeight={rows * tileSize}>
      <Tiles rows={rows} cols={cols} />
      <Pieces pieces={pieces} />
    </ContainerStyled>
  </DragDropContextProvider>
);

export default HnefataflBoard;
