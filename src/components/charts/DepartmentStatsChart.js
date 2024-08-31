import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement);


const DepartmentStatsChart = () => {
  const data = {
    labels: ['HR', 'IT', 'Finance', 'Sales', 'Marketing'],
    datasets: [
      {
        label: 'Solved',
        data: [12, 19, 10, 5, 7],
        backgroundColor: '#1976d2',
      },
      {
        label: 'Unsolved',
        data: [3, 5, 2, 4, 1],
        backgroundColor: '#ac3b61',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: '#444444',
        },
      },
      y: {
        grid: {
          color: '#444444',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DepartmentStatsChart;