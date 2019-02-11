import React from 'react';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';

import { DRAG_TYPE_PIECE } from '../constants';

const VikingPieceStyled = styled.div.attrs(({ left, top, isDragging, zIndex }) => ({
  style: {
    transform: `translate(${left}px,${top}px)`,
    zIndex: isDragging ? 1000 : zIndex,
    opacity: isDragging ? .5 : 1,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;


  pointer-events: auto;
  cursor: pointer;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ image }) => image});
`;

const pieceSource = {
  beginDrag({ pieceId }) {
    return {
      pieceId,
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
  const height = Math.round((piece.height / piece.width) * tileSize);
  const top = Math.round((row * tileSize) + tileSize - height - (piece.bottomOffset * tileSize));
  const left = col * tileSize;

  return (
    <VikingPieceStyled
      ref={instance => connectDragSource(instance)}
      isDragging={isDragging}
      image={piece.image}
      left={left} top={top}
      zIndex={row}
      w={width} h={height}
    />
  );
};

export default DragSource(DRAG_TYPE_PIECE, pieceSource, collect)(VikingPiece);
