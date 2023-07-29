import React from 'react';
import Chart from 'react-google-charts';

const CategoryAmount = ({ data }) => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        title: 'Expenses by Category',
      }}
    />
  );
};

export default CategoryAmount;
