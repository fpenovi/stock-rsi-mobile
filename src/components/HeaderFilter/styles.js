import styled from 'styled-components/native';
import { TouchableRipple, Searchbar } from 'react-native-paper';

export const Container = styled.View`
  flex-direction: row;
`;

export const SearchBar = styled(Searchbar)`
  flex: 1;
  border-radius: 0;
  background-color: ${({ theme }) => theme.terciaryDark};
`;

export const FilterTouchable = styled(TouchableRipple)`
  background-color: ${({ theme }) => theme.terciaryDark};
  justify-content: center;
  padding-horizontal: 10;
`;
