import { handleActions } from 'redux-actions';
import { isError } from 'flux-standard-action';
import { fetchStocks } from 'actions/stocks';

const initialState = {
  list: [],
  error: null
};

const unstructureStock = stock => {
  const { company, ...rest } = stock;
  return { ...company, ...rest };
};

const reduceStocks = (state, action) => {
  if (isError(action)) return { ...state, error: action.payload };

  return {
    ...state,
    list: action.payload.map(unstructureStock),
    error: initialState.error
  };
};

export default handleActions(
  {
    [fetchStocks]: reduceStocks
  },
  initialState
);
