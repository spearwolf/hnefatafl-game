import { NAMESPACE } from './constants';

export const getState = state => state[NAMESPACE];

export const getRows = state => getState(state).rows;
export const getCols = state => getState(state).cols;

export const getTiles = state => getState(state).tiles;
export const getPieces = state => getState(state).pieces;

export const getTileSize = state => getState(state).tileSize;

export const getTileBackImages = state => getState(state).tileBackImages;

export const getPieceLibrary = state => getState(state).pieceLibrary;

