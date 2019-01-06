import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ButtonSort } from 'components/ButtonSort';
import { OptionWrapper } from './styles';

const MODES = [1, -1, 0];
const [ASC, DESC, NO_SORT] = MODES;

export class ButtonSortGroup extends PureComponent {
  getNextMode = current => {
    switch (current) {
      case ASC:
        return DESC;
      default:
        return ASC;
    }
  };

  onSortPress = attrName => () => {
    const { orderingBy, mode } = this.props;
    const newMode = this.getNextMode(mode);

    if (attrName === orderingBy)
      return this.props.onOrderChange(orderingBy, newMode);

    this.props.onOrderChange(attrName, ASC);
  };

  render() {
    const { mode, orderingBy } = this.props;

    return (
      <>
        {this.props.attributes.map((k, i) => (
          <OptionWrapper key={k.name} i={i}>
            <ButtonSort
              text={k.displayName}
              onPress={this.onSortPress(k.name)}
              order={orderingBy === k.name ? mode : NO_SORT}
            />
          </OptionWrapper>
        ))}
      </>
    );
  }
}

ButtonSortGroup.propTypes = {
  orderingBy: PropTypes.string.isRequired,
  mode: PropTypes.number.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired
    })
  ).isRequired,
  onOrderChange: PropTypes.func.isRequired
};
