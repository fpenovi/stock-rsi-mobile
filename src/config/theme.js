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

export default {
  ...palette,
  ...iconSizesNS,
  s
};
