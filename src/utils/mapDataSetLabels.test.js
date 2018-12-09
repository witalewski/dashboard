import mockChartData from '../fixtures/mockChartData.json';
import { getLabelMap } from './getLabelMap';
import { mapDataSetLabels } from './mapDataSetLabels';

describe('getLowerRangeSeriesKeys', () => {
  it('returns lower half of all series baser on average value', () => {
    const labelMap = getLabelMap(mockChartData.monthlySales);
    const result = mapDataSetLabels(labelMap, mockChartData.monthlySales.data);
    expect(result).toEqual([
      {
        label: 'December',
        Event: 120.65,
        'Single/Rental': null,
        Pass: 6562.67,
        Subscription: null,
        Transactions: 12455,
      },
      {
        label: 'January',
        Event: 243.64,
        'Single/Rental': null,
        Pass: 7165.2,
        Subscription: null,
        Transactions: 13468,
      },
      {
        label: 'February',
        Event: 345.54,
        'Single/Rental': 12.4,
        Pass: 46744.11,
        Subscription: null,
        Transactions: 58446,
      },
    ]);
  });
});
