import { combineReducers } from 'redux';
import infoDisplay from './infoDisplay';
import introScreen from './introScreen';
import computerScore from './computerScore';
import playersTurn from './playersTurn';
import turnNumber from './turnNumber';
import playerStarts from './playerStarts';
import tokens from './tokens';
import boxColors from './boxColors';
import gameBoard from './gameBoard';

const rootReducer = combineReducers({
  infoDisplay,
  introScreen,
  computerScore,
  playersTurn,
  turnNumber,
  playerStarts,
  tokens,
  boxColors,
  gameBoard,
});

export default rootReducer;
