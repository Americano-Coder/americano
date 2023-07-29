import React from 'react';
import Chart from 'react-google-charts';

const PredictExpense = ({ data }) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        title: 'Expense Prediction',
      }}
    />
  );
};

export default PredictExpense;
