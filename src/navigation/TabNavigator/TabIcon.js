import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  MainWrapper,
  UnderlineWrapper,
  IconOverline,
  IconWrapper
} from './styles';

export const createTabIcon = (iconActive, iconInactive) => ({
  focused,
  tintColor
}) => (
  <MainWrapper>
    <UnderlineWrapper>
      <IconOverline focused={focused} color={tintColor} />
    </UnderlineWrapper>
    <IconWrapper>
      <Icon
        name={focused ? iconActive : iconInactive}
        color={tintColor}
        size={32}
      />
    </IconWrapper>
  </MainWrapper>
);
