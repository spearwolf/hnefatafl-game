import React from 'react';
import { DragLayer } from 'react-dnd';

import { VikingImage } from './VikingImage';

const collect = (monitor) => {
  const item = monitor.getItem();
  return {
    pieceType: item && item.pieceType,
    pieceLibrary: item && item.pieceLibrary,
    tileSize: item && item.tileSize,
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
};

const VikingDragPreview = ({ currentOffset, pieceType, tileSize, pieceLibrary, isDragging }) => {
  if (!isDragging || pieceLibrary == null || currentOffset == null) {
    return null;
  }

  const piece = pieceLibrary[pieceType];
  const height = Math.round((piece.height / piece.width) * tileSize);
  const top = currentOffset.y - piece.bottomOffset;
  const left = currentOffset.x;

  return (
    <VikingImage
      image={piece.image}
      left={left} top={top}
      w={tileSize} h={height}
      zIndex={1000}
      opacity={1}
      pointer={false}
    />
  );
};

export default DragLayer(collect)(VikingDragPreview);
