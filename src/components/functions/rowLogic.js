const rowLogic = (gameBoard, testToken, token) => {
  const winningLines = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
  ];
  let putItHere;
  let tokenIndexes = [];

  for (let i = 0; i < gameBoard.length; i += 1) {
    if (gameBoard[i] === testToken) {
      tokenIndexes.push(i);
    }
  }

  for (let j = 0; j < winningLines.length; j += 1) {
    let found = tokenIndexes.filter((eachIndex) => winningLines[j].includes(eachIndex));
    if (found.length === 2) {
      putItHere = winningLines[j].filter((each) => !found.includes(each));
      if (gameBoard[putItHere] === '') {
        gameBoard[putItHere] = token;
        break;
      }
    }
  }

  return gameBoard;
};


export default rowLogic;
