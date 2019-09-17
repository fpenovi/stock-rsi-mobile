import { combineReducers } from 'redux';
import stocks from 'reducers/stocks';
import config from 'reducers/config';

export default combineReducers({ stocks, config });
