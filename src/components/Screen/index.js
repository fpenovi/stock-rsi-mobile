import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { ScreenView } from './styles';
import { palette } from 'config/theme';

export class Screen extends PureComponent {
  render() {
    return (
      <ScreenView>
        <StatusBar barStyle="light-content" backgroundColor="black">
          {this.props.children}
        </StatusBar>
      </ScreenView>
    );
  }
}
