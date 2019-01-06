import { createAction } from 'redux-actions';
import { api } from 'config/network';

export const startedFetchingStocks = createAction('FETCH_STOCKS_STARTED');
export const finishedFetchingStocks = createAction('FETCH_STOCKS_FINISHED');
export const modifyStocksFilters = createAction('MODIFY_STOCKS_FILTERS');

export const getAllStocks = () => async (dispatch, getState) => {
  dispatch(startedFetchingStocks());
  const defOrdering = getState().config.defaultStockOrdering;
  const defOrderingMode = getState().config.defaultStockOrderingMode;
  const orderingBy = defOrdering.options[defOrdering.selected].value;
  const orderingMode = defOrderingMode.options[defOrderingMode.selected].value;

  let resp;

  try {
    resp = (await api.get(`/stocks`)).data;
  } catch (e) {
    resp = e;
    dispatch(finishedFetchingStocks(e));
    return;
  }

  dispatch(finishedFetchingStocks({ list: resp, orderingBy, orderingMode }));
};
