export const getLabelMap = source => ({
  label: 'label',
  ...Object.keys(source)
    .filter(key => key.match(/-label/))
    .reduce((acc, key) => ({ ...acc, [key.split('-')[0]]: source[key] }), {}),
});
