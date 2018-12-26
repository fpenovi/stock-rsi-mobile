import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const rsiBoundsInitialState = {
  lower: 30,
  upper: 70
};

const langInitialState = 'en';

const rsiBounds = handleActions({}, rsiBoundsInitialState);
const lang = handleActions({}, langInitialState);

export default combineReducers({ rsiBounds, lang });
