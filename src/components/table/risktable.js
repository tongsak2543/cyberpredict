import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
    { col1: '5', col2: '5', col3: '10', col4: '15', col5: '20', col6: '25' },
    { col1: '4', col2: '4', col3: '8', col4: '12', col5: '18', col6: '20' },
    { col1: '3', col2: '3', col3: '6', col4: '9', col5: '12', col6: '15' },
    { col1: '2', col2: '2', col3: '4', col4: '6', col5: '8', col6: '10' },
    { col1: '1', col2: '1', col3: '2', col4: '3', col5: '4', col6: '5' }

    // เพิ่มข้อมูลเพิ่มเติมได้ที่นี่
];

function RiskTable() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={6}>เเผนภูมิความเสี่ยง</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            <TableCell>{row.col1}</TableCell>
                            <TableCell>{row.col2}</TableCell>
                            <TableCell>{row.col3}</TableCell>
                            <TableCell>{row.col4}</TableCell>
                            <TableCell>{row.col5}</TableCell>
                            <TableCell>{row.col6}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <p align='center'>Likelihood</p>  
            </Table>
        </TableContainer>
    );
}

export default RiskTable;



