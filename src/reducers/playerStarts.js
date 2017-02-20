import { FIRST_MOVE } from '../actions/actionTypes';

const playerStarts = (state = true, action) => {
  switch (action.type) {
  case FIRST_MOVE:
    return !state;

  default: return state;
  }
};

export default playerStarts;
