/* eslint-disable no-undef */

import forkLogic from '../src/components/functions/forkLogic';

describe('forkLogic', () => {
  let playerToken = 'X';
  let token = 'O';

  it('plays the correct counter move test 1', () => {
    let board = ['', 'X', '', 'X', 'O', '', '', '', ''];

    expect(forkLogic(board, playerToken, token)).toEqual(['', 'X', 'O', 'X', 'O', '', '', '', '']);
  });

  it('plays the correct counter move test 2', () => {
    let board = ['O', '', '', '', '', 'X', 'X', '', ''];

    expect(forkLogic(board, playerToken, token)).toEqual(['O', '', '', '', '', 'X', 'X', '', 'O']);
  });

  it('plays the correct counter move test 3', () => {
    playerToken = 'O';
    token = 'X';
    let board = ['O', '', '', 'X', '', '', '', 'O', ''];

    expect(forkLogic(board, playerToken, token)).toEqual(['O', '', '', 'X', '', '', 'X', 'O', '']);
  });

  it('plays the correct counter move test 4', () => {
    playerToken = 'O';
    token = 'X';
    let board = ['', '', 'O', 'O', 'X', '', '', '', ''];

    expect(forkLogic(board, playerToken, token)).toEqual(['X', '', 'O', 'O', 'X', '', '', '', '']);
  });
});
