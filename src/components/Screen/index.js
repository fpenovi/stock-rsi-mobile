import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { ScreenView } from './styles';

export class Screen extends PureComponent {
  render() {
    return (
      <ScreenView {...this.props}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        {this.props.children}
      </ScreenView>
    );
  }
}
