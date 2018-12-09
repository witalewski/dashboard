import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { chartColors } from '../../global/styleConstants';
import { Section } from '../Section';

function reformatLabels() {
  const labels = document.querySelectorAll(
    '.most-popular-offers .recharts-pie-label-text tspan'
  );
  for (let i = 0; i < labels.length; i++) {
    labels[i].textContent = `${labels[i].textContent}%`;
  }
}

export const PaymentMethodsSectionWrapper = ({ className, data }) => {
  const sum = data.reduce((acc, { value }) => acc + value, 0);
  const percentData = data.map(({ value, label }) => ({
    name: label,
    value: Math.round((value * 100) / sum),
  }));
  return (
    <Section title="Payment methods" className={className}>
      <PieChart width={350} height={250}>
        <Pie
          data={percentData}
          cx={120}
          cy={120}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
          onAnimationEnd={reformatLabels}
        >
          {percentData.map(({ value }, index) => (
            <Cell key={value} fill={chartColors[index % chartColors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          width={200}
          align="right"
          layout="vertical"
          wrapperStyle={{ top: 80, left: 250 }}
        />
      </PieChart>
    </Section>
  );
};
