import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../fixtures/mockChartData.json';
import { DataSection } from './DataSection';
import { Summary } from './Summary';

describe('DataSection', () => {
  it('matches snapshot with mock data of line2 type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <DataSection
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
      <DataSection
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
      <DataSection title="Monthly Sales" source={mockChartData.monthlySales} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('matches snapshot with mock data of map type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <DataSection title="Map" source={mockChartData.mapChart} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('matches snapshot with mock data of custom type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <DataSection title="Map" source={mockChartData.summaryChart}>
        <Summary data={mockChartData.summaryChart.data} />
      </DataSection>
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
