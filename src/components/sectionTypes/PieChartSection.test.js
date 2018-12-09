import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { PieChartSection } from './PieChartSection';

describe('PieChartSection', () => {
  it('matches snapshot with mock devices data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <PieChartSection title="Devices" data={mockChartData.devices.data} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('matches snapshot with mock most popular options data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <PieChartSection
        title="Most Popular"
        data={mockChartData.mostPopular.data}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('matches snapshot with mock payment methods data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <PieChartSection
        title="Payment methods"
        data={mockChartData.paymentMethods.data}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
