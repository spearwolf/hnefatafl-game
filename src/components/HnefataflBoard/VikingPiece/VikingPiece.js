import React from 'react';
import { DragSource } from 'react-dnd';

import { DRAG_TYPE_PIECE } from '../constants';

import { VikingImage } from './VikingImage';

const pieceSource = {
  beginDrag({ pieceId, pieceType, pieceLibrary, tileSize }) {
    return {
      pieceId,
      pieceType,
      pieceLibrary,
      tileSize,
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
  const height = Math.round((piece.height / piece.width) * tileSize);
  const top = Math.round((row * tileSize) + tileSize - height - (piece.bottomOffset * tileSize));
  const left = col * tileSize;

  return (
    <VikingImage
      ref={instance => connectDragSource(instance)}
      image={piece.image}
      left={left} top={top}
      w={tileSize} h={height}
      zIndex={row}
      opacity={isDragging ? .5 : 1}
      pointer={true}
    />
  );
};

export default DragSource(DRAG_TYPE_PIECE, pieceSource, collect)(VikingPiece);
