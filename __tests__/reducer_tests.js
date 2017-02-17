/* eslint-disable no-undef */

import * as types from '../src/actions/actionTypes';
import infoDisplay from '../src/reducers/infoDisplay';
import introScreen from '../src/reducers/introScreen';
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
