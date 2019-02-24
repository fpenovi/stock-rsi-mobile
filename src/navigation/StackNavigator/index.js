import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TabNavigator } from 'navigation/TabNavigator';
import { routes } from 'navigation/routes';
import {
  headerStyle,
  headerTintColor,
  headerTitleContainerStyle
} from './styles';
import { AddNewStockScreen } from 'screens/AddNewStockScreen';

const stackConfig = {
  initialRouteName: routes.TAB_NAVIGATOR,
  headerMode: 'float',
  defaultNavigationOptions: {
    title: 'Stock RSI',
    headerStyle,
    headerTintColor,
    headerTitleContainerStyle
  }
};

export const StackNavigator = createAppContainer(
  createStackNavigator(
    {
      [routes.TAB_NAVIGATOR]: { screen: TabNavigator },
      [routes.ADD_NEW_STOCK_SCREEN]: {
        screen: AddNewStockScreen,
        navigationOptions: {
          title: 'Add new symbol',
          headerRight: <></>
        }
      }
    },
    stackConfig
  )
);
