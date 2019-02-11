import React from 'react';
import styled, { css } from 'styled-components';
import { DropTarget } from 'react-dnd';
import cx from 'classnames';

import { DRAG_TYPE_PIECE } from '../constants';

const backHoverImageStyles = ({ backImage }) => {
  const hoverImage = backImage[1];
  return hoverImage ? css`

    &.isDropOver {
      background-image: url(${hoverImage});
    }

  ` : undefined;
};

const BoardTileStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transform: translate(${({ top, left }) => `${left}px, ${top}px`});

  width: ${({ tileSize }) => tileSize}px;
  height: ${({ tileSize }) => tileSize}px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backImage }) => backImage[0]});

  pointer-events: auto;

  ${backHoverImageStyles};
`;

const tileTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.movePiece(item.pieceId);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isDropOver: monitor.isOver(),
  };
}

const BoardTile = ({ row, col, tileSize, tileType, backImages, chooseOrMovePiece, movePiece, connectDropTarget, isDropOver }) => (
  <BoardTileStyled
    ref={instance => connectDropTarget(instance)}
    top={row * tileSize}
    left={col * tileSize}
    tileSize={tileSize}
    backImage={backImages[tileType]}
    onClick={chooseOrMovePiece}
    className={cx({ isDropOver })}
  />
);

export default DropTarget(DRAG_TYPE_PIECE, tileTarget, collect)(BoardTile);
