import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconSizesNS, palette } from 'config/theme';
import { Container, DiffText } from './styles';

export const TextDiffFeedback = ({ diff, style }) => {
  const decreased = diff < 0;

  return (
    <Container>
      <DiffText decreased={decreased} style={style}>
        {` (${decreased ? '' : '+'}${diff.toFixed(2)}%)`}
      </DiffText>
      <Icon
        name={decreased ? 'trending-down' : 'trending-up'}
        color={decreased ? palette.red : palette.green}
        size={iconSizesNS.xs}
      />
    </Container>
  );
};
