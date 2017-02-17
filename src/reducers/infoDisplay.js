import { INFO_CHANGE } from '../actions/actionTypes';
import { YOUR_TURN } from '../constants/infoDisplayConstants';

const infoDisplay = (state = YOUR_TURN, action) => {
  switch (action.type) {
  case INFO_CHANGE:
    return action.payload;

  default: return state;
  }
};

export default infoDisplay;
