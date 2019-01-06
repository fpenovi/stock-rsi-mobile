import React, { Component } from 'react';
import env from 'react-native-config';
import { UIManager, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { StackNavigator } from 'navigation/StackNavigator';
import theme, { paperTheme } from 'config/theme';
import store from './store';

// Enable AnimationLayout on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends Component {
  componentDidMount() {
    console.log(env.NAME);
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PaperProvider theme={paperTheme}>
            <StackNavigator />
          </PaperProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
