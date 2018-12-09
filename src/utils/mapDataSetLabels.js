export const mapDataSetLabels = (labelMap, data) =>
  data.map(item =>
    Object.keys(item).reduce(
      (acc, key) => ({ ...acc, [labelMap[key]]: item[key] }),
      {}
    )
  );
