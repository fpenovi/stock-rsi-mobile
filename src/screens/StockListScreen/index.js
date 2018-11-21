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
    filtered: [],
    refreshing: false,
    isFetching: false
  };

  unstructureStock = stock => {
    const { company, ...rest } = stock;
    return { ...company, ...rest };
  };

  getStocks = async () => {
    this.setState({ isFetching: true });
    const resp = await api.get('/stocks');
    const companies = resp.data.map(this.unstructureStock);
    this.setState({
      companies,
      filtered: companies,
      isFetching: false,
      refreshing: false
    });
  };

  _onRefresh = () => {
    this.setState({ refreshing: true }, this.getStocks);
  };

  _keyExtractor = item => item.symbol;

  updateStocks = newDataState => this.setState({ filtered: newDataState });

  async componentDidMount() {
    await this.getStocks();
  }

  render() {
    return (
      <Screen>
        <HeaderFilter
          stocks={this.state.companies}
          onFilterApplied={this.updateStocks}
        />
        <ListContainer>
          <FlatList
            data={this.state.filtered}
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
                companyName={item.name}
                symbol={item.symbol}
                rsi={item.indicator}
                price={item.price}
                diff={item.diff}
                lastUpdated={item.lastUpdated}
                error={!!item.error}
              />
            )}
            keyExtractor={this._keyExtractor}
          />
        </ListContainer>
        {!this.state.isFetching && (
          <AddStockButton
            icon="add"
            color={palette.primaryAccent}
            onPress={() => {}}
          />
        )}
      </Screen>
    );
  }
}

const s = StyleSheet.create({
  listContainer: { alignItems: 'stretch' }
});
