import { combineReducers } from 'redux';
import infoDisplay from './infoDisplay';
import introScreen from './introScreen';

const rootReducer = combineReducers({
  infoDisplay,
  introScreen,
});

export default rootReducer;
