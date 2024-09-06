import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import risk from '../lh/risk.jpg';
import des from '../lh/des.jpg';
import TM from '../core/time';
import Chart1 from '../graph/chart2024';
import Pie2024 from '../graph/pie2024';
import Radar2024 from '../graph/radar2024';
import { Radar } from 'recharts';
import { CenterFocusStrong } from '@mui/icons-material';
import Selectt from '../Navbar/select';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Y2022() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <img src={risk} alt="Risk" style={{ width: '100%', height: 'auto' }} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Chart1 />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Pie2024 />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={des} alt="Description" style={{ width: '100%', height: 'auto' }} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <Item>ผลการทำนายสถิติรายปี</Item>
            <Item>
             <TM />
            </Item>
          </Grid> 

          <Grid item xs={12} justifyContent="center" alignItems="center">
            <>
            <Radar2024/>
            </>
          </Grid> 
        </Grid>

        <Grid item xs={4}>
          <item>
            Y22
          </item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Y2022;
