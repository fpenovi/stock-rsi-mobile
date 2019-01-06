import { handleActions } from 'redux-actions';
import { isError } from 'flux-standard-action';
import { filterStocks, sortStocks } from 'helpers/search';
import {
  startedFetchingStocks,
  finishedFetchingStocks,
  modifyStocksFilters
} from 'actions/stocks';

const initialState = {
  rawList: [],
  list: [],
  filterBy: '',
  orderingBy: '',
  orderingMode: 0,
  error: null,
  isFetching: false
};

const unstructureStock = stock => {
  const { company, ...rest } = stock;
  return { ...company, ...rest };
};

const processFilters = (stocks, filterBy, orderingBy, orderingMode) =>
  filterStocks(stocks, filterBy).sort(sortStocks(orderingBy, orderingMode));

const reduceStocks = (state, action) => {
  if (isError(action))
    return { ...state, error: action.payload, isFetching: false };

  const unModified = action.payload.list.map(unstructureStock);
  const orderingBy = state.orderingBy || action.payload.orderingBy;
  const orderingMode = state.orderingMode || action.payload.orderingMode;
  const modified = processFilters(
    unModified,
    state.filterBy,
    orderingBy,
    orderingMode
  );

  return {
    ...state,
    rawList: unModified,
    list: modified,
    orderingBy,
    orderingMode,
    error: initialState.error,
    isFetching: false
  };
};

export default handleActions(
  {
    [startedFetchingStocks]: state => ({ ...state, isFetching: true }),
    [finishedFetchingStocks]: reduceStocks,
    [modifyStocksFilters]: (state, { payload }) => ({
      ...state,
      filterBy: payload.filterBy,
      orderingBy: payload.orderingBy,
      orderingMode: payload.orderingMode,
      list: processFilters(
        state.rawList,
        payload.filterBy,
        payload.orderingBy,
        payload.orderingMode
      )
    })
  },
  initialState
);
