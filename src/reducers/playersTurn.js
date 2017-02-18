import { TURN_CHANGE } from '../actions/actionTypes';

const playersTurn = (state = true, action) => {
  switch (action.type) {
  case TURN_CHANGE:
    return action.payload;

  default: return state;
  }
};

export default playersTurn;
