import styled from 'styled-components/native';

export const OptionWrapper = styled.View`
  flex-direction: row;
  width: ${100 / 2}%
  justify-content: ${({ i }) => (i % 2 === 0 ? 'flex-start' : 'flex-end')};
`;
