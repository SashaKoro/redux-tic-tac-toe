/* eslint-disable no-undef */

import * as types from '../src/actions/actionTypes';
import infoDisplay from '../src/reducers/infoDisplay';
import introScreen from '../src/reducers/introScreen';
import computerScore from '../src/reducers/computerScore';
import * as show from '../src/constants/infoDisplayConstants';

describe('infoDisplay Reducer', () => {
  it('returns the initial state on default', () => {
    expect(infoDisplay(undefined, {})).toEqual(show.YOUR_TURN);
  });
  it('handles INFO_CHANGE action type and returns new state', () => {
    expect(infoDisplay(undefined, {
      type: types.INFO_CHANGE,
      payload: show.YOU_LOST,
    })).toEqual(show.YOU_LOST);
  });
});

describe('introScreen Reducer', () => {
  it('returns the initial state on default', () => {
    expect(introScreen(undefined, {})).toEqual(true);
  });
  it('handles INTRO_SCREEN action type and returns new state', () => {
    expect(introScreen(undefined, {
      type: types.INTRO_SCREEN,
      payload: false,
    })).toEqual(false);
  });
});

describe('computerScore reducer', () => {
  it('returns the initial state on default', () => {
    expect(computerScore(undefined, {})).toEqual(0);
  });
  it('handles COMP_SCORE action type and returns new state', () => {
    expect(computerScore(undefined, {
      type: types.COMP_SCORE,
    })).toEqual(1);
  });
});
