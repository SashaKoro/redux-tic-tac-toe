import { INTRO_SCREEN } from '../actions/actionTypes';

const introScreen = (state = true, action) => {
  switch (action.type) {
  case INTRO_SCREEN:
    return action.payload;

  default: return state;
  }
};

export default introScreen;
