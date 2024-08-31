import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import darkTheme from './theme';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

import Overview from './pages/Overview';
import Grievances from './pages/Grievances';
import Departments from './pages/Departments';
import Settings from './pages/Settings';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/grievances" element={<Grievances />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainContent>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
