import React from 'react';
import styled from '@emotion/styled';
import {
  chartBackground,
  chartColors,
  textColor,
} from '../../global/styleConstants';

const StyledHorizontalBar = styled.div`
  position: relative;

  width: 100%;
  height: 32px;

  margin: 8px;

  background: ${chartBackground};

  .bar {
    height: 100%;
    background: ${chartColors[0]};
  }

  .label {
    position: absolute;
    top: 50%;
    font-size: 12px;
    color: white;
    transform: translate(calc(-100% - 12px), -50%);
  }

  .label--outside {
    color: ${textColor};
    transform: translate(8px, -50%);
  }
`;

export const HorizontalBar = ({ percent }) => (
  <StyledHorizontalBar>
    <div className="bar" style={{ width: `${percent}%` }} />
    <div
      className={`label ${percent < 5 && 'label--outside'}`}
      style={{ left: `${percent}%` }}
    >
      {percent}%
    </div>
  </StyledHorizontalBar>
);
