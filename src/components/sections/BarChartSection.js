import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { chartColors } from '../../global/styleConstants';
import { Section } from '../Section';
import { mapDataSetLabels } from '../../utils/mapDataSetLabels';
import { getLowerRangeSeriesKeys } from '../../utils/getLowerRangeSeriesKeys';

export const BarChartSection = ({ className, data, title, labelMap }) => {
  const processedData = mapDataSetLabels(labelMap, data);
  const lowerRangeSeriesKeys = getLowerRangeSeriesKeys(labelMap, processedData);
  return (
    <Section title={title} className={className}>
      <ComposedChart
        width={600}
        height={400}
        data={processedData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey={Object.keys(data[0])[0]} />
        <YAxis yAxisId="lower" />
        <YAxis yAxisId="upper" orientation="right" />
        <Tooltip />
        <Legend />
        {Object.keys(data[0])
          .filter(key => key.match(/bar/))
          .map((key, i) => (
            <Bar
              key={labelMap[key]}
              dataKey={labelMap[key]}
              barSize={20}
              fill={chartColors[i % chartColors.length]}
              yAxisId={
                lowerRangeSeriesKeys.indexOf(labelMap[key]) > -1
                  ? 'lower'
                  : 'upper'
              }
            />
          ))}
        {Object.keys(data[0])
          .filter(key => key.match(/line/))
          .map((key, i) => (
            <Line
              key={labelMap[key]}
              type="monotone"
              dataKey={labelMap[key]}
              stroke={chartColors[i % chartColors.length]}
              yAxisId={
                lowerRangeSeriesKeys.indexOf(labelMap[key]) > -1
                  ? 'lower'
                  : 'upper'
              }
            />
          ))}
      </ComposedChart>
    </Section>
  );
};
