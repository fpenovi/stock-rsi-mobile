function compareStr(mode, a, b) {}

export const sortStocks = (mode, attr) => (a, b) => {
  if (typeof a[attr] === 'string') {
    return compareStr(mode, a[attr], b[attr]);
  }

  return mode * (a[attr] - b[attr]);
};
