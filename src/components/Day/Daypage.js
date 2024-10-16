import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbarforday from "../Navbar/navbarforday";
import Chartday from "../graphday/chartday";
import Pieday from "../graphday/pieday";
import risknew from "../lh/risknew.png";
import Day1 from "../graphday/typeday1";
import Day2 from "../graphday/typeday2";
import Day3 from "../graphday/typeday3";
import Day4 from "../graphday/typeday4";
import Day5 from "../graphday/typeday5";
import Day6 from "../graphday/typeday6";
import formattedDate from "../function/time";
import { Button } from "@mui/material";

const Date = formattedDate;

const Item = styled(Paper)(({ theme, isDarkMode }) => ({
  backgroundColor: isDarkMode ? "#1A2027" : "#fff",
  color: isDarkMode ? "#f0f0f0" : "#000",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

function Daypage() {
  const [isDarkMode, setIsDarkMode] = useState(true); // สถานะสำหรับโหมดกลางคืน

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // สลับโหมด
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Navbarforday />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item isDarkMode={isDarkMode}>
              <h1>Day is <Date /></h1>
              <Button
                onClick={toggleDarkMode}
                variant="contained"
                color="primary"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </Button>
              <Chartday />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item isDarkMode={isDarkMode}>
              <img
                src={risknew}
                style={{ width: "100%", height: "auto" }} // ปรับให้สูงอัตโนมัติตามสัดส่วน
                alt="Risk New"
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item isDarkMode={isDarkMode}>
              <Pieday />
            </Item>
          </Grid>
          {/* แสดง Day1 - Day6 ในรูปแบบ 2 แถว แถวละ 2 คอมโพเนนต์ */}
          <Grid container spacing={1}>
            {[Day1, Day2, Day3, Day4, Day5, Day6].map((Component, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Item isDarkMode={isDarkMode}>
                  <Component />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Daypage;
