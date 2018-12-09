export const getLabelMapForCombinedChart = source => ({
  label: 'label',
  ...Object.keys(source)
    .filter(key => key.match(/-bar|-label/))
    .reduce((acc, key) => ({ ...acc, [key.split('-')[0]]: source[key] }), {}),
});
