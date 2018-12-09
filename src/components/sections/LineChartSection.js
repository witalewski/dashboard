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

export const LineChartSection = ({ className, data, title }) => {
  return (
    <Section title={title} className={className}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey={Object.keys(data[0])[0]} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {Object.keys(data[0])
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
