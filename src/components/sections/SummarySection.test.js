import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { SummarySection } from './SummarySection';

describe('SummarySection', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <SummarySection
        className="summary-section-wrapper"
        title="Summary"
        data={mockChartData.summaryChart.data}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
