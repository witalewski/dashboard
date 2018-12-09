import React, { Component } from 'react';
import styled from '@emotion/styled';
import { sectionMargin } from '../global/styleConstants';
import { Section } from './Section';

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
  render() {
    return (
      <MainViewStyled>
        <div className="container">
          <Section title="Summary" className="summary-section">
            [Section Content]
          </Section>
          <Section title="Monthly Sales" className="monthly-sales-section">
            [Section Content]
          </Section>
        </div>
        <div className="container">
          <Section
            title="Most popular offers"
            className="most-popular-offers-section"
          >
            [Section Content]
          </Section>
          <Section title="Payment methods" className="payment-methods-section">
            [Section Content]
          </Section>
          <Section title="Devices" className="devices-section">
            [Section Content]
          </Section>
        </div>
        <Section title="Revenue" className="revenue-section">
            [Section Content]
          </Section>
          <Section title="Geography" className="geography-section">
            [Section Content]
          </Section>
      </MainViewStyled>
    );
  }
}
