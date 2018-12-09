import React from 'react';
import styled from '@emotion/styled';
import { Section } from '../Section';

const StyledMonthlySalesSectionWrapper = styled.div`
  min-width: 400px;
  .section-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MonthlySalesSectionWrapper = ({ className, data }) => (
  <StyledMonthlySalesSectionWrapper className={className}>
    <Section title="Monthly Sales" className="monthly-sales">
      <div className="section-content">SECTION CONTENT</div>
    </Section>
  </StyledMonthlySalesSectionWrapper>
);
