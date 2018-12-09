import React from 'react';
import '../src/index.css';

import { storiesOf } from '@storybook/react';

import mockChartData from '../src/fixtures/mockChartData.json';
import { getLabelMap } from '../src/utils/getLabelMap';

import { Header } from '../src/components/Header';
import { MainView } from '../src/components/MainView';
import { HorizontalBar } from '../src/components/charts/HorizontalBar';
import { PieChartContent } from '../src/components/sectionContent/PieChartContent';
import { LineChartContent } from '../src/components/sectionContent/LineChartContent';
import { BarChartContent } from '../src/components/sectionContent/BarChartContent';
import { DataSection } from '../src/components/DataSection';
import { CustomContent } from '../src/components/sectionContent/CustomContent';

storiesOf('MainView', module).add('with mock data', () => (
  <MainView chartData={mockChartData} loadMockChartData={() => {}} />
));

storiesOf('Header', module).add('for Dashboard', () => (
  <Header title="Dashboard" />
));

storiesOf('DataSection', module).add('with various types', () => (
  <div>
    <h2>dataType: 'line2'</h2>
    <DataSection
      title="Revenue This Month vs Revenue Previous Month"
      source={mockChartData.revenueMonthToMonth}
    />
    <h2>dataType: 'pie'</h2>
    <DataSection
      title="Payment methods"
      source={mockChartData.paymentMethods}
    />
    <h2>dataType: 'bar'</h2>
    <DataSection title="Monthly Sales" source={mockChartData.monthlySales} />
  </div>
));

storiesOf('PieChartContent', module).add('for various datasets', () => (
  <div>
    <PieChartContent title="Devices" data={mockChartData.devices.data} />
    <PieChartContent
      title="Most popular"
      data={mockChartData.mostPopular.data}
    />
    <PieChartContent
      title="Payment methods"
      data={mockChartData.paymentMethods.data}
    />
  </div>
));

storiesOf('LineChartContent', module).add('for revenue', () => (
  <LineChartContent
    title="Revenue This Month vs Revenue Previous Month"
    data={mockChartData.revenueMonthToMonth.data}
    labelMap={getLabelMap(mockChartData.revenueMonthToMonth)}
  />
));

storiesOf('BarChartContent', module).add(
  'for monthly sales (data not transformed)',
  () => (
    <BarChartContent
      title="Monthly Sales"
      data={mockChartData.monthlySales.data}
      labelMap={getLabelMap(mockChartData.monthlySales)}
    />
  )
);

storiesOf('CustomContent', module).add('for mock data', () => (
  <CustomContent title="Summary" data={mockChartData.summaryChart.data} />
));

storiesOf('HorizontalBar', module).add('at various values', () => (
  <div>
    <HorizontalBar percent={0} />
    <HorizontalBar percent={2} />
    <HorizontalBar percent={5} />
    <HorizontalBar percent={10} />
    <HorizontalBar percent={50} />
    <HorizontalBar percent={75} />
    <HorizontalBar percent={100} />
  </div>
));
