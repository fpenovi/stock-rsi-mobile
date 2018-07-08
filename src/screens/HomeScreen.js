import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Screen } from 'components/Screen';

const HomeScreen = () => (
  <Screen style={styles.screen}>
    <Text style={styles.text}>Hello Stock RSI</Text>
  </Screen>
);

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: 'darkblue',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export { HomeScreen };
