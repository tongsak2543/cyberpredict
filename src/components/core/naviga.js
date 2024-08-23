import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { color } from 'chart.js/helpers';
import { Link } from 'react-router-dom';


export default function Navi() {
  return (
    <Stack spacing={2} direction="row" justifyContent={'center'}>
      <Button variant="contained" component={Link} to="/" >Home</Button>
      <Button variant="contained" component={Link} to="/day2024" >Go Day DATA</Button>
    </Stack>
  );
}
