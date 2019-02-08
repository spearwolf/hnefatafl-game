import React from 'react';
import styled, { css } from 'styled-components';

const backHoverImageStyles = ({ backImage }) => {
  const hoverImage = backImage[1];
  return hoverImage ? css`

    &:hover {
      background-image: url(${hoverImage});
    }

  ` : undefined;
};

const BoardTileStyled = styled.div`
  position: absolute;

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  width: ${({ tileSize }) => tileSize}px;
  height: ${({ tileSize }) => tileSize}px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backImage }) => backImage[0]});

  ${backHoverImageStyles}
`;

const BoardTile = ({ row, col, tileSize, tileType, backImages, onClick }) => (
  <BoardTileStyled
    top={row * tileSize}
    left={col * tileSize}
    tileSize={tileSize}
    backImage={backImages[tileType]}
    onClick={onClick}
  />
);

export default BoardTile;
