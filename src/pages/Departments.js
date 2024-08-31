import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import DepartmentStatsChart from '../components/charts/DepartmentStatsChart';

const Departments = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '20px', backgroundColor: '#1d1d1d' }}>
          <Typography variant="h6" gutterBottom>
            Department Statistics
          </Typography>
          <DepartmentStatsChart />
        </Paper>
      </Grid>
      {/* Add more charts or stats as needed */}
    </Grid>
  );
};

export default Departments;