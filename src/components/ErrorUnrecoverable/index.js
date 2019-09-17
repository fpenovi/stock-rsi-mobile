import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  ErrorDescription,
  StyledIcon,
  ReloadIcon,
  RetryMessage
} from './styles';

export const ErrorUnrecoverable = ({
  message,
  retryMessage,
  isFetching,
  onRetry
}) => (
  <>
    <StyledIcon name="error-outline" />
    <ErrorDescription>{message}</ErrorDescription>
    <RetryMessage>{`\n${retryMessage}`}</RetryMessage>
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onRetry}
      disabled={isFetching}>
      <ReloadIcon
        name="nut"
        animation={isFetching ? 'rotate' : null}
        easing="ease-in-out"
        duration={1200}
        iterationCount="infinite"
        useNativeDriver
      />
    </TouchableOpacity>
  </>
);
