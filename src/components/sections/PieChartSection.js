import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { chartColors } from '../../global/styleConstants';
import { Section } from '../Section';

const reformatLabels = className => () => {
  const labels = document.querySelectorAll(
    `.${className} .recharts-pie-label-text tspan`
  );
  for (let i = 0; i < labels.length; i++) {
    labels[i].textContent = `${labels[i].textContent}%`;
  }
};

export const PieChartSection = ({ className, data, title }) => {
  const sum = data.reduce((acc, { value }) => acc + value, 0);
  const percentData = data.map(({ value, label }) => ({
    name: label,
    value: Math.round((value * 100) / sum),
  }));
  return (
    <Section title={title} className={className}>
      <PieChart width={350} height={250}>
        <Pie
          data={percentData}
          cx={120}
          cy={120}
          innerRadius={40}
          outerRadius={80}
          dataKey="value"
          label
          onAnimationEnd={reformatLabels(className)}
        >
          {percentData.map(({ value }, i) => (
            <Cell key={value} fill={chartColors[i % chartColors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          width={200}
          align="right"
          layout="vertical"
          wrapperStyle={{ top: 80, left: 260 }}
        />
      </PieChart>
    </Section>
  );
};
