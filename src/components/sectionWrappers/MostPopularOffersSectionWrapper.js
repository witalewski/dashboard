import React from 'react';
import styled from '@emotion/styled';
import { Section } from '../Section';

const StyledMostPopularOffersSectionWrapper = styled.div`
  min-width: 400px;
  .section-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MostPopularOffersSectionWrapper = ({ className, data }) => (
  <StyledMostPopularOffersSectionWrapper className={className}>
    <Section title="Most popular offers" className="most-popular-offers">
      <div className="section-content">SECTION CONTENT</div>
    </Section>
  </StyledMostPopularOffersSectionWrapper>
);
