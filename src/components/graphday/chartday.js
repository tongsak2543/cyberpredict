import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from 'axios';
import formattedDate from '../function/time'; // นำฟังก์ชันเข้ามาใช้งาน
import servicesurl from '../../config'; 

function Chartday() {
  const [data, setData] = useState([]); // ใช้ useState เพื่อเก็บข้อมูลกราฟ
  const date = formattedDate(); // เรียกฟังก์ชันเพื่อให้ได้วันที่ปัจจุบัน
  const url = servicesurl();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ดึงข้อมูลจาก API แรก
        const response1 = await axios.get(`${url}/redday/${date}`); // ส่งวันที่ไปยัง API แรก
        const apiData1 = response1.data; // ดึงข้อมูลจาก API แรก
        
        // ดึงข้อมูลจาก API ที่สอง
        const response2 = await axios.get(`${url}/greenday/${date}`); // ส่งวันที่ไปยัง API ที่สอง
        const apiData2 = response2.data; // ดึงข้อมูลจาก API ที่สอง
        
        // แปลงข้อมูลจาก API แรก
        const chartData1 = Object.keys(apiData1[0]).map((key) => ({
          hour: key.replace('h', '')+'hr', // แปลง 'h1' เป็น '1'
          Predict: apiData1[0][key], // ค่าในกราฟ API แรก
        }));

        // แปลงข้อมูลจาก API ที่สอง
        const chartData2 = Object.keys(apiData2[0]).map((key) => ({
          hour: key.replace('h', '')+'hr', // แปลง 'h1' เป็น '1'
          Real: apiData2[0][key], // ค่าในกราฟ API ที่สอง
        }));

        // รวมข้อมูลเข้าด้วยกัน
        const combinedData = chartData1.map((item, index) => ({
          hour: item.hour,
          Predict: item.Predict,
          Real: chartData2[index]?.Real || 0, // ใช้ค่า 0 ถ้าไม่มีข้อมูล
        }));

        setData(combinedData); // เก็บข้อมูลที่ได้ลงใน state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // เรียกใช้งานฟังก์ชัน fetchData
  }, [date]); // จะเรียกใช้เมื่อวันที่เปลี่ยนไป

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Predict" stroke="#fe1f95" /> {/* เส้นกราฟสีชมพู */}
        <Line type="monotone" dataKey="Real" stroke="#37d87b" /> {/* เส้นกราฟสีเขียว */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chartday;
