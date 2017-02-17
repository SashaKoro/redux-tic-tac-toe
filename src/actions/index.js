import * as types from './actionTypes';

export const changeInfoDisplay = (newInfo) => ({
  type: types.INFO_CHANGE,
  payload: newInfo,
});
