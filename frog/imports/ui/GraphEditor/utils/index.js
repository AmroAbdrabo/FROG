// @flow
import { store } from '../store';

export const timeToPx = (time: number, scale: number): number =>
  time * 3900 * scale / 120;
export const pxToTime = (px: number, scale: number): number =>
  px / 3900 / scale * 120;
export const timeToPxScreen = (time: number): number =>
  time * 3900 * store.ui.scale / 120 - store.ui.panx * 4 * store.ui.scale;

export const between = (
  rawminval: number,
  rawmaxval: number,
  x: number
): number => {
  const minval = rawminval || 0;
  const maxval = rawmaxval || 99999;
  return Math.min(Math.max(x, minval), maxval);
};
