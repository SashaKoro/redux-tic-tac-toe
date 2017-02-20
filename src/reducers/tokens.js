import { TOKEN_PICK } from '../actions/actionTypes';

const tokens = (state = { playerToken: '', computerToken: '' }, action) => {
  switch (action.type) {
  case TOKEN_PICK:
    return {
      ...state,
      playerToken: action.payload[0],
      computerToken: action.payload[1],
    };

  default: return state;
  }
};

export default tokens;
