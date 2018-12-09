import React from 'react';
import '../src/index.css';

import { storiesOf } from '@storybook/react';

import mockChartData from '../src/fixtures/mockChartData.json';
import { getLabelMapForCombinedChart } from '../src/utils/getLabelMapForCombinedChart';

import { Header } from '../src/components/Header';
import { Section } from '../src/components/Section';
import { MainView } from '../src/components/MainView';
import { HorizontalBar } from '../src/components/charts/HorizontalBar';
import { PieChartSection } from '../src/components/sections/PieChartSection';
import { LineChartSection } from '../src/components/sections/LineChartSection';
import { BarChartSection } from '../src/components/sections/BarChartSection';
import { ChartSection } from '../src/components/sections/ChartSection';

storiesOf('MainView', module).add('with mock data', () => (
  <MainView chartData={mockChartData} loadMockChartData={() => {}} />
));

storiesOf('Header', module).add('for Dashboard', () => (
  <Header title="Dashboard" />
));

storiesOf('Section', module).add('Sample content', () => (
  <Section title="Sample">
    <div>[Section content]</div>
  </Section>
));

storiesOf('ChartSection', module).add('with various types', () => (
  <div>
    <h2>dataType: 'line2'</h2>
  <ChartSection
    title="Revenue This Month vs Revenue Previous Month"
    source={mockChartData.revenueMonthToMonth}
    dataTransform={({ x, y, y2 }) => ({
      x,
      'This month': y2,
      'Last month': y,
    })}
  />
  <h2>dataType: 'pie'</h2>
  <ChartSection
    title="Payment methods"
    source={mockChartData.paymentMethods}
    dataTransform={e => e}
  />
  <h2>dataType: 'bar'</h2>
  <ChartSection
    title="Monthly Sales"
    source={mockChartData.monthlySales}
    dataTransform={e => e}
  />
  </div>
));


storiesOf('PieChartSection', module).add('for various datasets', () => (
  <div>
    <PieChartSection title="Devices" data={mockChartData.devices.data} />
    <PieChartSection
      title="Most popular"
      data={mockChartData.mostPopular.data}
    />
    <PieChartSection
      title="Payment methods"
      data={mockChartData.paymentMethods.data}
    />
  </div>
));
storiesOf('PieChartSection', module).add('for various datasets', () => (
  <div>
    <PieChartSection title="Devices" data={mockChartData.devices.data} />
    <PieChartSection
      title="Most popular"
      data={mockChartData.mostPopular.data}
    />
    <PieChartSection
      title="Payment methods"
      data={mockChartData.paymentMethods.data}
    />
  </div>
));

storiesOf('LineChartSection', module).add(
  'for revenue (data not transformed)',
  () => (
    <LineChartSection
      title="Revenue This Month vs Revenue Previous Month"
      data={mockChartData.revenueMonthToMonth.data}
    />
  )
);

storiesOf('BarChartSection', module).add(
  'for monthly sales (data not transformed)',
  () => (
    <BarChartSection
      title="Monthly Sales"
      data={mockChartData.monthlySales.data}
      dataTransform={e => e}
      labelMap={getLabelMapForCombinedChart(mockChartData.monthlySales)}
    />
  )
);

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
