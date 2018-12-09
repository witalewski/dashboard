import { AppState } from './AppState';
import mockChartData from './fixtures/mockChartData.json';

describe('AppState', () => {
  let appState;

  beforeEach(() => {
    appState = new AppState();
  });

  it('sets chart data', () => {
    const data = { foo: 'bar'};
    appState.setChartData(data);
    expect(appState.chartData).toEqual(data);
  });

  it('loads mock data', () => {
    appState.loadMockChartData();
    expect(appState.chartData).toEqual(mockChartData);
  });
});
