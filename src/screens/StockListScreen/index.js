import React, { Component } from 'react';
import { FlatList, RefreshControl, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Screen } from 'components/Screen';
import { HeaderFilter } from 'components/HeaderFilter';
import { ListItemStock } from 'components/ListItemStock';
import { getAllStocks, modifyStocksFilters } from 'actions/stocks';
import { ListContainer } from './styles';
import { palette } from 'config/theme';
import SORT_ORDER from 'components/HeaderFilter/attributeOrder';
import MAPPINGS from 'components/HeaderFilter/attributeMappings';

class StockListScreen extends Component {
  attributes = [];

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

  getOrderedAttributes = stocks =>
    (this.attributes = stocks.length
      ? Object.keys(stocks[0])
          .filter(attr => attr !== 'error')
          .sort((a, b) => SORT_ORDER[a] - SORT_ORDER[b])
          .map(attr => ({
            name: attr,
            displayName: MAPPINGS[attr]
          }))
      : this.attributes);

  updateStocks = (filterBy, orderingBy, orderingMode) =>
    this.props.modifyStocksFilters({ filterBy, orderingBy, orderingMode });

  componentDidMount() {
    this.props.getAllStocks();
  }

  render() {
    this.attributes = this.getOrderedAttributes(this.props.companies);

    return (
      <Screen>
        <HeaderFilter
          attributes={this.attributes}
          filterBy={this.props.filterBy}
          orderingBy={this.props.orderingBy}
          orderingMode={this.props.orderingMode}
          onFilterApplied={this.updateStocks}
        />
        <ListContainer>
          <FlatList
            data={this.props.companies}
            contentContainerStyle={s.listContainer}
            indicatorStyle={Platform.select({
              ios: 'white',
              android: palette.primaryAccent
            })}
            refreshControl={
              <RefreshControl
                refreshing={this.props.isFetching}
                onRefresh={this.props.getAllStocks}
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

const mapStateToProps = ({ stocks }) => ({
  companies: stocks.list,
  isFetching: stocks.isFetching,
  filterBy: stocks.filterBy,
  orderingBy: stocks.orderingBy,
  orderingMode: stocks.orderingMode
});

export default connect(
  mapStateToProps,
  { getAllStocks, modifyStocksFilters }
)(StockListScreen);
