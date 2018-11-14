import React from 'react';
import { FloatingIcon, IconOverline } from './styles';
import { iconSizesNS } from 'config/theme';

export const createTabIcon = (iconActive, iconInactive) => ({
  focused,
  tintColor
}) => (
  <IconOverline focused={focused}>
    <FloatingIcon
      name={focused ? iconActive : iconInactive}
      color={tintColor}
      size={iconSizesNS.lg}
    />
  </IconOverline>
);
