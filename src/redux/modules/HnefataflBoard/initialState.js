import ImageLight from './images/feld-hell-6.png';
import ImageLightHi from './images/feld-hell-1.png';

import ImageDark0 from './images/feld-dunkel-0-duester.png';
import ImageDark1 from './images/feld-dunkel-1-duester.png';
import ImageDark2 from './images/feld-dunkel-2-duester.png';
import ImageDark3 from './images/feld-dunkel-3-duester.png';

import ImageRedKing from './images/koenig-pastellrot.png';
import ImageWarrior from './images/krieger-rot.png';
import ImageFoe from './images/krieger-sepia.png';

export default {

  rows: 11,
  cols: 11,

  tiles: [
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0,
    0, 0, 0, 4, 4, 3, 4, 4, 0, 0, 0,
    0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
  ],

  currentPiece: null,

  pieces: {
    first: {
      type: 'king',
      row: 5,
      col: 5,
    },
    second: {
      type: 'warrior',
      row: 6,
      col: 4,
    },
    third: {
      type: 'foe',
      row: 8,
      col: 2,
    },
  },

  tileSize: 64,

  tileBackImages: [
    [ImageLight, ImageLightHi],
    [ImageDark0],
    [ImageDark1],
    [ImageDark2],
    [ImageDark3],
  ],

  pieceLibrary: {

    king: {
      image: ImageRedKing,
      width: 429,
      height: 668,
      bottomOffset: 0.1,
    },

    warrior: {
      image: ImageWarrior,
      width: 364,
      height: 545,
      bottomOffset: 0.1,
    },

    foe: {
      image: ImageFoe,
      width: 364,
      height: 545,
      bottomOffset: 0.1,
    },

  },

};
