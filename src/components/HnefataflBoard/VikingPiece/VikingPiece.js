import React from 'react';
import styled from 'styled-components';

const VikingPieceStyled = styled.div`
  position: absolute;

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ image }) => image});
`;

const VikingPiece = ({ pieceType, tileSize, row, col, pieceLibrary }) => {
  const piece = pieceLibrary[pieceType];
  const width = tileSize;
  const height = (piece.height / piece.width) * tileSize;
  const top = (row * tileSize) + tileSize - height - Math.round(piece.bottomOffset * tileSize);
  const left = col * tileSize;

  return (
    <VikingPieceStyled
      top={top}
      left={left}
      width={width}
      height={height}
      image={piece.image}
    />
  );
};

export default VikingPiece;
