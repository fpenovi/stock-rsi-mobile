import styled from 'styled-components/native';
import { Text } from 'react-native-paper';

export const Container = styled.View`
  flex-direction: row;
  padding-left: 5;
  justify-content: center;
  align-items: center;
`;

export const DiffText = styled(Text)`
  color: ${({ decreased, theme }) => (decreased ? theme.red : theme.green)};
`;
