import mockChartData from '../fixtures/mockChartData.json';
import { getLowerRangeSeriesKeys } from './getLowerRangeSeriesKeys';
import { getLabelMapForCombinedChart } from './getLabelMapForCombinedChart';
import { mapDataSetLabels } from './mapDataSetLabels';

describe('getLowerRangeSeriesKeys', () => {
  it('returns lower half of all series baser on average value', () => {
    const labelMap = getLabelMapForCombinedChart(mockChartData.monthlySales);
    const processedData = mapDataSetLabels(
      labelMap,
      mockChartData.monthlySales.data
    );
    const result = getLowerRangeSeriesKeys(labelMap, processedData);
    expect(result).toEqual(['Subscription', 'Single/Rental']);
  });
});
