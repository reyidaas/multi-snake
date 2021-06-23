import { PLAYER } from '../constants/actionTypes';

export const setName = (name) => ({
  type: PLAYER.SET_NAME,
  payload: name,
});

export const setColor = (color) => ({
  type: PLAYER.SET_COLOR,
  payload: color,
});
