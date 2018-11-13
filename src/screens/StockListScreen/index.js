import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Screen } from 'components/Screen';

export default class StockListScreen extends Component {
  render() {
    return (
      <Screen>
        <Icon name="chevron-left" color="red" size={100} />
      </Screen>
    );
  }
}
