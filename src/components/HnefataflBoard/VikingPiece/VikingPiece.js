import React from 'react';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';

import { DRAG_TYPE_PIECE } from '../constants';

const VikingPieceStyled = styled.div`
  position: absolute;

  pointer-events: auto;

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;

  z-index: ${({ z, isDragging }) => isDragging ? 1000 : z};

  opacity: ${({ isDragging }) => isDragging ? .5 : 1};

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ image }) => image});
`;

const pieceSource = {
  beginDrag({ pieceId }) {
    return {
      pieceId,
      foo: 'bar',
    };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};

const VikingPiece = ({ pieceType, tileSize, row, col, pieceLibrary, connectDragSource, isDragging }) => {
  const piece = pieceLibrary[pieceType];
  const width = tileSize;
  const height = (piece.height / piece.width) * tileSize;
  const top = Math.round((row * tileSize) + tileSize - height - (piece.bottomOffset * tileSize));
  const left = col * tileSize;

  return (
    <VikingPieceStyled
      ref={instance => connectDragSource(instance)}
      isDragging={isDragging}
      image={piece.image}
      left={left} top={top}
      z={row}
      w={width} h={height}
    />
  );
};

export default DragSource(DRAG_TYPE_PIECE, pieceSource, collect)(VikingPiece);
