import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const Pie2024 = ({ selectedContent }) => { // รับ selectedContent จาก props
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

  useEffect(() => {
    if (selectedContent) { // ตรวจสอบว่ามี selectedContent ก่อนเรียก API
      axios
        .get(`http://localhost:3001/pie/${selectedContent}`) // ใช้ selectedContent ในการเรียก API
        .then((response) => {
          console.log('Data received:', response.data);

          // แปลงข้อมูลที่ได้รับ
          const labels = response.data.map((item) => item.type);
          const values = response.data.map((item) => item.total);

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
  }, [selectedContent]); // เรียก useEffect เมื่อ selectedContent เปลี่ยน

  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <h2>ทำนายสถิติการโจมตีทางไซเบอร์</h2>
      <div style={{ width: '60%', height: '60%', margin: '0 auto' }}>
        <Pie data={data} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default Pie2024;
