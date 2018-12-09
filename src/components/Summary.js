import React from 'react';
import styled from '@emotion/styled';

import { format } from 'date-fns';
import { HorizontalBar } from './charts/HorizontalBar';

const StyledSummary = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .main-label {
    font-weight: bold;
  }

  .main-sum {
    font-weight: bold;
    font-size: 36px;
  }

  .container--stretch {
    align-self: stretch;
  }

  .comparison {
    display: flex;
    justify-content: space-between;
  }

  .comparison__sum {
    font-weight: bold;
    font-size: 24px;
  }

  .percent-of-average-label {
    text-align: center;
    padding-bottom: 24px;
  }
`;

export const Summary = ({ data }) => (
  <StyledSummary>
    <div>
      <div className="main-label">In {format(new Date(), 'MMMM')} you did</div>
      <div className="main-sum">${data.revenueThisMonth}</div>
    </div>

    <div className="container--stretch">
      <div className="comparison">
        <div className="comparison__label">Last month you did:</div>
        <div className="comparison__sum">${data.revenueLastMonth}</div>
      </div>
      <div className="comparison">
        <div className="comparison__label">Average monthly revenue:</div>
        <div className="comparison__sum">${data.revenueAverage}</div>
      </div>
    </div>

    <div className="container--stretch">
      <HorizontalBar percent={data.revenueRate * 100} />
      <div className="percent-of-average-label">
        of your monthly average revenue
      </div>
    </div>
  </StyledSummary>
);
