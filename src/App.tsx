import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/Register/RegisterPage';
import MainDashboard from './pages/MainDashboard/MainDashboard';

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        {/* Ruta adicional recomendada para login */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;