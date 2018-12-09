import React from 'react';
import styled from '@emotion/styled';

const CustomContentStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 200px;
`;

export const CustomContent = ({ children }) => (
  <CustomContentStyled>{children}</CustomContentStyled>
);
