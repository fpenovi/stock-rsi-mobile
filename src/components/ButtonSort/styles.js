import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const RadiusView = styled.View`
  border-radius: 15;
  border-width: 0.5;
  border-color: ${({ theme }) => theme.primaryAccent};
  margin-vertical: 5;
  overflow: hidden;
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10;
  padding-vertical: 7;
`;

export const IconStyled = styled(Icon)`
  font-size: ${({ theme }) => theme.xs};
  color: ${({ theme, order }) => (order > 0 ? theme.green : theme.red)};
`;
