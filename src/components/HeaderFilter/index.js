import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, FilterTouchable, SearchBar } from './styles';
import { iconSizesNS, palette } from 'config/theme';

export class HeaderFilter extends PureComponent {
  state = { search: '' };

  updateSearch = search => this.setState({ search });

  render() {
    return (
      <Container>
        <SearchBar
          placeholder="Search names or symbols"
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <FilterTouchable onPress={() => {}} delayPressIn={0}>
          <Icon
            name="filter-variant"
            size={iconSizesNS.md}
            color={palette.primaryAccent}
          />
        </FilterTouchable>
      </Container>
    );
  }
}
