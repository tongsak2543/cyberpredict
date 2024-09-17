import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import servicesurl from '../../config';

function Radar2024({ selectedContent }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = servicesurl();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [riskResponse, imResponse, pResponse] = await Promise.all([
                    fetch(`${url}/risk/${selectedContent}`),
                    fetch(`${url}/im/${selectedContent}`),
                    fetch(`${url}/pie/${selectedContent}`)
                ]);

                if (!riskResponse.ok || !imResponse.ok || !pResponse.ok) {
                    throw new Error('One or more requests failed');
                }

                const [riskData, imData, pData] = await Promise.all([
                    riskResponse.json(),
                    imResponse.json(),
                    pResponse.json()
                ]);

                const imValues = imData[0];
                const pValues = pData[0];

                const combinedData = [
                    { subject: 'การเงิน', Risk: riskData[0].financial, IM: imValues.im_fi, P: pValues.p_fi, fullMark: 25 },
                    { subject: 'การดำเนินการ', Risk: riskData[0].operational, IM: imValues.im_op, P: pValues.p_op, fullMark: 25 },
                    { subject: 'บุคลากร', Risk: riskData[0].personnel, IM: imValues.im_pe, P: pValues.p_pe, fullMark: 25 },
                    { subject: 'การกำกับดูแล', Risk: riskData[0].governance, IM: imValues.im_go, P: pValues.p_go, fullMark: 25 },
                    { subject: 'ชื่อเสียง', Risk: riskData[0].reputation, IM: imValues.im_re, P: pValues.p_re, fullMark: 25 },
                ];

                setData(combinedData);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedContent]); // เพิ่ม selectedContent ใน dependency array

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const chartStyle = {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: '100%', // ปรับตามที่ต้องการ
        width: '100%'
    };

    return (
        <div style={chartStyle}>
            <RadarChart cx={250} cy={200} outerRadius={150} width={500} height={380} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 25]} />
                <Radar name="ความเสี่ยงทางไซเบอร์" dataKey="Risk" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}  />
                <Radar name="การจัดการข้อมูล" dataKey="IM" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Radar name="ผลกระทบทางไซเบอร์" dataKey="P" stroke="#ff388b" fill="#ff388b" fillOpacity={0.1} />
                <Legend />
            </RadarChart>
        </div>
    );
}

export default Radar2024;
