import React, { Component } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { Screen } from 'components/Screen';
import { HeaderFilter } from 'components/HeaderFilter';
import { ListItemStock } from 'components/ListItemStock';
import { api } from 'config/network';
import { AddStockButton, ListContainer } from './styles';
import { palette } from 'config/theme';

export default class StockListScreen extends Component {
  state = {
    companies: [],
    refreshing: false
  };

  getStocks = async () => {
    const resp = await api.get('/stocks');
    this.setState({ companies: resp.data, refreshing: false });
  };

  _onRefresh = () => {
    this.setState({ refreshing: true }, this.getStocks);
  };

  _keyExtractor = item => item.company.symbol;

  async componentDidMount() {
    await this.getStocks();
  }

  render() {
    return (
      <Screen>
        <HeaderFilter />
        <ListContainer>
          <FlatList
            data={this.state.companies}
            contentContainerStyle={s.listContainer}
            indicatorStyle="white"
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                colors={[palette.green]}
                progressBackgroundColor={palette.secondaryDark}
                tintColor={palette.green}
              />
            }
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
        <AddStockButton
          icon="add"
          color={palette.primaryAccent}
          onPress={() => {}}
        />
      </Screen>
    );
  }
}

const s = StyleSheet.create({
  listContainer: { alignItems: 'stretch' }
});
