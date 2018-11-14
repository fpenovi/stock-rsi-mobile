import React, { Component } from 'react';
import { Screen } from 'components/Screen';
import { FlatList } from 'react-native';
import { ListItemStock } from 'components/ListItemStock';
import { api } from 'config/network';

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
        <FlatList
          data={this.state.companies}
          renderItem={({ item }) => (
            <ListItemStock
              companyName={item.company.name}
              symbol={item.company.symbol}
              rsi={item.indicator}
              diff={item.diff}
              lastUpdated={item.lastUpdated}
              error={item.error}
            />
          )}
          keyExtractor={this._keyExtractor}
        />
      </Screen>
    );
  }
}
