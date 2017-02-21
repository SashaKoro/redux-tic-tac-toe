/* eslint-disable no-undef */

import forkLogic from '../src/components/functions/forkLogic';
import * as stubs from '../src/constants/gameBoardTestStub';

describe('forkLogic', () => {
  it('plays the correct counter move test 1', () => {
    expect(forkLogic(stubs.gameBoardTest4, 'X', 'O'))
    .toEqual(['', 'X', 'O', 'X', 'O', '', '', '', '']);
  });

  it('plays the correct counter move test 2', () => {
    expect(forkLogic(stubs.gameBoardTest5, 'X', 'O'))
    .toEqual(['O', '', '', '', '', 'X', 'X', '', 'O']);
  });

  it('plays the correct counter move test 3', () => {
    expect(forkLogic(stubs.gameBoardTest6, 'O', 'X'))
    .toEqual(['O', '', '', 'X', '', '', 'X', 'O', '']);
  });

  it('plays the correct counter move test 4', () => {
    expect(forkLogic(stubs.gameBoardTest7, 'O', 'X'))
    .toEqual(['X', '', 'O', 'O', 'X', '', '', '', '']);
  });
});
