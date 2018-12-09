import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { LineChartContent } from './LineChartContent';
import { getLabelMap } from '../../utils/getLabelMap';

describe('LineChartContent', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <LineChartContent
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
