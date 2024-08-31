import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchGrievanceTrends } from '../../services/api';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement);


const GrievanceTrendsChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGrievanceTrends();
      setChartData({
        labels: response.data.labels,
        datasets: [
          {
            label: 'Grievances Over Time',
            data: response.data.data,
            fill: false,
            borderColor: '#1976d2',
            backgroundColor: '#1976d2',
          },
        ],
      });
    };

    fetchData();
  }, []);

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

  return <Line data={chartData} options={options} />;
};

export default GrievanceTrendsChart;