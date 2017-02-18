import { combineReducers } from 'redux';
import infoDisplay from './infoDisplay';
import introScreen from './introScreen';
import computerScore from './computerScore';
import playersTurn from './playersTurn';

const rootReducer = combineReducers({
  infoDisplay,
  introScreen,
  computerScore,
  playersTurn,
});

export default rootReducer;
