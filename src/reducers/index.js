import { combineReducers } from 'redux';
import infoDisplay from './infoDisplay';
import introScreen from './introScreen';
import computerScore from './computerScore';

const rootReducer = combineReducers({
  infoDisplay,
  introScreen,
  computerScore,
});

export default rootReducer;
