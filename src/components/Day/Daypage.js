import React from 'react'
import Navbar1 from '../Navbar/navbar1'
import formattedDate from '../function/time'
import axios from 'axios'
import servicesurl from '../../config'
import { useEffect } from 'react'



//     const url = servicesurl();
//     const date = formattedDate;
    

// function Daypage() {

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`${url}/day/${date}`); // ดึงข้อมูลจาก API
//                 console.log(response.data); // แสดงข้อมูลที่ได้รับ
                
//             }
//              catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []); //ค่าวันที่เตรียงส่งไปยังกราฟทั้ง 7 วัน
  
  return (
    <>
    <Navbar1/>
    <div>
      <h1>Date Is {date}</h1>
    </div>
    </>
  )
// }

export default Daypage