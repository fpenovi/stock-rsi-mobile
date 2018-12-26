import { createAction } from 'redux-actions';
import { api } from 'config/network';

export const fetchStocks = createAction('FETCH_STOCKS');

export const getAllStocks = () => async dispatch => {
  let resp;

  try {
    resp = (await api.get(`/stocks`)).data;
  } catch (e) {
    resp = e;
  }

  dispatch(fetchStocks(resp));
};
