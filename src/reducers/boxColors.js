import { COLOR_CHANGE } from '../actions/actionTypes';

export const colorState =  [
  { backgroundColor: '#D2D2D2' },
  { backgroundColor: '#D2D2D2' },
  { backgroundColor: '#D2D2D2' },
  { backgroundColor: '#D2D2D2' },
  { backgroundColor: '#D2D2D2' },
  { backgroundColor: '#D2D2D2' },
  { backgroundColor: '#D2D2D2' },
  { backgroundColor: '#D2D2D2' },
  { backgroundColor: '#D2D2D2' },
];

const boxColors = (state = colorState, action) => {
  switch (action.type) {
  case COLOR_CHANGE:
    return action.payload;

  default: return state;
  }
};

export default boxColors;
