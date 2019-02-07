import React from 'react';
import styled from 'styled-components';

const VikingPieceStyled = styled.div`
  position: absolute;

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ image }) => image});
`;

const VikingPiece = ({ pieceType, tileSize, row, col, pieceLibrary }) => {
  const piece = pieceLibrary[pieceType];
  const width = tileSize;
  const height = (piece.height / piece.width) * tileSize;
  const top = Math.round((row * tileSize) + tileSize - height - (piece.bottomOffset * tileSize));
  const left = col * tileSize;

  return (
    <VikingPieceStyled left={left} top={top} w={width} h={height} image={piece.image} />
  );
};

export default VikingPiece;
