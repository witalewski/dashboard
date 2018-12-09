import React from 'react';
import styled from '@emotion/styled';
import { borderColor, sectionMargin } from '../global/styleConstants';
import { LineChartContent } from './sectionContent/LineChartContent';
import { PieChartContent } from './sectionContent/PieChartContent';
import { BarChartContent } from './sectionContent/BarChartContent';
import { MapContent } from './sectionContent/MapContent';
import { CustomContent } from './sectionContent/CustomContent';
import { getLabelMap } from '../utils/getLabelMap';

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

  .section-content {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const getSectionContent = (source, className, children) => {
  const { dataType, data } = source;
  switch (dataType) {
    case 'pie':
      return <PieChartContent className={className} data={data} />;
    case 'line':
    case 'line2':
      return <LineChartContent data={data} labelMap={getLabelMap(source)} />;
    case 'bar':
      return <BarChartContent data={data} labelMap={getLabelMap(source)} />;
    case 'map':
      return <MapContent data={data} />;
    case 'custom':
      return <CustomContent data={data} >{children}</CustomContent>;
    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
};
export const DataSection = ({ className, source, title, children }) => {
  const sectionContent = getSectionContent(source, className, children);
  return (
    <SectionStyled className={className}>
      <h2 className="title">{title}</h2>
      <div className="section-content">{sectionContent}</div>
    </SectionStyled>
  );
};
