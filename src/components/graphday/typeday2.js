import React, { useEffect, useState } from 'react';
import {getNextDatePlusTwoDays} from '../function/timenextday';
import axios from 'axios';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell } from 'recharts';
import servicesurl from '../../config';

const url = servicesurl();
console.log(getNextDatePlusTwoDays());



// รายการคีย์ทั้งหมดที่ต้องการแสดง
const allKeys = [
  "Probe", "Trojan", "Bitcoin", "U2R", "Web Shell", "Botnet", 
  "Brute Force", "Injection", "Dropper", "Ransomware", 
  "R2L", "Worm", "DDoS_DoS", "Man in the Middle Attacks", 
  "Data Leak", "Phishing", "Website Defacement"
];


// ฟังก์ชันกำหนดสีตามประเภทการโจมตี
const getColor = (key) => {
  const colors = {
    "Probe": "#ffa6fa",//ชมพู
    "Trojan": "#e77c7c",//เเดง
    "Bitcoin": "#fff0a6",//เหลืองอ่อน 
    "U2R": "#ffb8a6",//ส้ม
    "Web Shell": "#009795",//เขียว
    "Botnet": "#0fcf86",//  เขียวอ่อน
    "Brute Force": "#9ffeff",//ฟ้า
    "Injection": "#c8ff9f",// เขียวอ่อน       
    "Dropper": "#9fb3ff",//   ฟ้าอ่อน                
    "Ransomware": "#ff9feb",// ชมพูอ่อน 
    "R2L": "#4c53e0",// ฟ้า
    "Worm": "#b7c4cf",// ฟ้าอ่อน
    "DDoS_DoS": "#466f75", // น้ำเงิน                    
    "Man in the Middle Attacks": "#68a466",//เขียวอ่อน
    "Data Leak": "#a49c66",//เหลือง
    "Phishing": "#bdfffd",//      ฟ้าอ่อน
    "Website Defacement": "#bde0ff",// ฟ้าอ่อน
  };
  return colors[key] || "#8884d8"; // ถ้าไม่มีค่าสี ให้ใช้สีเริ่มต้น
};

function Day2() {
  const [apiData, setApiData] = useState([]);
  const nextDate = getNextDatePlusTwoDays();
  

  useEffect(() => {
    // ดึงข้อมูลจาก API โดยใช้วันที่ถัดไป
    axios.get(`${url}/typeday/${nextDate}`)
      .then(response => {
        const rawData = response.data[0]; // ข้อมูลใหม่ที่ได้จาก API
        // แปลงข้อมูลให้เป็น array ที่ประกอบด้วย {name: 'ประเภทการโจมตี', value: จำนวน}
        const formattedData = allKeys.map(key => ({
          name: key,
          Value: rawData[key] || 0, // ถ้าไม่มีข้อมูล ให้แสดงค่า 0
        }));
        setApiData(formattedData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [nextDate]);

  return (
    <div>
      <h3>Date: {nextDate}</h3> {/* แสดงวันที่ถัดไป */}
      {apiData.length > 0 ? (
        <BarChart width={900} height={400} data={apiData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" height={55} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Value" label={{ position: 'top' }}>
            {apiData.map((data, index) => (
              <Cell key={`cell-${index}`} fill={getColor(data.name)} /> // ใช้ Cell เพื่อกำหนดสี
            ))}
          </Bar>
        </BarChart>
      ) : (
        <p>กำลังโหลดข้อมูล...</p>
      )}
    </div>
  );
}

export default Day2;
