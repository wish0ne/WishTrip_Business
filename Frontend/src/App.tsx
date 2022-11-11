import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import WriteAdPage from './pages/WriteAdPage';
import SelectLocationPage from './pages/SelectLocationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/Write" element={<WriteAdPage />} />
      <Route path="/Select" element={<SelectLocationPage />} />
    </Routes>
  );
}

export default App;
