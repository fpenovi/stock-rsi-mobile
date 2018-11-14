import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export class ListItemStock extends PureComponent {
  render() {
    const { companyName, symbol, rsi, lastUpdated, diff, error } = this.props;

    return (
      <View>
        <View>
          <Text>{companyName}</Text>
          <Text>{symbol}</Text>
        </View>
      </View>
    );
  }
}

ListItemStock.propTypes = {
  companyName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rsi: PropTypes.number.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  diff: PropTypes.number.isRequired,
  error: PropTypes.bool
};

ListItemStock.defaultProps = { error: false };
