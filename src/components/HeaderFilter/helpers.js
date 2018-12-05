function compareStr(mode, a, b) {
  if (a < b) return mode * -1;
  if (a === b) return 0;
  if (a > b) return mode * 1;
}

export const sortStocks = (mode, attr) => (a, b) => {
  if (typeof a[attr] === 'string') {
    return compareStr(mode, a[attr], b[attr]);
  }

  return mode * (a[attr] - b[attr]);
};
