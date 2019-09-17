import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Subheading } from 'react-native-paper';

export const StyledIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.primaryDark};
  font-size: 200;
`;

export const ErrorDescription = styled(Subheading)`
  color: ${({ theme }) => theme.primaryDark};
  font-weight: bold;
  text-align: center;
  padding-horizontal: 10%;
`;

export const RetryMessage = styled(ErrorDescription)`
  color: ${({ theme }) => theme.primaryAccent};
  font-size: 18;
`;

export const ReloadIcon = styled(
  Animatable.createAnimatableComponent(MaterialDesignIcons)
)`
  color: ${({ theme }) => theme.primaryAccent};
  font-size: 75;
  margin-vertical: 10%;
`;
