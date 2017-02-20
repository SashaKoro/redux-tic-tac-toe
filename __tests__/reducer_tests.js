/* eslint-disable no-undef */

import * as types from '../src/actions/actionTypes';
import infoDisplay from '../src/reducers/infoDisplay';
import introScreen from '../src/reducers/introScreen';
import computerScore from '../src/reducers/computerScore';
import playersTurn from '../src/reducers/playersTurn';
import turnNumber from '../src/reducers/turnNumber';
import playerStarts from '../src/reducers/playerStarts';
import tokens from '../src/reducers/tokens';
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

describe('computerScore Reducer', () => {
  it('returns the initial state on default', () => {
    expect(computerScore(undefined, {})).toEqual(0);
  });
  it('handles COMP_SCORE action type and returns new state', () => {
    expect(computerScore(undefined, {
      type: types.COMP_SCORE,
    })).toEqual(1);
  });
});

describe('playersTurn Reducer', () => {
  it('returns the initial state on default', () => {
    expect(playersTurn(undefined, {})).toEqual(true);
  });
  it('handles TURN_CHANGE action type and returns new state', () => {
    expect(playersTurn(undefined, {
      type: types.TURN_CHANGE,
      payload: false,
    })).toEqual(false);
  });
});

describe('turnNumber Reducer', () => {
  it('returns the intitial state on default', () => {
    expect(turnNumber(undefined, {})).toEqual(1);
  });
  it('handles TURN_NUMBER action type and returns new state', () => {
    expect(turnNumber(undefined, {
      type: types.TURN_NUMBER,
      payload: 7,
    })).toEqual(7);
  });
});

describe('playerStarts Reducer', () => {
  it('returns the initial state on default', () => {
    expect(playerStarts(undefined, {})).toEqual(true);
  });
  it('handles FIRST_MOVE action type and returns new state', () => {
    expect(playerStarts(true, {
      type: types.FIRST_MOVE,
    })).toEqual(false);
  });
});

describe('tokens Reducer', () => {
  it('returns the initial state on default', () => {
    expect(tokens(undefined, {})).toEqual({
      playerToken: '',
      computerToken: '',
    });
  });
  it('handles the TOKEN_PICK action type and returns new state', () => {
    expect(tokens(undefined, {
      type: types.TOKEN_PICK,
      payload: ['O', 'X'],
    })).toEqual({
      playerToken: 'O',
      computerToken: 'X',
    });
  });
});
