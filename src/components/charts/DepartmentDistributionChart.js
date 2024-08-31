import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement);


const DepartmentDistributionChart = () => {
  const data = {
    labels: ['HR', 'IT', 'Finance', 'Sales', 'Marketing'],
    datasets: [
      {
        label: 'Grievances Distribution',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#1976d2', '#ac3b61', '#ffd700', '#00c853', '#ff6d00'],
        borderColor: ['#1976d2', '#ac3b61', '#ffd700', '#00c853', '#ff6d00'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default DepartmentDistributionChart;