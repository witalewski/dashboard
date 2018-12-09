import React from 'react';
import styled from '@emotion/styled';
import { borderColor } from '../global/styleConstants';

const HeaderStyled = styled.header`
  width: 100%;

  padding: 24px 36px;

  background: white;
  border: 1px solid ${borderColor};

  .title {
    font-weight: normal;
    font-size: 24px;
  }
`;

export const Header = ({ title }) => (
  <HeaderStyled>
    <h1 className="title">{title}</h1>
  </HeaderStyled>
);
