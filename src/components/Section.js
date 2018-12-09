import React from 'react';
import styled from '@emotion/styled';
import { borderColor } from '../global/styleConstants';

const SectionStyled = styled.section`
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

export const Section = ({ title, children }) => (
  <SectionStyled>
    <h2 className="title">{title}</h2>
    {children}
  </SectionStyled>
);
