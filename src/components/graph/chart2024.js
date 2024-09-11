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


function Chart1({selectedYear}) { // รับ selectedYear เป็น prop
  const [data, setData] = useState([]);
  console.log("selectedYear:", selectedYear);
  useEffect(() => {
    if (selectedYear) {
      axios
        .get(`http://localhost:3001/line/${selectedYear}`)
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
  }, [selectedYear]); // เรียกใช้ effect เมื่อ selectedYear เปลี่ยนแปลง

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
          tick={{ fontSize: 12, fill: "black" }}
          label={{
            value: "ระดับความรุนเเรง",
            angle: -90,
            position: "insideLeft",
            offset: -10,
          }}
          domain={[0, 10000]}
          tickCount={12}
          ticks={[0, 500, 1000, 1500, 2000, 2500, 3000,3500,4000,4500,5000,5500,6000,6500,7000,7500,8000,8500,9000,9500,10000]}
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
