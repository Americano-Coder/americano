import React from 'react';
import Chart from 'react-google-charts';

const IncomeOutcome = ({ data }) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        title: 'Income vs Expense in 2022',
      }}
    />
  );
};

export default IncomeOutcome;
