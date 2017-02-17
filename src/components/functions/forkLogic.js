import _ from 'lodash';

const forkLogic = (gameBoard, playerToken, token) => {
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

  let playerTokenIndexes = [];

  for (let i = 0; i < gameBoard.length; i += 1) {
    if (gameBoard[i] === playerToken) {
      playerTokenIndexes.push(i);
    }
  }

  for (let j = 0; j < forkLines.length; j += 1) {
    if (_.isEqual(forkLines[j], playerTokenIndexes)) {
      gameBoard[counterMoves[j]] = token;
    }
  }
  return gameBoard;
};

export default forkLogic;
