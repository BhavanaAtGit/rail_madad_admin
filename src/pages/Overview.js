import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import GrievanceTrendsChart from '../components/charts/GrievanceTrendsChart';
import DepartmentDistributionChart from '../components/charts/DepartmentDistributionChart';

const Overview = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper style={{ padding: '20px', backgroundColor: '#1d1d1d' }}>
          <Typography variant="h6" gutterBottom>
            Grievance Trends
          </Typography>
          <GrievanceTrendsChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: '20px', backgroundColor: '#1d1d1d' }}>
          <Typography variant="h6" gutterBottom>
            Department Distribution
          </Typography>
          <DepartmentDistributionChart />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Overview;