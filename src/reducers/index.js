import { combineReducers } from 'redux';
import infoDisplay from './infoDisplay';
import introScreen from './introScreen';
import computerScore from './computerScore';
import playersTurn from './playersTurn';
import turnNumber from './turnNumber';
import playerStarts from './playerStarts';

const rootReducer = combineReducers({
  infoDisplay,
  introScreen,
  computerScore,
  playersTurn,
  turnNumber,
  playerStarts,
});

export default rootReducer;
