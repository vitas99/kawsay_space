import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/Register/RegisterPage';
import MainDashboard from './pages/MainDashboard/MainDashboard';
import StarMapPage from './pages/MapaEstelar/StarMapPage';

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/starmap" element={<StarMapPage />} />
        {/* Futuras rutas para completar la aplicación */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/mission/:missionId" element={<MissionPage />} /> */}
        {/* <Route path="/laboratory" element={<LaboratoryPage />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/comic" element={<ComicPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;