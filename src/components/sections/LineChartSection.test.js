import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { LineChartSection } from './LineChartSection';
import { getLabelMap } from '../../utils/getLabelMap';

describe('LineChartSection', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <LineChartSection
        title="Revenue This Month vs Revenue Previous Month"
        className="revenue-section-wrapper"
        data={mockChartData.revenueMonthToMonth.data}
        labelMap={getLabelMap(mockChartData.revenueMonthToMonth)}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
