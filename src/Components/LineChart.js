import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
const { faker } = require('@faker-js/faker');

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// // export const options = {
// //   responsive: true,
// //   plugins: {
// //     legend: {
// //       position: 'top' as const,
// //     },
// //     title: {
// //       display: true,
// //       text: 'Chart.js Line Chart',
// //     },
// //   },
// // };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Comments',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function LineChart(props) {
//   return <Line  data={data} />;
// }






const LineChart = (props) => {
  
  
  // console.log(typeof(props.data.count_by_month));
  // console.log(props.data.count_by_month["04"])
  let cbm=[];
  cbm.push(props.data.count_by_month["01"])
  cbm.push(props.data.count_by_month["02"])
  cbm.push(props.data.count_by_month["03"])
  cbm.push(props.data.count_by_month["04"])
  cbm.push(props.data.count_by_month["05"])
  cbm.push(props.data.count_by_month["06"])
  cbm.push(props.data.count_by_month["07"])
  cbm.push(props.data.count_by_month["08"])
  cbm.push(props.data.count_by_month["09"])
  cbm.push(props.data.count_by_month["10"])
  cbm.push(props.data.count_by_month["11"])
  cbm.push(props.data.count_by_month["12"])
  console.log(cbm)
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  const data = {
  labels,
  datasets: [
    {
      label: 'Comments',
      data: cbm,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return (
    <div
    className="graph"
    style={{ width: "600px", margin: "auto", padding: "50px" }}
  >
    <Line data={data} />
  </div>
  );
};

export default LineChart;
