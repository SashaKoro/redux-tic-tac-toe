import { COLOR_CHANGE } from '../actions/actionTypes';
import { colorState } from '../constants/colorTestStub';

const boxColors = (state = colorState, action) => {
  switch (action.type) {
  case COLOR_CHANGE:
    return action.payload;

  default: return state;
  }
};

export default boxColors;
