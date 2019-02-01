import React from 'react';
import styled, { css } from 'styled-components';

import ImageLight from './images/feld-hell-5-duester.png';
import ImageLightHi from './images/feld-hell-1.png';

import ImageDark0 from './images/feld-dunkel-0-duester.png';
import ImageDark1 from './images/feld-dunkel-1-duester.png';
import ImageDark2 from './images/feld-dunkel-2-duester.png';
import ImageDark3 from './images/feld-dunkel-3-duester.png';

const backImage = [
  [ImageLight, ImageLightHi],
  [ImageDark0],
  [ImageDark1],
  [ImageDark2],
  [ImageDark3],
]

const backHoverImage = ({ tileType }) => {
  const hoverImage = backImage[tileType][1];
  return hoverImage ? css`

    &:hover {
      background-image: url(${hoverImage});
    }

  ` : undefined;
};

const Tile = styled.div`
  position: absolute;

  top: ${({ row, tileSize }) => row * tileSize}px;
  left: ${({ col, tileSize }) => col * tileSize}px;

  width: ${({ tileSize }) => tileSize}px;
  height: ${({ tileSize }) => tileSize}px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${({ tileType }) => backImage[tileType][0]});

  ${backHoverImage}
`;

const BoardTile = ({ row, col, tileSize, tileType }) => (
  <Tile row={row} col={col} tileSize={tileSize} tileType={tileType} />
);

export default BoardTile;
