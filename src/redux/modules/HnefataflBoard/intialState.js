import ImageLight from './images/feld-hell-6.png';
import ImageLightHi from './images/feld-hell-1.png';

import ImageDark0 from './images/feld-dunkel-0-duester.png';
import ImageDark1 from './images/feld-dunkel-1-duester.png';
import ImageDark2 from './images/feld-dunkel-2-duester.png';
import ImageDark3 from './images/feld-dunkel-3-duester.png';

import ImageRedKing from './images/koenig-pastellrot.png';

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
    },

  },

};
