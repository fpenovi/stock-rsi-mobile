import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StackNavigator } from 'navigation/StackNavigator';
import theme, { paperTheme } from 'config/theme';
import env from 'react-native-config';

export default class App extends Component {
  componentDidMount() {
    // console.warn(`THIS IS ${env.NAME} ENVIRONMENT`);
  }

  render() {
    console.log(paperTheme);

    return (
      <ThemeProvider theme={theme}>
        <PaperProvider theme={paperTheme}>
          <StackNavigator />
        </PaperProvider>
      </ThemeProvider>
    );
  }
}
