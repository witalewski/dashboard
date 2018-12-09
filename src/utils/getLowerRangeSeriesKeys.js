export const getLowerRangeSeriesKeys = (labelMap, processedData) => {
  const sortedSeries = Object.values(labelMap)
    .filter(e => e !== 'label')
    .map(key => ({
      key: key,
      avgValue:
        processedData.reduce((acc, item) => acc + item[key], 0) /
        processedData.length,
    }))
    .sort((a, b) => a.avgValue - b.avgValue);
  const halfOfSortedSeriesLength = Math.floor(sortedSeries.length / 2);
  const lowerRangeSeries = sortedSeries.slice(0, halfOfSortedSeriesLength);
  if (sortedSeries.length % 2 !== 0) {
    let middleItem = sortedSeries[halfOfSortedSeriesLength];
    if (
      Math.abs(
        middleItem.avgValue - sortedSeries[halfOfSortedSeriesLength - 1]
      ) <
      Math.abs(middleItem.avgValue - sortedSeries[halfOfSortedSeriesLength + 1])
    ) {
      lowerRangeSeries.push(middleItem);
    }
  }
  return lowerRangeSeries.map(item => item.key);
};
