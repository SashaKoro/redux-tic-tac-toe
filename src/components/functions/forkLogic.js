import _ from 'lodash';
import { indexer } from './indexer';

const forkLogic = (gameBoard, testToken, token) => {
  const forkLines = [
    [1, 3],
    [1, 5],
    [3, 7],
    [5, 7],
    [0, 5],
    [0, 7],
    [1, 6],
    [1, 8],
    [2, 3],
    [2, 7],
    [3, 8],
    [5, 6],
  ];

  const counterMoves = [2, 0, 6, 8, 2, 6, 0, 2, 0, 8, 6, 8];
  let tokenIndexes = indexer(gameBoard, testToken);
  let board = gameBoard.slice();

  forkLines.forEach((line, index) => {
    if (_.isEqual(line, tokenIndexes)) {
      board[counterMoves[index]] = token;
    }
  });

  return board;
};

export default forkLogic;
