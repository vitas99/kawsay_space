import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundScene from '../components/ui/BackgroundScene';
import AstronautPanel from '../components/ui/AstronautPanel';
import LoginPanel from '../components/ui/LoginPanel';
import MissionNewsPanel from '../components/ui/MissionNewsPanel';
import CreateAccountButton from '../components/ui/CreateAccountButton';
import CosmicCadetForm from '../components/ui/CosmicCadetForm';
import type { LoginFormData, Mission } from '../types';
import './LandingPage.css';
import ErrorBoundary from '../components/ErrorBoundary'; // Ajusta la ruta según tu estructura

// Debug: Verificar que el componente se importó correctamente
console.log('🔍 CosmicCadetForm importado:', CosmicCadetForm);

const LandingPage: React.FC = () => {
  const [selectedAstronaut, setSelectedAstronaut] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'login' | 'register'>('login');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook para navegación

  // Debug: Ver cambios de estado
  useEffect(() => {
    console.log('🔍 currentView cambió a:', currentView);
  }, [currentView]);

  // Limpiar errores después de 5 segundos
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleAstronautSelect = (id: number): void => {
    try {
      setSelectedAstronaut(id);
      console.log(`Astronauta seleccionado: ${id}`);
    } catch (err) {
      console.error('Error selecting astronaut:', err);
      setError('Error al seleccionar astronauta');
    }
  };

  const handleLogin = async (data: LoginFormData): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('🔍 Datos recibidos en handleLogin:', data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('🔍 Validando credenciales:', { username: data.username, password: data.password });
      if (data.username === 'admin' && data.password === 'admin') {
        console.log('✅ Login exitoso, redirigiendo a /dashboard');
        navigate('/dashboard');
      } else {
        console.log('❌ Credenciales incorrectas');
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('🔴 Error en login:', error);
      setError('Error en la autenticación');
    } finally {
      setIsLoading(false);
    }
  };
  const handleMissionClick = (mission: Mission): void => {
    try {
      console.log('Misión seleccionada:', mission);
      // Aquí iría la navegación a la misión específica
    } catch (err) {
      console.error('Error selecting mission:', err);
      setError('Error al seleccionar misión');
    }
  };

  const handleCreateAccount = (): void => {
    console.log('🔵 handleCreateAccount llamado');
    console.log('🔍 Estado actual antes del cambio:', currentView);

    try {
      console.log('🟢 Navegando a crear cuenta...');
      setCurrentView('register');
      console.log('🟢 setCurrentView(register) ejecutado');
      setError(null);
    } catch (err) {
      console.error('🔴 Error navigating to register:', err);
      setError('Error al navegar al registro');
    }
  };

  const handleBackToLogin = (): void => {
    console.log('🔵 handleBackToLogin llamado');
    try {
      console.log('🟢 Regresando al login...');
      setCurrentView('login');
      setError(null);
    } catch (err) {
      console.error('🔴 Error navigating back to login:', err);
      setError('Error al regresar al login');
    }
  };

  const handleRegisterSubmit = (formData: any): void => {
    console.log('🔵 handleRegisterSubmit llamado');
    try {
      console.log('Datos de registro recibidos:', formData);
      // Aquí procesarías el registro
      setCurrentView('login');
      console.log('Registro completado, regresando al login');
    } catch (err) {
      console.error('Error processing registration:', err);
      setError('Error al procesar el registro');
    }
  };

  // Debug: Mostrar estado actual antes de renderizar
  console.log('🔍 Renderizando con currentView:', currentView);

  // Renderizado condicional con manejo de errores
  return (
    <ErrorBoundary>
      {error && (
        <div style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          background: 'rgba(248, 113, 113, 0.9)',
          color: 'white',
          padding: '1rem',
          borderRadius: '0.5rem',
          zIndex: 1000
        }}>
          {error}
        </div>
      )}
      {currentView === 'register' ? (
        <div>
          <CosmicCadetForm
            onSubmit={handleRegisterSubmit}
            onBackToLogin={handleBackToLogin}
          />
        </div>
      ) : (
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
      )}
    </ErrorBoundary>
  );
};

export default LandingPage;