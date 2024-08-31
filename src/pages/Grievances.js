import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Paper } from '@mui/material';

const grievances = [
  { id: 1, department: 'IT', status: 'Solved', date: '2024-08-01' },
  { id: 2, department: 'HR', status: 'Unsolved', date: '2024-08-02' },
  { id: 3, department: 'Finance', status: 'Solved', date: '2024-08-03' },
  // Add more sample data
];

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'department', headerName: 'Department', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'date', headerName: 'Date', width: 200 },
];

const GrievancesContainer = styled(Paper)`
  height: 400px;
  width: 100%;
  background-color: #1d1d1d;
  color: #ffffff;

  .MuiDataGrid-root {
    border: none;
  }

  .MuiDataGrid-cell {
    color: #ffffff;
  }

  .MuiDataGrid-columnHeaders {
    background-color: #2c2c2c;
  }

  .MuiDataGrid-columnSeparator {
    display: none;
  }

  .MuiTablePagination-root {
    color: #ffffff;
  }
`;

const Grievances = () => {
  return (
    <GrievancesContainer>
      <DataGrid
        rows={grievances}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </GrievancesContainer>
  );
};

export default Grievances;