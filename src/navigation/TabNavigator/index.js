import React from 'react';
import StockListScreen from 'screens/StockListScreen';
import ConfigurationScreen from 'screens/ConfigurationScreen';
import { createBottomTabNavigator } from 'react-navigation';
import { routes } from 'navigation/routes';
import { palette } from 'config/theme';

const tabConfig = {
  initialRouteName: routes.STOCK_LIST_SCREEN,
  tabBarOptions: {
    showLabel: true,
    style: { backgroundColor: palette.primaryDark }
  }
};

export const TabNavigator = createBottomTabNavigator(
  {
    [routes.STOCK_LIST_SCREEN]: StockListScreen,
    [routes.CONFIGURATION_SCREEN]: ConfigurationScreen
  },
  tabConfig
);
