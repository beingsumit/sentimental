import React from 'react';
import InputForm from './inputForm';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);



const ChartAnalysis1 = (props) => {
  const chartData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: [props.data.positive, props.data.negative, props.data.neutral],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };
  return (
    <div
      className="graph"
      style={{ width: "300px", margin: "auto", padding: "50px" }}
    >
      <Doughnut data={chartData} />
    </div>
  );
};

export default ChartAnalysis1;
