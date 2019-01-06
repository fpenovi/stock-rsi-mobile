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

const MODES = [0, 1];
const [SEARCH, ORDER] = MODES;
const BACK_BTN = Platform.select({
  ios: 'chevron-left',
  android: 'arrow-back'
});

export class HeaderFilter extends PureComponent {
  state = { mode: SEARCH };

  toggleMode = () => {
    LayoutAnimation.configureNext(FlexibleAnimation);
    this.setState(
      { mode: (this.state.mode + 1) % MODES.length },
      Keyboard.dismiss
    );
  };

  orderChange = (ordering, orderingMode) => {
    this.updateSearch(this.props.filterBy, ordering, orderingMode);
  };

  updateSearch = queryString => {
    const { onFilterApplied, orderingBy, orderingMode } = this.props;
    onFilterApplied(queryString, orderingBy, orderingMode);
  };

  render() {
    const { mode } = this.state;

    return (
      <FlexibleContainer>
        <HideableContainer show={mode === SEARCH}>
          <SearchBar
            placeholder="Search names or symbols"
            onChangeText={this.updateSearch}
            value={this.props.filterBy}
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
              attributes={this.props.attributes}
              orderingBy={this.props.orderingBy}
              mode={this.props.orderingMode}
              onOrderChange={this.orderChange}
            />
          </OrderOptionsContainer>
        </OrderingContainer>
      </FlexibleContainer>
    );
  }
}

HeaderFilter.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired
    })
  ).isRequired,
  filterBy: PropTypes.string.isRequired,
  orderingBy: PropTypes.string.isRequired,
  orderingMode: PropTypes.number.isRequired,
  onFilterApplied: PropTypes.func.isRequired
};
