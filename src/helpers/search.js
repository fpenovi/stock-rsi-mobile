function compareStr(mode, a, b) {
  if (a < b) return mode * -1;
  if (a === b) return 0;
  if (a > b) return mode * 1;
}

export const filterStocks = (stocks, qs) => {
  if (!qs) return stocks;
  qs = qs.toLowerCase();

  return stocks.filter(
    ({ symbol, name }) =>
      symbol.toLowerCase().includes(qs) || name.toLowerCase().includes(qs)
  );
};

export const sortStocks = (attr, mode) => (a, b) => {
  if (typeof a[attr] === 'string') {
    return compareStr(mode, a[attr], b[attr]);
  }

  return mode * (a[attr] - b[attr]);
};
