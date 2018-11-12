import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { TabNavigator } from 'navigation/TabNavigator';
import { routes } from 'navigation/routes';
import { palette } from 'config/theme';

const stackConfig = {
  initialRouteName: routes.TAB_NAVIGATOR,
  headerMode: 'float',
  navigationOptions: {
    title: 'Stock RSI',
    headerStyle: {
      backgroundColor: palette.primaryDark
    },
    headerTitleContainerStyle: { justifyContent: 'center' },
    headerTintColor: palette.terciaryAccent
  }
};

export const StackNavigator = createStackNavigator(
  {
    [routes.TAB_NAVIGATOR]: TabNavigator
  },
  stackConfig
);
