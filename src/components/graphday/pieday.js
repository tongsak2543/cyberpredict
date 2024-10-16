import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import formattedDate from "../function/time";
import servicesurl from "../../config";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

function Pieday() {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const date = formattedDate(); // เรียกฟังก์ชันเพื่อให้ได้วันที่ปัจจุบัน
  const url = servicesurl(); // เรียก API URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/typeday/${date}`);
        const data = response.data[0]; // สมมติว่า response เป็น array ที่มี object เดียว

        // ตั้งค่าข้อมูลสำหรับ PieChart
        setChartData({
          labels: Object.keys(data), // เอาชื่อ category จาก key ของ object
          datasets: [
            {
              data: Object.values(data), // เอาค่า data จาก value ของ object
              backgroundColor: [
                "#ffa6fa", //ชมพู
                "#e77c7c", //เเดง
                "#fff0a6", //เหลืองอ่อน
                "#ffb8a6", //ส้ม
                "#009795", //เขียว
                "#0fcf86", //เขียวอ่อน
                "#9ffeff", //ฟ้า
                "#c8ff9f", //เขียวอ่อน
                "#9fb3ff", //ฟ้าอ่อน
                "#ff9feb", //ชมพูอ่อน
                "#4c53e0", //ฟ้า
                "#b7c4cf", //ฟ้าอ่อน
                "#466f75", //น้ำเงิน
                "#68a466", //เขียวอ่อน
                "#a49c66", //เหลือง
                "#bdfffd", //ฟ้าอ่อน
                "#bde0ff",
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#FFCD56",
                "#FF6384",
                "#36A2EB",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#FFCD56",
                "#FF6384",
                "#36A2EB",
                "#4BC0C0",
              ],
            },
          ],
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [date, url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ width: '100%', height: '500px' }}> {/* เปลี่ยนขนาดตามที่ต้องการ */}
      <Pie 
        data={chartData} 
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "left",
              labels: {
                font: {
                  size: 15,
                },
              },
            },
          },
        }} 
      />
    </Box>
  );
}

export default Pieday;
