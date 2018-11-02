import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Something } from 'components/Something';

export default class App extends Component {
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
