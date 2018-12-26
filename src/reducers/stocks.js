import { handleActions } from 'redux-actions';

const initialState = {
  list: [],
  error: null
};

export default handleActions({}, initialState);
