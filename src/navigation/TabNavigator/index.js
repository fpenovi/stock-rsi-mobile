import React from 'react';
import StockListScreen from 'screens/StockListScreen';
import ConfigurationScreen from 'screens/ConfigurationScreen';
import { createBottomTabNavigator } from 'react-navigation';
import { routes } from 'navigation/routes';

const tabConfig = {
  initialRouteName: routes.STOCK_LIST_SCREEN,
  tabBarOptions: {
    showLabel: false
  }
};

export const TabNavigator = createBottomTabNavigator(
  {
    [routes.STOCK_LIST_SCREEN]: StockListScreen,
    [routes.CONFIGURATION_SCREEN]: ConfigurationScreen
  },
  tabConfig
);
