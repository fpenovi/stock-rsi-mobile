import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableRipple } from 'react-native-paper';
import { ContentWrapper, IconStyled, RadiusView } from './styles';

export class ButtonSort extends PureComponent {
  render() {
    const { text, order, onPress } = this.props;

    return (
      <RadiusView>
        <TouchableRipple onPress={onPress} delayPressIn={0}>
          <ContentWrapper style={{ flexDirection: 'row' }}>
            <Text>{text}</Text>
            {order === 1 && <IconStyled order={order} name="chevron-up" />}
            {order === -1 && <IconStyled order={order} name="chevron-down" />}
          </ContentWrapper>
        </TouchableRipple>
      </RadiusView>
    );
  }
}

ButtonSort.propTypes = {
  text: PropTypes.string.isRequired,
  order: PropTypes.oneOf([1, -1, 0]),
  onPress: PropTypes.func.isRequired
};

ButtonSort.defaultProps = {
  order: 1
};
