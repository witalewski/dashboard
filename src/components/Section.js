import React from 'react';
import styled from '@emotion/styled';
import { borderColor, sectionMargin } from '../global/styleConstants';

const SectionStyled = styled.section`
  margin: ${sectionMargin}px;
  padding: 32px;

  background: white;
  border: 1px solid ${borderColor};
  border-radius: 5px;

  font-size: 14px;

  .title {
    font-size: 16px;
    text-transform: uppercase;
  }
`;

export const Section = ({ className, title, children }) => (
  <SectionStyled className={className}>
    <h2 className="title">{title}</h2>
    {children}
  </SectionStyled>
);
