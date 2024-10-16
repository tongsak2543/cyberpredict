import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import servicesurl from '../../config'; // Assuming servicesurl is a function in config that returns the base URL

ChartJS.register(ArcElement, Tooltip, Legend);

const Pie2024 = ({ selectedContent }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Data',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  const url = servicesurl(); // Base URL from config

  useEffect(() => {
    if (selectedContent) {
      axios
        .get(`${url}/pie/${selectedContent}`)
        .then((response) => {
          console.log('Data received:', response.data);

          const rawData = response.data[0]; // Assuming the data is an array of one object
          const labels = ['ด้านการเงิน', 'ด้านการกำกับดูแล', 'ด้านการดำเนินการ', 'ด้านบุคลากร', 'ด้านชื่อเสียง']; // Corresponding labels for the data
          const values = [rawData.p_fi, rawData.p_go, rawData.p_op, rawData.p_pe, rawData.p_re]; // Extracting values

          setData({
            labels: labels,
            datasets: [
              {
                label: 'Data',
                data: values,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          });
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [selectedContent, url]); // Added `url` in the dependency array in case it changes

  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <h2>ทำนายสถิติการโจมตีทางไซเบอร์</h2>
      <div style={{ width: '50%', height: '50%', margin: '0 auto' }}>
        <Pie data={data} style={{ width: '50%', height: '50%' }} />
      </div>
    </div>
  );
};

export default Pie2024;
