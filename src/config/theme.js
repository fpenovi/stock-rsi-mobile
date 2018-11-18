import { Platform } from 'react-native';

export const palette = {
  primaryAccent: '#FFFFFF',
  secondaryAccent: '#7a909b',
  primaryDark: '#2b2b2b',
  secondaryDark: '#626569',
  terciaryDark: '#252525',
  green: '#31f131',
  red: '#f14d3f'
};

export const iconSizesNS = {
  xs: 16,
  md: 24,
  lg: 32
};

/**
 * Scales dp value proportionally to the device's physical properties such as
 * height, width, pixel density, etc.
 * @param dp
 * @returns {*}
 */
export const s = dp => dp;

const isIOS = Platform.OS === 'ios';

const fonts = {
  regular: isIOS ? 'Helvetica Neue' : 'sans-serif',
  medium: isIOS ? 'HelveticaNeue-Medium' : 'sans-serif-medium',
  light: isIOS ? 'HelveticaNeue-Light' : 'sans-serif-light',
  thin: isIOS ? 'HelveticaNeue-Thin' : 'sans-serif-thin'
};

export const paperTheme = {
  dark: true,
  roundness: 5,
  colors: {
    primary: palette.terciaryDark,
    accent: palette.primaryAccent,
    background: palette.secondaryDark,
    surface: palette.primaryDark,
    text: palette.primaryAccent,
    disabled: palette.secondaryDark,
    placeholder: palette.secondaryAccent,
    backdrop: 'rgba(0, 0, 0, 0.5)'
  },
  fonts
};

export default {
  ...palette,
  ...iconSizesNS,
  s
};
