import React, { Component } from 'react';
import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { Section } from './Section';
import { SummarySectionWrapper } from './sectionWrappers/SummarySectionWrapper';
import { MonthlySalesSectionWrapper } from './sectionWrappers/MonthlySalesSectionWrapper';
import { MostPopularOffersSectionWrapper } from './sectionWrappers/MostPopularOffersSectionWrapper';
import { PaymentMethodsSectionWrapper } from './sectionWrappers/PaymentMethodsSectionWrapper';
import { DevicesSectionWrapper } from './sectionWrappers/DevicesSectionWrapper';

const MainViewStyled = styled.main`
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .summary-section-wrapper {
    flex: 1 3 200px;
  }

  .monthly-sales-section-wrapper {
    flex: 3 1 600px;
  }

  .most-popular-offers-section-wrapper,
  .payment-methods-section-wrapper,
  .devices-section-wrapper {
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
          <SummarySectionWrapper
            className="summary-section-wrapper"
            data={chartData.summaryChart.data}
          />
          <MonthlySalesSectionWrapper
            className="monthly-sales-section-wrapper"
            data={chartData.monthlySales}
          />
        </div>
        <div className="container">
          <MostPopularOffersSectionWrapper
            className="most-popular-offers-section-wrapper"
            data={chartData.mostPopular.data}
          />
          <PaymentMethodsSectionWrapper
            className="payment-methods-section-wrapper"
            data={chartData.paymentMethods.data}
          />
          <DevicesSectionWrapper
            className="devices-section-wrapper"
            data={chartData.devices.data}
          />
        </div>
        <Section title="Revenue" className="revenue-section-wrapper">
          [Section Content]
        </Section>
        <Section title="Geography" className="geography-section-wrapper">
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
