import React from 'react';
import { LineChartSection } from './LineChartSection';
import { PieChartSection } from './PieChartSection';
import { BarChartSection } from './BarChartSection';
import { getLabelMapForCombinedChart } from '../../utils/getLabelMapForCombinedChart';

export const ChartSection = ({
  className,
  source,
  title,
  dataTransform = e => e,
}) => {
  const { dataType, data } = source;
  const processedData = data.map(dataTransform);

  switch (dataType) {
    case 'pie':
      return (
        <PieChartSection
          className={className}
          title={title}
          data={processedData}
        />
      );
    case 'line':
    case 'line2':
      return (
        <LineChartSection
          className={className}
          title={title}
          data={processedData}
        />
      );
    case 'bar':
      return (
        <BarChartSection
          className={className}
          title={title}
          data={processedData}
          labelMap={getLabelMapForCombinedChart(source)}
        />
      );
    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
};
