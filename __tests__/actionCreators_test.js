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

describe ('showIntroScreen test', () => {
  it('sends out correct action type and payload', () => {
    const newBoolean = false;
    const expectedAction = {
      type: types.INTRO_SCREEN,
      payload: false,
    };
    expect(actions.showIntroScreen(newBoolean)).toEqual(expectedAction);
  });
});

describe ('addToComputerScore test', () => {
  it('sends out correct action type', () => {
    const expectedAction = { type: types.COMP_SCORE };
    expect(actions.addToComputerScore()).toEqual(expectedAction);
  });
});
