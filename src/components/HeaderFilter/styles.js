import styled from 'styled-components/native';
import { Searchbar, IconButton } from 'react-native-paper';

export const FlexibleContainer = styled.View`
  align-self: stretch;
  background-color: ${({ theme }) => theme.terciaryDark};
`;

export const HideableContainer = styled.View`
  flex-direction: row;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;

export const OrderingContainer = styled(HideableContainer)`
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.terciaryDark};
  padding-bottom: 20;
`;

export const OrderOptionsContainer = styled.View`
  flex-direction: row;
  max-width: 80%;
  flex-wrap: wrap;
`;

export const OptionWrapper = styled.View`
  width: ${100 / 2}%
  align-items: ${({ i }) => (i % 2 === 0 ? 'flex-start' : 'flex-end')};
`;

export const SearchBar = styled(Searchbar)`
  flex: 1;
  border-radius: 0;
  background-color: ${({ theme }) => theme.terciaryDark};
`;

export const BackButton = styled(IconButton)`
  align-self: flex-start;
`;
