import React from 'react';
import { LineChartSection } from './LineChartSection';
import { PieChartSection } from './PieChartSection';
import { BarChartSection } from './BarChartSection';
import { getLabelMapForCombinedChart } from '../../utils/getLabelMapForCombinedChart';

export const ChartSection = ({
  className,
  source,
  title,
  labelMap
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
          labelMap={labelMap}
        />
      );
    case 'bar':
      return (
        <BarChartSection
          className={className}
          title={title}
          data={data}
          labelMap={getLabelMapForCombinedChart(source)}
        />
      );
    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
};
