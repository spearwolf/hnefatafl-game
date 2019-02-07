import React from 'react';
import styled from 'styled-components';

import BoardTile from './BoardTile/BoardTileContainer';
import VikingPiece from './VikingPiece/VikingPieceContainer';

const TileContainer = styled.div`
  position: relative;

  width: ${({ fullWidth }) => fullWidth}px;
  height: ${({ fullHeight }) => fullHeight}px;
`;

const renderTiles = (rows, cols) => {
  const out = [];
  for (let y = 0; y < rows; ++y) {
    for (let x = 0; x < cols; ++x) {
      out.push(
        <BoardTile row={y} col={x} key={`${x}|${y}`} />
      );
    }
  }
  return out;
};

const renderPieces = (pieces) => Object.entries(pieces).map(([id, { type, row, col }]) => (
  <VikingPiece key={id} col={col} row={row} pieceType={type} />
));

const HnefataflBoard = ({ rows, cols, tileSize, pieces }) => (
  <TileContainer fullWidth={cols * tileSize} fullHeight={rows * tileSize}>
    {
      renderTiles(rows, cols)
    }
    {
      renderPieces(pieces)
    }
  </TileContainer>
);

export default HnefataflBoard;
