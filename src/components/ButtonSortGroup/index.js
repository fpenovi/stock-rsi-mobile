import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ButtonSort } from 'components/ButtonSort';
import { OptionWrapper } from './styles';

const MODES = [1, -1];

export class ButtonSortGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orderingBy: props.orderingBy,
      mode: null
    };
  }

  getNextMode = current => {
    return current === null ? 0 : (current + 1) % MODES.length;
  };

  onSortPress = attrName => () => {
    const { orderingBy, mode } = this.state;

    if (attrName === orderingBy) {
      const newMode = this.getNextMode(mode);
      return this.setState({ mode: newMode }, () =>
        this.props.onOrderChange(orderingBy, MODES[newMode])
      );
    }

    this.setState({ orderingBy: attrName, mode: 0 }, () =>
      this.props.onOrderChange(attrName, MODES[this.state.mode])
    );
  };

  render() {
    const { mode, orderingBy } = this.state;

    return (
      <>
        {this.props.attributes.map((k, i) => (
          <OptionWrapper key={k.name} i={i}>
            <ButtonSort
              text={k.displayName}
              onPress={this.onSortPress(k.name)}
              order={orderingBy === k.name ? MODES[mode] : null}
            />
          </OptionWrapper>
        ))}
      </>
    );
  }
}

ButtonSortGroup.propTypes = {
  orderingBy: PropTypes.string,
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired
    })
  ).isRequired,
  onOrderChange: PropTypes.func.isRequired
};

ButtonSortGroup.defaultProps = {
  orderingBy: ''
};
