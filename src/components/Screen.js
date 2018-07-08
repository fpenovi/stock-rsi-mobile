import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Screen = props => (
  <View style={[styles.screen, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
