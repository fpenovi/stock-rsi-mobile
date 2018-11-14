import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { palette } from 'config/theme';

export const style = {
  backgroundColor: palette.primaryDark,
  alignItems: 'center',
  justifyContent: 'center'
};

export const activeTintColor = palette.primaryAccent;
export const inactiveTintColor = palette.primaryAccent;

export const IconOverline = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  ${props =>
    props.focused &&
    `border-top-width: 3;
    border-top-color: ${props.theme.primaryAccent}
    `}
`;

export const FloatingIcon = styled(Icon)`
  position: absolute;
`;
