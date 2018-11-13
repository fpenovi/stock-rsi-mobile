import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { ScreenView } from './styles';
import { palette } from 'config/theme';

export class Screen extends PureComponent {
  render() {
    return (
      <ScreenView {...this.props}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={palette.terciaryDark}
        />
        {this.props.children}
      </ScreenView>
    );
  }
}
