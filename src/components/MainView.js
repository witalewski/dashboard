import React, { Component } from 'react';
import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { Section } from './Section';
import { ChartSection } from './sections/ChartSection';
import { SummarySection } from './sections/SummarySection';

const MainViewStyled = styled.main`
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .summary-section {
    flex: 1 3 200px;
  }

  .monthly-sales-section {
    flex: 3 1 600px;
  }

  .most-popular-offers-section,
  .payment-methods-section,
  .devices-section {
    flex: 1 1 200px;
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
          <SummarySection
            className="summary-section"
            title="Summary"
            data={chartData.summaryChart.data}
          />
          <ChartSection
            title="Monthly Sales"
            className="monthly-sales-section"
            source={chartData.monthlySales}
            dataTransform={e => e}
          />
        </div>
        <div className="container">
          <ChartSection
            title="Most Popular Offers"
            className="most-popular-offers-section"
            source={chartData.mostPopular}
            dataTransform={e => e}
          />
          <ChartSection
            title="Payment Methods"
            className="payment-methods-section"
            source={chartData.paymentMethods}
            dataTransform={e => e}
          />
          <ChartSection
            title="Devices"
            className="devices-section"
            source={chartData.devices}
            dataTransform={e => e}
          />
        </div>
        <ChartSection
          title="Revenue This Month vs Revenue Previous Month"
          className="revenue-section"
          source={chartData.revenueMonthToMonth}
          dataTransform={({ x, y, y2 }) => ({
            x,
            'This month': y2,
            'Last month': y,
          })}
        />
        <Section title="Geography" className="geography-section">
          [Section Content]
        </Section>
      </MainViewStyled>
    ) : null;
  }
}

export default inject(({ appState }) => ({
  chartData: appState.chartData,
  loadMockChartData: appState.loadMockChartData,
}))(observer(MainView));
