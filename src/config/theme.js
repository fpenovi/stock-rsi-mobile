export const palette = {
  primaryAccent: '#FFFFFF',
  secondaryAccent: '#6B818C',
  primaryDark: '#2b2b2b',
  secondaryDark: '#575A5E',
  terciaryDark: '#252525'
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
