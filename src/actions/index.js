import * as types from './actionTypes';

export const changeInfoDisplay = (newInfo) => ({
  type: types.INFO_CHANGE,
  payload: newInfo,
});

export const showIntroScreen = (newBoolean) => ({
  type: types.INTRO_SCREEN,
  payload: newBoolean,
});

export const addToComputerScore = () => ({
  type: types.COMP_SCORE,
});
