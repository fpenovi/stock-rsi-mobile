import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Platform, Keyboard, LayoutAnimation } from 'react-native';
import { IconButton } from 'react-native-paper';
import { ButtonSortGroup } from 'components/ButtonSortGroup';
import { FlexibleAnimation } from './animations';
import {
  HideableContainer,
  FlexibleContainer,
  SearchBar,
  OrderingContainer,
  BackButton,
  OrderOptionsContainer
} from './styles';
import MAPPINGS from './attributeMappings';
import { sortStocks } from './helpers';

const MODES = [0, 1];
const [SEARCH, ORDER] = MODES;
const BACK_BTN = Platform.select({
  ios: 'chevron-left',
  android: 'arrow-back'
});

export class HeaderFilter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      mode: SEARCH,
      ordering: ''
    };

    this.attributes = [];
  }

  toggleMode = () => {
    LayoutAnimation.configureNext(FlexibleAnimation);
    this.setState(
      { mode: (this.state.mode + 1) % MODES.length },
      Keyboard.dismiss
    );
  };

  orderChange = (ordering, orderingMode) => {
    this.updateSearch(this.state.search, ordering, orderingMode);
  };

  updateSearch = (queryString, ordering, orderingMode) => {
    const subset = this.props.stocks.filter(stock => {
      const qs = queryString.toLowerCase();
      return (
        stock.symbol.toLowerCase().includes(qs) ||
        stock.name.toLowerCase().includes(qs)
      );
    });

    // If not supplied, keep the same
    if (!ordering) {
      ordering = this.state.ordering;
    }

    this.setState(
      { search: queryString, ordering, orderingMode },
      this.props.onFilterApplied(
        subset.sort(sortStocks(orderingMode, ordering))
      )
    );
  };

  setAttributes = () => {
    if (this.attributes.length === 0 && this.props.stocks.length > 0) {
      this.attributes = Object.keys(this.props.stocks[0]).map(attr => ({
        name: attr,
        displayName: MAPPINGS[attr]
      }));
    }
  };

  render() {
    const { mode } = this.state;
    this.setAttributes();

    return (
      <FlexibleContainer>
        <HideableContainer show={mode === SEARCH}>
          <SearchBar
            placeholder="Search names or symbols"
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
          <IconButton
            icon="filter-list"
            onPress={this.toggleMode}
            delayPressIn={0}
          />
        </HideableContainer>
        <OrderingContainer show={mode === ORDER}>
          <BackButton icon={BACK_BTN} onPress={this.toggleMode} />
          <OrderOptionsContainer>
            <ButtonSortGroup
              attributes={this.attributes}
              orderingBy={this.state.ordering}
              onOrderChange={this.orderChange}
            />
          </OrderOptionsContainer>
        </OrderingContainer>
      </FlexibleContainer>
    );
  }
}

HeaderFilter.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      indicator: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      diff: PropTypes.number.isRequired,
      lastUpdated: PropTypes.string.isRequired,
      error: PropTypes.bool
    })
  ).isRequired,
  onFilterApplied: PropTypes.func.isRequired
};
