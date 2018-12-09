import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../../fixtures/mockChartData.json';
import { ChartSection } from './ChartSection';

describe('BarChartSection', () => {
  it('matches snapshot with mock data of line2 type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ChartSection
        title="Revenue This Month vs Revenue Previous Month"
        source={mockChartData.revenueMonthToMonth}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot with mock data of pie type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ChartSection
        title="Payment methods"
        source={mockChartData.paymentMethods}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot with mock data of bar type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ChartSection title="Monthly Sales" source={mockChartData.monthlySales} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
