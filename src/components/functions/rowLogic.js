import { indexer } from './indexer';

export const winningLines = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8],
];

const rowLogic = (gameBoard, testToken, token) => {
  let tokenIndexes = indexer(gameBoard, testToken);
  let board = gameBoard.slice();

  console.log(tokenIndexes);

  for (let j = 0; j < winningLines.length; j += 1) {
    let found = tokenIndexes.filter((eachIndex) => winningLines[j].includes(eachIndex));
    if (found.length === 2) {
      let putItHere = winningLines[j].filter((each) => !found.includes(each));
      if (board[putItHere] === '') {
        board[putItHere] = token;
        break;
      }
    }
  }

  return board;
};


export default rowLogic;
