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
import { mapDataSetLabels } from '../../utils/mapDataSetLabels';

export const LineChartContent = ({ data, labelMap }) => {
  const processedData = mapDataSetLabels(labelMap, data);
  return (
    <LineChart
      width={600}
      height={300}
      data={processedData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey={Object.keys(data[0])[0]} />
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
  );
};
