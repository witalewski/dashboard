import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { MonthlySalesSectionWrapper } from './MonthlySalesSectionWrapper';

describe('MonthlySalesSectionWrapper', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <MonthlySalesSectionWrapper data={mockChartData.monthlySales} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
