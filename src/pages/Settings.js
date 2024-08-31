import React from 'react';
import styled from 'styled-components';
import { Paper, Typography, Switch, FormControlLabel } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';

const SettingsContainer = styled(Paper)`
  padding: 20px;
  background-color: #1d1d1d;
`;

const Settings = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  return (
    <SettingsContainer>
      <Typography variant="h6" gutterBottom>
        Settings
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={isDarkTheme}
            onChange={() => dispatch(toggleTheme())}
          />
        }
        label="Dark Theme"
      />
      {/* Add more settings options here */}
    </SettingsContainer>
  );
};

export default Settings;