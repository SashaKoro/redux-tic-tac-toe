/* eslint-disable no-undef */
import * as types from '../src/actions/actionTypes';
import * as actions from '../src/actions/index';

describe('changeInfoDisplay test', () => {
  it('sends out correct action type and payload', () => {
    const newInfo = 'Testing one... two..';
    const expectedAction = {
      type: types.INFO_CHANGE,
      payload: newInfo,
    };
    expect(actions.changeInfoDisplay(newInfo)).toEqual(expectedAction);
  });
});

describe('showIntroScreen test', () => {
  it('sends out correct action type and payload', () => {
    const newBoolean = false;
    const expectedAction = {
      type: types.INTRO_SCREEN,
      payload: false,
    };
    expect(actions.showIntroScreen(newBoolean)).toEqual(expectedAction);
  });
});

describe('addToComputerScore test', () => {
  it('sends out correct action type', () => {
    const expectedAction = { type: types.COMP_SCORE };
    expect(actions.addToComputerScore()).toEqual(expectedAction);
  });
});

describe('changeWhosTurn test', () => {
  it('sends out correct action type and payload', () => {
    const newBoolean = false;
    const expectedAction = {
      type: types.TURN_CHANGE,
      payload: false,
    };
    expect(actions.changeWhosTurn(newBoolean)).toEqual(expectedAction);
  });
});

describe('updateTurnNumber test', () => {
  it('sends out correct action type and payload', () => {
    const newTurn = 5;
    const expectedAction = {
      type: types.TURN_NUMBER,
      payload: 5,
    };
    expect(actions.updateTurnNumber(newTurn)).toEqual(expectedAction);
  });
});

describe('whoStartsNext text', () => {
  it('sends out correct action type', () => {
    const expectedAction = {
      type: types.FIRST_MOVE,
    };
    expect(actions.whoStartsNext()).toEqual(expectedAction);
  });
});
