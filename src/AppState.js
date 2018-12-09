import { observable, action } from 'mobx';
import mockChartData from './fixtures/mockChartData.json';

class AppState {
  @observable chartData;

  @action setChartData = chartData => {
    this.chartData = chartData;
  };

  @action loadMockChartData = () => {
    this.setChartData(mockChartData);
  };
}

export { AppState };
