import styled from 'styled-components/native';
import { palette } from 'config/theme';

export const style = {
  backgroundColor: palette.primaryDark,
  alignItems: 'center',
  justifyContent: 'center'
};

export const activeTintColor = palette.primaryAccent;
export const inactiveTintColor = palette.primaryAccent;

export const MainWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const UnderlineWrapper = styled.View`
  flex-direction: row;
`;

export const IconOverline = styled.View`
  flex: 1;
  min-height: 3
  background-color: ${props => (props.focused ? props.color : 'transparent')};
`;

export const IconWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
