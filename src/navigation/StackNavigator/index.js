import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { TabNavigator } from 'navigation/TabNavigator';
import { routes } from 'navigation/routes';
import {
  headerStyle,
  headerTintColor,
  headerTitleContainerStyle
} from './styles';

const stackConfig = {
  initialRouteName: routes.TAB_NAVIGATOR,
  headerMode: 'float',
  navigationOptions: {
    title: 'Stock RSI',
    headerStyle,
    headerTintColor,
    headerTitleContainerStyle
  }
};

export const StackNavigator = createStackNavigator(
  {
    [routes.TAB_NAVIGATOR]: TabNavigator
  },
  stackConfig
);
