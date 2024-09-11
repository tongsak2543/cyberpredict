import React, { useState } from 'react';
// import Navbar1 from '../components/core/navbar1';

import Navbar1 from '../components/Navbar/navbar1';
import SelectTopic from '../components/Navbar/select';

function Index1() {
  // สร้าง state เก็บปีที่ถูกเลือก
  const [selectedContent, setSelectedContent] = useState('2021'); // ค่าเริ่มต้นเป็น '2021'

  const handleSelectTopic = (year) => {
    setSelectedContent(year);
    // คุณสามารถใช้ selectedContent สำหรับการเรียก API ที่นี่
    console.log('Selected Year:', year);
    // ตัวอย่างการเรียก API
    // fetch(`your-api-endpoint/${year}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <Navbar1 onSelectTopic={handleSelectTopic} />
      <div style={{ padding: 20 }}>
        <p>Selected Year: {selectedContent}</p> {/* แสดงค่าปีที่เลือก */}
      </div>
    </div>
  );
}

export default Index1;
