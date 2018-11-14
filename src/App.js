import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StackNavigator } from 'navigation/StackNavigator';
import theme from 'config/theme';
import env from 'react-native-config';

export default class App extends Component {
  componentDidMount() {
    console.warn(`THIS IS ${env.NAME} ENVIRONMENT`);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StackNavigator />
      </ThemeProvider>
    );
  }
}
