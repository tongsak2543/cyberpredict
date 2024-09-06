// Index1.js
import React, { useState } from 'react';
// import Navbar1 from '../components/core/navbar1';
import Y2025 from '../components/Year/2025';
import Y2024 from '../components/Year/2024';
import Y2023 from '../components/Year/2023';
import Y2022 from '../components/Year/2022';
import Y2021 from '../components/Year/2021';
import Navbar1 from '../components/Navbar/navbar1';
import SelectTopic from '../components/Navbar/select';

function Index1() {
  const [selectedContent, setSelectedContent] = useState(null);

  const renderContent = () => {
    switch (selectedContent) {
      case '2025':
        return <Y2025 />;
      case '2024':
        return <Y2024 />;
      case '2023':
        return <Y2023 />;
      case '2022':
        return <Y2022 />;
      case '2022':
        return <Y2021 />;
      case '2021':
        return <Y2021 />;
      default:
        return <div>Please select a topic</div>; // แสดงข้อความเมื่อไม่มีการเลือกหัวข้อ
    }
  };



  return (
    <div>
      <Navbar1 onSelectTopic={setSelectedContent} />
      <div style={{ padding: 20 }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default Index1;
