import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { MostPopularOffersSectionWrapper } from './MostPopularOffersSectionWrapper';

describe('MostPopularOffersSectionWrapper', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <MostPopularOffersSectionWrapper data={mockChartData.mostPopuar.data} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
