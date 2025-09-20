import React, { useState } from 'react';
import BackgroundScene from '../components/ui/BackgroundScene';
import AstronautPanel from '../components/ui/AstronautPanel';
import LoginPanel from '../components/ui/LoginPanel';
import MissionNewsPanel from '../components/ui/MissionNewsPanel';
import CreateAccountButton from '../components/ui/CreateAccountButton';
import type { LoginFormData, Mission } from '../types';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const [selectedAstronaut, setSelectedAstronaut] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAstronautSelect = (id: number): void => {
    setSelectedAstronaut(id);
    console.log(`Astronauta seleccionado: ${id}`);
  };

  const handleLogin = async (data: LoginFormData): Promise<void> => {
    setIsLoading(true);
    try {
      console.log('Procesando login:', data);
      
      // Simulación de autenticación
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aquí iría la lógica de autenticación real
      console.log('Login exitoso');
      
      // Redirección o cambio de estado
      // navigate('/dashboard');
      
    } catch (error) {
      console.error('Error en login:', error);
      // Aquí manejarías los errores de autenticación
    } finally {
      setIsLoading(false);
    }
  };

  const handleMissionClick = (mission: Mission): void => {
    console.log('Misión seleccionada:', mission);
    // Aquí iría la navegación a la misión específica
  };

  const handleCreateAccount = (): void => {
    console.log('Navegando a crear cuenta...');
    // Aquí iría la lógica de navegación a registro
    // navigate('/register');
  };

  return (
    <div className="landing-page">
      <BackgroundScene />
      
      <div className="landing-content">
        <div className="panels-container">
          <AstronautPanel 
            selectedAstronaut={selectedAstronaut}
            onAstronautSelect={handleAstronautSelect}
          />
          
          <div className="center-panel">
            <LoginPanel onLogin={handleLogin} />
          </div>
          
          <MissionNewsPanel onMissionClick={handleMissionClick} />
        </div>
        
        <div className="bottom-section">
          <CreateAccountButton onClick={handleCreateAccount} />
        </div>
      </div>
      
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner-large">
            <div className="spinner-ring"></div>
            <div className="loading-text">Iniciando sesión...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;