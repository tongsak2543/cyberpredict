import React, { useState } from 'react';
import Navbar1 from '../components/Navbar/navbar1';
import Chart1 from '../components/graph/chart2024'; // Import คอมโพเนนต์ Chart1
import Pie2024 from '../components/graph/pie2024';
import Radar2024 from '../components/graph/radar2024';

function Index1() {
  const [selectedContent, setSelectedContent] = useState('2021'); // ค่าเริ่มต้นเป็น '2021'

  const handleSelectTopic = (year) => {
    setSelectedContent(year); // อัพเดท selectedContent ตามปีที่เลือก
    console.log('Selected Year:', year);
  };

  return (
    <div>
      <Navbar1 onSelectTopic={handleSelectTopic} />
      <div style={{ padding: 20 }}>
        <p>Selected Year: {selectedContent}</p> {/* แสดงค่าปีที่เลือก */}
      </div>
      {/* ส่ง selectedContent ไปยัง Chart1 เป็น props */}
      <Chart1 selectedContent={selectedContent} />
      {/* วงกลม */}
      <div><Pie2024 selectedContent={selectedContent} /></div>
      <div><Radar2024 selectedContent={selectedContent}></Radar2024></div>
    </div>
  );
}

export default Index1;
