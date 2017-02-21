/* eslint-disable no-undef */

import { indexer } from '../src/components/functions/indexer';
import { gameBoardTest2, gameBoardTest3 } from '../src/constants/gameBoardTestStub';

describe('indexer', () => {
  it('returns indexes of tokens on the board test 1', () => {
    expect(indexer(gameBoardTest2, 'O')).toEqual([0, 2, 8]);
  });

  it('returns indexes of tokens on the board test 2', () => {
    expect(indexer(gameBoardTest3, 'X')).toEqual([3, 4]);
  });
});
