import { TURN_NUMBER } from '../actions/actionTypes';

const turnNumber = (state = 1, action) => {
  switch (action.type) {
  case TURN_NUMBER:
    return action.payload;

  default: return state;
  }
};

export default turnNumber;
