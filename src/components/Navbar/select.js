// import React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function Selectt({ onYearChange }) { // รับ props onYearChange
//   const [year, setYear] = React.useState('2024'); // ค่าเริ่มต้นปี

//   const handleChange = (event) => {
//     const selectedYear = event.target.value;
//     setYear(selectedYear);
//     onYearChange(selectedYear); // ส่งปีที่ถูกเลือกไปยัง Chart1 ผ่านฟังก์ชัน
//   };

// //   return (
// //     // <Box sx={{ minWidth: 120 }}>
// //     //   {/* <FormControl fullWidth>
// //     //     <InputLabel id="demo-simple-select-label">Year</InputLabel>
// //     //     <Select
// //     //       labelId="demo-simple-select-label"
// //     //       id="demo-simple-select"
// //     //       value={year}
// //     //       label="Year"
// //     //       onChange={handleChange}
// //     //     >
// //     //       <MenuItem value={2021}>2021</MenuItem>
// //     //       <MenuItem value={2022}>2022</MenuItem>
// //     //       <MenuItem value={202223}>2022223</MenuItem>
// //     //       <MenuItem value={2024}>2024</MenuItem>
// //     //       <MenuItem value={2025}>2025</MenuItem>
// //     //     </Select>
// //     //   </FormControl> */}
// //     // </Box>
// //   // );
// // }
