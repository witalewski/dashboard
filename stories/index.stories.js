import React from 'react';
import '../src/index.css';

import { storiesOf } from '@storybook/react';

import mockChartData from '../src/fixtures/mockChartData.json';

import { Header } from '../src/components/Header';
import { Section } from '../src/components/Section';
import { MainView } from '../src/components/MainView';
import { HorizontalBar } from '../src/components/charts/HorizontalBar';
import { PieChartSection } from '../src/components/sections/PieChartSection';
import { LineChartSection } from '../src/components/sections/LineChartSection';

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

storiesOf('LineChartSection', module).add('for revenue month-to-month', () => (
  <LineChartSection
    title="Revenue This Month vs Revenue Previous Month"
    className="revenue-section-wrapper"
    data={mockChartData.revenueMonthToMonth.data}
    dataTransform={({ x, y, y2 }) => ({
      x,
      'This month': y2,
      'Last month': y,
    })}
  />
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
