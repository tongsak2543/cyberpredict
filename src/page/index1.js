import React, { useState } from "react";
import Navbar1 from "../components/Navbar/navbar1";
import Chart1 from "../components/graph/chart2024";
import Pie2024 from "../components/graph/pie2024";
import Radar2024 from "../components/graph/radar2024";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import risknew from "../../src/components/lh/risknew.png";
import { Button } from "@mui/material";

function Index1() {
  const [selectedContent, setSelectedContent] = useState("2024");
  const [isDarkMode, setIsDarkMode] = useState(true); // สถานะสำหรับโหมดกลางคืน

  const handleSelectTopic = (year) => {
    setSelectedContent(year);
    console.log("Selected Year:", year);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // สลับโหมด
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: isDarkMode ? "#1A2027" : "#fff", // เปลี่ยนสีพื้นหลัง
    color: isDarkMode ? "#f0f0f0" : "#000", // เปลี่ยนสีข้อความ
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {" "}
      {/* สีพื้นหลังของหน้าจอ */}
      {/* Navbar */}
      <Navbar1 onSelectTopic={handleSelectTopic} />
      {/* Grid Layout */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item>
              <div style={{ padding: 20 }}>
                <h1>Selected Year: {selectedContent}</h1>
                <h2>
                  <Button
                    onClick={toggleDarkMode}
                    variant="contained"
                    color="primary"
                  >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </Button>
                </h2>
                {/* กราฟแสดงผลการทำนายสถิติของปี {selectedContent} */}
                <Chart1 selectedContent={selectedContent} />
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <img
                src={risknew}
                style={{ width: "100%", height: "auto" }}
                alt="Risk New"
              />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Pie2024 selectedContent={selectedContent} />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Radar2024 selectedContent={selectedContent} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Index1;
