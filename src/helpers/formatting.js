export const preventNotPresent = (val, format = input => input) => {
  return val === undefined || val === null ? '--' : format(val);
};
