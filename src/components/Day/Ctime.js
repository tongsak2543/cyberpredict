import React, { useState, useEffect } from 'react';


function CompareDate() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [apiDate, setApiDate] = useState(null);
  const [isDateMatched, setIsDateMatched] = useState(false);

  useEffect(() => {
    const fetchApiDate = async () => {
      const response = await fetch('https://your-api-endpoint.com/date');
      const data = await response.json();
      setApiDate(new Date(data.date)); // สมมติว่า API ส่งวันมาในฟอร์แมต ISO
    };

    fetchApiDate();
  }, []);

  useEffect(() => {
    if (apiDate && currentDate.toDateString() === apiDate.toDateString()) {
      setIsDateMatched(true);
    }
  }, [currentDate, apiDate]);

  return (
    <div>
      {isDateMatched ? (
        <p>วันตรงกัน!</p>
      ) : (
        <p>วันไม่ตรงกัน</p>
      )}
    </div>
  );
}

export default CompareDate;
