import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Screen } from 'components/Screen';
import { ListItemStock } from 'components/ListItemStock';
import { api } from 'config/network';
import { ListContainer } from './styles';

export default class StockListScreen extends Component {
  state = {
    companies: []
  };

  async componentDidMount() {
    const resp = await api.get('/stocks');
    this.setState({ companies: resp.data });
  }

  _keyExtractor = item => item.company.symbol;

  render() {
    return (
      <Screen>
        <ListContainer>
          <FlatList
            data={this.state.companies}
            contentContainerStyle={s.listContainer}
            indicatorStyle="white"
            renderItem={({ item }) => (
              <ListItemStock
                companyName={item.company.name}
                symbol={item.company.symbol}
                rsi={item.indicator}
                price={item.price}
                diff={item.diff}
                lastUpdated={item.lastUpdated}
                error={item.error}
              />
            )}
            keyExtractor={this._keyExtractor}
          />
        </ListContainer>
      </Screen>
    );
  }
}

const s = StyleSheet.create({
  listContainer: { alignItems: 'stretch' }
});
