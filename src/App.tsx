import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainDashboard from './pages/MainDashboard/MainDashboard'; // Verifica esta ruta

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<MainDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;