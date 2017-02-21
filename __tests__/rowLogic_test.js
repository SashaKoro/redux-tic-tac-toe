/* eslint-disable no-undef */

import rowLogic from '../src/components/functions/rowLogic';
import * as stubs from '../src/constants/gameBoardTestStub';

describe('rowLogic', () => {
  it('returns unchanged gameBoard when there is no blocking or winning move', () => {
    expect(rowLogic(stubs.gameBoardTest3, 'X', 'O'))
    .toEqual(stubs.gameBoardTest3);
  });

  it('places correct blocking token test 1', () => {
    expect(rowLogic(stubs.gameBoardTest8, 'X', 'O'))
    .toEqual(['X', 'X', 'O', 'O', '', '', '', '', '']);
  });

  it('places correct blocking token test 2', () => {
    expect(rowLogic(stubs.gameBoardTest10, 'O', 'X'))
    .toEqual(['O', 'X', '', '', 'O', '', '', '', 'X']);
  });

  it('places correct winning token test 1', () => {
    expect(rowLogic(stubs.gameBoardTest9, 'O', 'O'))
    .toEqual(['O', '', '', 'O', 'X', 'X', 'O', '', '']);
  });

  it('places correct winning token test 2', () => {
    expect(rowLogic(stubs.gameBoardTest11, 'X', 'X'))
    .toEqual(['', '', 'X', 'O', '', 'X', 'O', '', 'X']);
  });
});
