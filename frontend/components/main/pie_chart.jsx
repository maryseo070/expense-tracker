import React from 'react';
import PieChart from 'react-simple-pie-chart';

const ExpensesPieChart = () => {
  return (
    <PieChart
      slices={[
        {
          color: '#f00',
          value: 10,
        },
        {
          color: '#0f0',
          value: 20,
        },
      ]}
    />
);
};

export default ExpensesPieChart;
