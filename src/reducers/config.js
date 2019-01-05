import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import attributes from 'components/HeaderFilter/attributeOrder';
import attributeMappings from 'components/HeaderFilter/attributeMappings';

const [ASC, DESC] = [1, -1];

const rsiBoundsInitialState = {
  availableRange: [0, 100],
  selected: [30, 70]
};

const langInitialState = {
  options: [{ label: 'English', value: 'en' }],
  selected: 0
};

const stockOrderingInitialState = {
  options: Object.keys(attributes)
    .sort((a, b) => attributes[a] - attributes[b])
    .map(k => ({ label: attributeMappings[k], value: k })),
  selected: 0
};

const stockOrderingModeInitialState = {
  options: [
    { label: 'Ascending', value: ASC },
    { label: 'Descending', value: DESC }
  ],
  selected: 0
};

const rsiBounds = handleActions({}, rsiBoundsInitialState);
const lang = handleActions({}, langInitialState);
const defaultStockOrdering = handleActions({}, stockOrderingInitialState);
const defaultStockOrderingMode = handleActions(
  {},
  stockOrderingModeInitialState
);

export default combineReducers({
  rsiBounds,
  lang,
  defaultStockOrdering,
  defaultStockOrderingMode
});
