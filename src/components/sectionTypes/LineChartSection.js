import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { chartColors } from '../../global/styleConstants';
import { Section } from '../Section';

export const LineChartSection = ({ className, data, title, dataTransform }) => {
  const processedData = data.map(dataTransform);
  return (
    <Section title={title} className={className}>
      <LineChart
        width={600}
        height={300}
        data={processedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {Object.keys(processedData[0])
          .slice(1)
          .map((key, i) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={chartColors[i % chartColors.length]}
            />
          ))}
      </LineChart>
    </Section>
  );
};
