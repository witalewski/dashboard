import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import mockChartData from '../fixtures/mockChartData.json';
import { MainView } from './MainView';

describe('MainView', () => {
  it('matches snapshot with mock data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MainView chartData={mockChartData} loadMockChartData={() => {}} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('matches snapshot out data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MainView loadMockChartData={() => {}} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
