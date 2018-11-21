import { LayoutAnimation } from 'react-native';

export const FlexibleAnimation = {
  duration: 350,
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 1
  }
};
