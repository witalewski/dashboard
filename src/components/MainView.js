import React, { Component } from 'react';
import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { sectionMargin } from '../global/styleConstants';
import { DataSection } from './DataSection';

const MainViewStyled = styled.main`
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .summary-section {
    flex: 1 3 calc(25% - ${2 * sectionMargin}px);
  }

  .monthly-sales-section {
    flex: 3 1 calc(75% - ${2 * sectionMargin}px);
  }

  .most-popular-offers-section,
  .payment-methods-section,
  .devices-section {
    flex: 1 1 calc(33% - ${2 * sectionMargin}px);
  }
`;

export class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = { initialized: false };
  }

  componentDidMount() {
    if (!this.state.initialized) {
      this.props.loadMockChartData();
      this.setState({ initialized: true });
    }
  }

  render() {
    const { chartData } = this.props;
    return chartData ? (
      <MainViewStyled>
        <div className="container">
          <DataSection
            className="summary-section"
            title="Summary"
            source={chartData.summaryChart}
          />
          <DataSection
            title="Monthly Sales"
            className="monthly-sales-section"
            source={chartData.monthlySales}
          />
        </div>
        <div className="container">
          <DataSection
            title="Most Popular Offers"
            className="most-popular-offers-section"
            source={chartData.mostPopular}
          />
          <DataSection
            title="Payment Methods"
            className="payment-methods-section"
            source={chartData.paymentMethods}
          />
          <DataSection
            title="Devices"
            className="devices-section"
            source={chartData.devices}
          />
        </div>
        <DataSection
          title="Revenue This Month vs Revenue Previous Month"
          className="revenue-section"
          source={chartData.revenueMonthToMonth}
        />
        <DataSection
          title="Geography"
          className="geography-section"
          source={chartData.mapChart}
        />
      </MainViewStyled>
    ) : null;
  }
}

export default inject(({ appState }) => ({
  chartData: appState.chartData,
  loadMockChartData: appState.loadMockChartData,
}))(observer(MainView));
