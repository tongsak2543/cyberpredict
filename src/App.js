import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Y2024 from "./components/Year/2024";
import Pie2024 from "./components/graph/pie2024";
import Radar2024 from "./components/graph/radar2024";
import Select from "./components/core/select";
import Index1 from "./page/index1";
import Navbar1 from "./components/core/navbar1";
import Day2024 from "./components/Day/day2024";
import cyber from "./components/lh/cyber.ico"
import CompareTime from "./components/Day/Ctime";
function App() {
  useEffect(() => {
    document.title = "Cyber Predict"; // Set a default title for the app
    
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href =cyber;//ชี้ไปยังไฟล์ Favicon ที่คุณต้องการ
    }
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/y2024" element={<Y2024 />} />
          <Route path="/p2024" element={<Pie2024 />} /> {/* ปี 2024 */}
          <Route path="/r2024" element={<Radar2024 />} /> {/* เรดาร์ */}
          <Route path="/" element={<Index1/>} />
          <Route path="/nav" element={<Navbar1/>} />
          <Route path="/day2024" element={<Day2024/>} />
          <Route path="/Ctime" element={<CompareTime/>} />
        </Routes>
    </Router>
  );
}

export default App;
