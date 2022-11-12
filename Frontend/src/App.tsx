import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import WriteTitlePage from './pages/WriteTitlePage';
import SelectLocationPage from './pages/SelectLocationPage';
import WritePostPage from './pages/WritePostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/Write/Title" element={<WriteTitlePage />} />
      <Route path="/Write/Post" element={<WritePostPage />} />
      <Route path="/Select" element={<SelectLocationPage />} />
    </Routes>
  );
}

export default App;
