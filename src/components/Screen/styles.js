import styled from 'styled-components/native';

export const ScreenView = styled.View`
  flex: 1;
  background-color: ${props => props.background || props.theme.secondaryDark};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.alignItems || 'center'};
`;
