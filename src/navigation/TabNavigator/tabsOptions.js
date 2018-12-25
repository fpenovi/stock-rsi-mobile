import React from 'react';
import { IconButton } from 'react-native-paper';
import { iconSizesNS } from 'config/theme';
import { routes } from 'navigation/routes';

const tabsOptions = {
  [routes.STOCK_LIST_SCREEN]: navigation => ({
    headerTitle: 'Stocks',
    headerLeft: <></>,
    headerRight: (
      <IconButton
        icon="add"
        delayPressIn={0}
        onPress={() => navigation.navigate(routes.ADD_NEW_STOCK_SCREEN)}
        size={iconSizesNS.lg}
      />
    )
  }),
  [routes.CONFIGURATION_SCREEN]: () => ({ headerTitle: 'Configuration' })
};

export const configureTabsHeaders = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  if (tabsOptions[routeName]) return tabsOptions[routeName](navigation);
};
