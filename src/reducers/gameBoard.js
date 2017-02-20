import { UPDATE_BOARD } from '../actions/actionTypes';

export const cleanBoard = ['', '', '', '', '', '', '', '', ''];

const gameBoard = (state = cleanBoard, action) => {
  switch (action.type) {
  case UPDATE_BOARD:
    return action.payload;

  default: return state;
  }
};

export default gameBoard;
