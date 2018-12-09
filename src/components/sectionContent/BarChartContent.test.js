import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { BarChartContent } from './BarChartContent';
import { getLabelMap } from '../../utils/getLabelMap';

describe('BarChartContent', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <BarChartContent
        title="Monthly Sales"
        data={mockChartData.monthlySales.data}
        labelMap={getLabelMap(mockChartData.monthlySales)}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
