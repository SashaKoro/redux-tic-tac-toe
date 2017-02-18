import { COMP_SCORE } from '../actions/actionTypes';

const computerScore = (state = 0, action) => {
  switch (action.type) {
  case COMP_SCORE:
    return state + 1;

  default: return state;
  }
};

export default computerScore;
