import React from 'react';
import '../src/index.css';

import { storiesOf } from '@storybook/react';

import mockChartData from '../src/fixtures/mockChartData.json';

import { Header } from '../src/components/Header';
import { Section } from '../src/components/Section';
import { MainView } from '../src/components/MainView';
import { HorizontalBar } from '../src/components/charts/HorizontalBar';

storiesOf('Header', module).add('for Dashboard', () => (
  <Header title="Dashboard" />
));
storiesOf('Section', module).add('Sample content', () => (
  <Section title="Sample">
    <div>[Section content]</div>
  </Section>
));
storiesOf('MainView', module).add('with mock data', () => (
  <MainView chartData={mockChartData} loadMockChartData={() => {}} />
));
storiesOf('HorizontalBar', module).add('at various values', () => (
  <div>
    <HorizontalBar percent={0}/>
    <HorizontalBar percent={2}/>
    <HorizontalBar percent={5}/>
    <HorizontalBar percent={10}/>
    <HorizontalBar percent={50}/>
    <HorizontalBar percent={75}/>
    <HorizontalBar percent={100}/>
  </div>
));
