import React from 'react';
import StockListScreen from 'screens/StockListScreen';
import ConfigurationScreen from 'screens/ConfigurationScreen';
import { createBottomTabNavigator } from 'react-navigation';
import { createTabIcon } from './TabIcon';
import { style, activeTintColor, inactiveTintColor } from './styles';
import { routes } from 'navigation/routes';

const tabConfig = {
  initialRouteName: routes.STOCK_LIST_SCREEN,
  tabBarOptions: {
    showLabel: false,
    activeTintColor,
    inactiveTintColor,
    style
  }
};

export const TabNavigator = createBottomTabNavigator(
  {
    [routes.STOCK_LIST_SCREEN]: {
      screen: StockListScreen,
      navigationOptions: {
        tabBarIcon: createTabIcon('clipboard-pulse', 'clipboard-pulse-outline')
      }
    },
    [routes.CONFIGURATION_SCREEN]: {
      screen: ConfigurationScreen,
      navigationOptions: {
        tabBarIcon: createTabIcon('settings', 'settings-outline')
      }
    }
  },
  tabConfig
);
