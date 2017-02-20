export const indexer = (board, testToken) => {
  let tokenIndexes = [];

  board.forEach((eachBox, index) => {
    if (eachBox === testToken) {
      tokenIndexes.push(index);
    }
  });

  return tokenIndexes;
};
