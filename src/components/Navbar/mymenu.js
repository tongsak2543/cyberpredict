import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';

const pages = ["2021", "2022", "2023", "2024", "2025",];

const MyMenu = () => {
  const [selectedYear, setSelectedYear] = useState(""); // State เก็บค่าที่เลือก

  return (
    <>
      <Select
        value={selectedYear}
        onChange={(event) => setSelectedYear(event.target.value)}  // ใช้ฟังก์ชันใน onChange
        displayEmpty
      >
        {pages.map((page) => (
          <MenuItem key={page} value={page}>
            {page}
          </MenuItem>
        ))}
      </Select>
      
      {/* แสดงค่าที่ถูกเลือก */}
      <div>{selectedYear}</div>
    </>
  );
};

export default MyMenu;
