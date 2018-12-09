import mockChartData from '../fixtures/mockChartData.json';
import { getLabelMap } from './getLabelMap';

describe('getLabelMapForCombinedChart', () => {
  it('creates label map for mock monthly sales data', () => {
    const result = getLabelMap(mockChartData.monthlySales);
    expect(result).toEqual({
      bar1: 'Event',
      bar2: 'Single/Rental',
      bar3: 'Pass',
      bar4: 'Subscription',
      label: 'label',
      line1: 'Transactions',
    });
  });

  it('creates label map for mock revenue data', () => {
    const result = getLabelMap(mockChartData.revenueMonthToMonth);
    expect(result).toEqual({
      x: 'Days of Month',
      y: 'Previous Month',
      y2: 'This Month',
      label: 'label',
    });
  });
});
