import React from 'react';
import styled from 'styled-components';

import ImageRedKing from './images/koenig-pastellrot.png';

const PIECES = {
  king: {
    image: ImageRedKing,
    width: 429,
    height: 668,
  },
};

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

const VikingPiece = ({ pieceType, tileSize }) => {
  const piece = PIECES[pieceType];
  const width = tileSize;
  const height = (piece.height / piece.width) * tileSize;

  return (
    <VikingPieceStyled top={0} left={0} width={width} height={height} image={piece.image} />
  );
};

export default VikingPiece;
