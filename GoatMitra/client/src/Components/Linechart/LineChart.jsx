// VisitLineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './LineChart.css';

const VisitLineChart = ({ visitData }) => {
  // Extracting the visit dates and heights
  const labels = visitData.map(visit => new Date(visit.visitDate).toLocaleDateString());
  const heights = visitData.map(visit => visit.height);

  const data = {
    labels,
    datasets: [
      {
        label: 'Height',
        data: heights,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Goat Height Over Time',
      },
    },
  };

  return (
    <div className='linechart'>
      <Line data={data} options={options} />
    </div>
  );
};

export default VisitLineChart;
