import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import {
  HeaderButtons,
  HeaderButton,
  Item
} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Octicons';
import { palette } from 'config/theme';
import { routes } from 'navigation/routes';

const AppHeaderButton = props => (
  // the `props` here come from <Item .../>
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton
    color={palette.primaryAccent}
    iconSize={21}
    background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)', true)}
    {...props}
    IconComponent={Icon}
  />
);

const tabsOptions = {
  [routes.STOCK_LIST_SCREEN]: navigation => ({
    headerTitle: 'Stocks',
    headerLeft: <></>,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
        <Item
          title="add-new-stock"
          iconName="plus"
          delayPressIn={0}
          onPress={() => navigation.navigate(routes.ADD_NEW_STOCK_SCREEN)}
          style={{ marginRight: 3 }}
        />
      </HeaderButtons>
    )
  }),
  [routes.CONFIGURATION_SCREEN]: () => ({ headerTitle: 'Configuration' })
};

export const configureTabsHeaders = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  if (tabsOptions[routeName]) return tabsOptions[routeName](navigation);
};
