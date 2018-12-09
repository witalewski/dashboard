import React from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import { Section } from '../Section';
import { HorizontalBar } from '../charts/HorizontalBar';

const SummaryContentStyled = styled.div`
  min-width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SummarySection = ({ title, className, data }) => (
  <Section title={title} className={className}>
    <SummaryContentStyled>
      <div className="current-month-summary__label">
        In {format(new Date(), 'MMMM')} you did
      </div>
      <div className="current-month-summary__sum">${data.revenueThisMonth}</div>
      <div className="comparison">
        <div className="comparison__label">Last month you did:</div>
        <div className="comparison__sum">${data.revenueLastMonth}</div>
      </div>
      <div className="comparison">
        <div className="comparison__label">Average monthly revenue:</div>
        <div className="comparison__sum">${data.revenueAverage}</div>
      </div>
      <HorizontalBar percent={data.revenueRate * 100} />
      <div className="percent-of-average-label">
        of your monthly average revenue
      </div>
    </SummaryContentStyled>
  </Section>
);
