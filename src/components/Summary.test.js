import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../fixtures/mockChartData.json';
import { Summary } from './Summary';

describe('Summary', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Summary data={mockChartData.summaryChart.data} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
