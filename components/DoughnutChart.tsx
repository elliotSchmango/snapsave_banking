"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 200, 3000],
        backgroundColor: ['#000FFF', '#234567', '#FF0000']
      }
    ],
    labels: ['Bank of America', 'Wells Fargo', 'Capital One']
  }

  return <Doughnut 
    data={data} 
    options={{
      responsive: true,
      maintainAspectRatio: false,

      cutout: '55%',
      plugins: {
        legend: {
          display: false,
        }
      }
    }}
  />
}

export default DoughnutChart