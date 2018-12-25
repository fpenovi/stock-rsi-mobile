import React from 'react';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { palette } from 'config/theme';
import { routes } from 'navigation/routes';

const tabsOptions = {
  [routes.STOCK_LIST_SCREEN]: navigation => ({
    headerTitle: 'Stocks',
    headerLeft: <></>,
    headerRight: (
      <TouchableItem
        borderless
        delayPressIn={0}
        onPress={() => navigation.navigate(routes.ADD_NEW_STOCK_SCREEN)}
        style={{ marginRight: 8 }}>
        <Icon name="add" color={palette.primaryAccent} size={30} />
      </TouchableItem>
    )
  }),
  [routes.CONFIGURATION_SCREEN]: () => ({ headerTitle: 'Configuration' })
};

export const configureTabsHeaders = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  if (tabsOptions[routeName]) return tabsOptions[routeName](navigation);
};
