import React from 'react';
import { LineChartSection } from './LineChartSection';
import { PieChartSection } from './PieChartSection';
import { BarChartSection } from './BarChartSection';
import { getLabelMap } from '../../utils/getLabelMap';

export const ChartSection = ({
  className,
  source,
  title
}) => {
  const { dataType, data } = source;

  switch (dataType) {
    case 'pie':
      return (
        <PieChartSection
          className={className}
          title={title}
          data={data}
        />
      );
    case 'line':
    case 'line2':
      return (
        <LineChartSection
          className={className}
          title={title}
          data={data}
          labelMap={getLabelMap(source)}
        />
      );
    case 'bar':
      return (
        <BarChartSection
          className={className}
          title={title}
          data={data}
          labelMap={getLabelMap(source)}
        />
      );
    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
};
