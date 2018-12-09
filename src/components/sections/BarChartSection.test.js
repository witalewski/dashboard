import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { BarChartSection } from './BarChartSection';
import { getLabelMapForCombinedChart } from '../../utils/getLabelMapForCombinedChart';

describe('BarChartSection', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <BarChartSection
        title="Monthly Sales"
        data={mockChartData.monthlySales.data}
        dataTransform={e => e}
        labelMap={getLabelMapForCombinedChart(mockChartData.monthlySales)}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
