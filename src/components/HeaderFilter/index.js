import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Platform, Keyboard, View, LayoutAnimation } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { FlexibleAnimation } from './animations';
import {
  HideableContainer,
  FlexibleContainer,
  SearchBar,
  OrderingContainer,
  BackButton,
  OrderOptionsContainer,
  OptionWrapper
} from './styles';

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
      ordering: 'companyName',
      ascending: true
    };
  }

  toggleMode = () => {
    LayoutAnimation.configureNext(FlexibleAnimation);
    this.setState(
      { mode: (this.state.mode + 1) % MODES.length },
      Keyboard.dismiss
    );
  };

  updateSearch = queryString => {
    const subset = this.props.stocks.filter(stock => {
      const qs = queryString.toLowerCase();
      return (
        stock.symbol.toLowerCase().includes(qs) ||
        stock.name.toLowerCase().includes(qs)
      );
    });

    this.setState({ search: queryString }, this.props.onFilterApplied(subset));
  };

  render() {
    const { mode } = this.state;

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
            {this.props.stocks[0] &&
              Object.keys(this.props.stocks[0]).map((k, i) => (
                <OptionWrapper key={k} i={i}>
                  <Text>{k}</Text>
                </OptionWrapper>
              ))}
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
