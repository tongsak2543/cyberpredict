import React, { useState, useEffect } from "react";
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
import axios from "axios";
import servicesurl from "../../config";

function Chart1({selectedContent}) { // รับ selectedContent เป็น prop
  const [data, setData] = useState([]);
  console.log("selectedContent:", selectedContent);
 

  useEffect(() => {
    const url = servicesurl();
    if (selectedContent) {
      axios
        .get(`${url}/line/${selectedContent}`)
        .then((response) => {
          console.log("Data received:", response.data);

          // Transform the data for multiple datasets
          const transformedData = response.data.reduce((acc, item) => {
            const months = Object.keys(item);
            months.forEach((month) => {
              if (!acc[month]) {
                acc[month] = {};
              }
              acc[month] = {
                ...acc[month],
                [`DataLeak_${response.data.indexOf(item)}`]: item[month],
              };
            });
            return acc;
          }, {});

          // Convert the transformed data object to an array
          const dataArray = Object.keys(transformedData).map((month) => ({
            name: month,
            ...transformedData[month],
          }));

          setData(dataArray);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedContent]); // เรียกใช้ effect เมื่อ selectedContent เปลี่ยนแปลง

  // Define colors and labels for each dataset
  const lineColors = {
    DataLeak_0: "#8884d8",
    DataLeak_1: "#82ca9d",
    DataLeak_2: "#ffc658",
    DataLeak_3: "#ff7300",
    DataLeak_4: "#a4de6c",
  };

  const lineLabels = {
    DataLeak_0: "Data Leak",
    DataLeak_1: "Probe",
    DataLeak_2: "WebShell",
    DataLeak_3: "Botnet",
    DataLeak_4: "WebsiteDefacement",
  };

  return (
    <ResponsiveContainer width="100%" height={460}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 20, right: 0 }} />
        <YAxis
          tick={{ fontSize: 12}}
          label={{
            value: "ระดับความรุนเเรง",
            angle: -90,
            position: "insideLeft",
            offset: -10,
          }}
          domain={[0, 4000]} // ค่าสูงสุดที่ 20000
          tickCount={8}       // 0 ถึง 20000 จะแสดงทั้งหมด 21 จุด (0, 1000, ..., 20000)
          ticks={[0,5000,10000,15000,20000,25000,30000,35000,40000]} // แบ่งเป็นช่วงทุกๆ 1000
        />
        <Tooltip />
        <Legend />
        {Object.keys(data[0] || {}).filter((key) => key !== "name").map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={lineColors[key] || "#000000"} // Default color if not specified
            activeDot={{ r: 8 }}
            name={lineLabels[key] || key} // Display custom label
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart1;
