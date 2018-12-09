import mockChartData from '../fixtures/mockChartData.json';
import { getLowerRangeSeriesKeys } from './getLowerRangeSeriesKeys';
import { getLabelMap } from './getLabelMap';
import { mapDataSetLabels } from './mapDataSetLabels';

describe('getLowerRangeSeriesKeys', () => {
  it('returns lower half of all series based on average value - for mock data', () => {
    const labelMap = getLabelMap(mockChartData.monthlySales);
    const processedData = mapDataSetLabels(
      labelMap,
      mockChartData.monthlySales.data
    );
    const result = getLowerRangeSeriesKeys(labelMap, processedData);
    expect(result).toEqual(['Subscription', 'Single/Rental']);
  });
  it('returns lower half of all series based on average value - for modified mock data with even number of series', () => {
    const labelMap = getLabelMap(mockChartData.monthlySales);
    const processedData = mapDataSetLabels(
      labelMap,
      mockChartData.monthlySales.data
    );
    const result = getLowerRangeSeriesKeys(labelMap, processedData.slice(1));
    expect(result).toEqual(['Subscription', 'Single/Rental']);
  });
});
