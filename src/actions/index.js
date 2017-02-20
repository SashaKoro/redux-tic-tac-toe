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

export const changeWhosTurn = (newBoolean) => ({
  type: types.TURN_CHANGE,
  payload: newBoolean,
});

export const updateTurnNumber = (newTurn) => ({
  type: types.TURN_NUMBER,
  payload: newTurn,
});

export const whoStartsNext = () => ({
  type: types.FIRST_MOVE,
});
