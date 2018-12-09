import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { CustomContent } from './CustomContent';
import { Summary } from '../Summary';

describe('CustomContent', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <CustomContent className="summary-section-wrapper" title="Summary">
        <Summary data={mockChartData.summaryChart.data} />
      </CustomContent>
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
