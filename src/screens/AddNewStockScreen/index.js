import React, { Component } from 'react';
import { Screen } from 'components/Screen';
import { TextStyled } from './styles';

export class AddNewStockScreen extends Component {
  render() {
    return (
      <Screen>
        <TextStyled>
          {'Subscribing to new symbols not supported yet\nComing soon'}
        </TextStyled>
      </Screen>
    );
  }
}
