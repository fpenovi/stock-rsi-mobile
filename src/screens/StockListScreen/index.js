import React, { Component } from 'react';
import Informer from 'components/Informer';
import { FlatList, RefreshControl, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Screen } from 'components/Screen';
import { HeaderFilter } from 'components/HeaderFilter';
import { ListItemStock } from 'components/ListItemStock';
import { ErrorUnrecoverable } from 'components/ErrorUnrecoverable';
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

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (prevProps.companies.length && !prevProps.error && error) {
      Informer.inform('Failed to update. Check your connection.');
    }
  }

  render() {
    const showError = this.props.error && !this.props.companies.length;
    this.attributes = this.getOrderedAttributes(this.props.companies);

    return (
      <Screen>
        {!showError ? (
          <>
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
          </>
        ) : (
          <ErrorUnrecoverable
            message={`Could not establish connection with server. Make sure you have access to Internet.`}
            retryMessage="Tap below to Retry"
            isFetching={this.props.isFetching}
            onRetry={this.props.getAllStocks}
          />
        )}
      </Screen>
    );
  }
}

const s = StyleSheet.create({
  listContainer: { alignItems: 'stretch' }
});

const mapStateToProps = ({ stocks }) => ({
  companies: stocks.list,
  filterBy: stocks.filterBy,
  orderingBy: stocks.orderingBy,
  orderingMode: stocks.orderingMode,
  isFetching: stocks.isFetching,
  error: stocks.error
});

export default connect(
  mapStateToProps,
  { getAllStocks, modifyStocksFilters }
)(StockListScreen);
