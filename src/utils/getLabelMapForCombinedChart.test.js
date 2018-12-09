import mockChartData from '../fixtures/mockChartData.json';
import { getLabelMapForCombinedChart } from './getLabelMapForCombinedChart';

describe('getLabelMapForCombinedChart', () => {
  it('creates label map for mock data', () => {
    const result = getLabelMapForCombinedChart(mockChartData.monthlySales);
    expect(result).toEqual({
      bar1: 'Event',
      bar2: 'Single/Rental',
      bar3: 'Pass',
      bar4: 'Subscription',
      label: 'label',
      line1: 'Transactions',
    });
  });
});
