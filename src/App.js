import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Something } from 'components/Something';
import env from 'react-native-config';

export default class App extends Component {
  componentDidMount() {
    console.warn(`THIS IS ${env.NAME} ENVIRONMENT`);
  }

  render() {
    return (
      <ThemeProvider theme={{}}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Something />
        </View>
      </ThemeProvider>
    );
  }
}
