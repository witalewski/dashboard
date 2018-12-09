import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { SummarySectionWrapper } from './SummarySectionWrapper';

describe('SummarySectionWrapper', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SummarySectionWrapper data={mockChartData.summaryChart.data} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
