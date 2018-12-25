import React, { Component } from 'react';
import { FlatList, RefreshControl, Platform, StyleSheet } from 'react-native';
import { Screen } from 'components/Screen';
import { HeaderFilter } from 'components/HeaderFilter';
import { ListItemStock } from 'components/ListItemStock';
import { api } from 'config/network';
import { ListContainer } from './styles';
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

  _renderItem = ({ item }) => (
    <ListItemStock
      companyName={item.name}
      symbol={item.symbol}
      rsi={item.indicator}
      price={item.price}
      diff={item.diff}
      lastUpdated={item.lastUpdated}
      error={!!item.error}
    />
  );

  _keyExtractor = item => item.symbol;

  _itemLayout = (data, index) => ({
    length: ListItemStock.getItemHeight(),
    offset: ListItemStock.getItemHeight() * index,
    index
  });

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
            indicatorStyle={Platform.select({
              ios: 'white',
              android: palette.primaryAccent
            })}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                colors={[palette.green]}
                progressBackgroundColor={palette.secondaryDark}
                tintColor={palette.green}
              />
            }
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            getItemLayout={this._itemLayout}
            initialNumToRender={10}
            removeClippedSubviews
          />
        </ListContainer>
      </Screen>
    );
  }
}

const s = StyleSheet.create({
  listContainer: { alignItems: 'stretch' }
});
