import styled from 'styled-components/native';
import { FAB } from 'react-native-paper';

export const ListContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const AddStockButton = styled(FAB)`
  position: absolute;
  bottom: 16;
  right: 16;
  background-color: ${({ theme }) => theme.secondaryAccent};
`;
