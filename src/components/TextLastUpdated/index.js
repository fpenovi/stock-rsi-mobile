import React from 'react';
import { StyledText } from './styles';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const TextLastUpdated = ({ date, style }) => {
  const now = new Date();
  const diff = now - date;
  let result = '';

  if (diff >= DAY) {
    result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  } else if (diff >= HOUR) {
    const hours = Math.floor(diff / HOUR);
    result = `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  } else if (diff >= MINUTE) {
    const minutes = Math.floor(diff / MINUTE);
    result = `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
  } else {
    const seconds = Math.floor(diff / SECOND);
    result = `a moment ago`;
    result = `${seconds > 9 ? `${seconds} seconds ago` : result}`;
  }

  return <StyledText style={style}>{result}</StyledText>;
};
