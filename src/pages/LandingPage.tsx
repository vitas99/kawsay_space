import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundScene from '../components/ui/BackgroundScene';
import AstronautPanel from '../components/ui/AstronautPanel';
import LoginPanel from '../components/ui/LoginPanel';
import MissionNewsPanel from '../components/ui/MissionNewsPanel';
import CreateAccountButton from '../components/ui/CreateAccountButton'; // Asegúrate de que esta ruta es correcta
import CosmicCadetForm from '../components/ui/CosmicCadetForm'; // Asegúrate de que esta ruta es correcta
import type { LoginFormData, Mission } from '../types'; // Asegúrate de que esta ruta es correcta
import './LandingPage.css';
import ErrorBoundary from '../components/ErrorBoundary'; // Ajusta la ruta según tu estructura

// Debug: Verificar que los componentes clave se importaron correctamente
console.log('🔍 CosmicCadetForm importado:', CosmicCadetForm);
console.log('🔍 CreateAccountButton importado:', CreateAccountButton); // Añadido para depuración

const LandingPage: React.FC = () => {
  const [selectedAstronaut, setSelectedAstronaut] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'login' | 'register'>('login');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook para navegación

  // Debug: Ver cambios de estado de currentView
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
    } catch (err: any) { // Tipo de error más específico
      console.error('Error selecting astronaut:', err);
      setError('Error al seleccionar astronauta: ' + err.message);
    }
  };

  const handleLogin = async (data: LoginFormData): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('🔍 Datos recibidos en handleLogin:', data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Login exitoso');
      // Aquí iría la navegación al dashboard
      
    } catch (error) {
      console.error('Error en login:', error);
      setError('Error en la autenticación');
    } finally {
      setIsLoading(false);
    }
  };
  const handleMissionClick = (mission: Mission): void => {
    try {
      console.log('Misión seleccionada:', mission);
      // Aquí iría la navegación a la misión específica
    } catch (err: any) { // Tipo de error más específico
      console.error('Error selecting mission:', err);
      setError('Error al seleccionar misión: ' + err.message);
    }
  };

  const handleCreateAccount = (): void => {
    console.log('🔵 handleCreateAccount llamado');
    console.log('🔍 Estado actual antes del cambio:', currentView);
    
    try {
      setCurrentView('register');
      setError(null);
      console.log('🟢 setCurrentView("register") ejecutado.');
    } catch (err: any) {
      console.error('🔴 Error navigating to register:', err);
      setError('Error al navegar al registro: ' + err.message);
    }
  };

  const handleBackToLogin = (): void => {
    console.log('🔵 handleBackToLogin llamado. Cambiando a vista "login".');
    try {
      setCurrentView('login');
      setError(null);
      console.log('🟢 setCurrentView("login") ejecutado.');
    } catch (err: any) {
      console.error('🔴 Error navigating back to login:', err);
      setError('Error al regresar al login: ' + err.message);
    }
  };

  const handleRegisterSubmit = (formData: any): void => {
    console.log('🔵 handleRegisterSubmit llamado.');
    try {
      console.log('Datos de registro recibidos:', formData);
      // Aquí procesarías el registro
      // Después del registro exitoso, podrías regresar al login
      setCurrentView('login');
      // Mostrar mensaje de éxito (opcional)
      console.log('Registro completado, regresando al login');
    } catch (err) {
      console.error('Error processing registration:', err);
      setError('Error al procesar el registro: ' + err.message);
    }
  };

  // Debug: Mostrar estado actual antes de renderizar
  console.log('🔍 Renderizando con currentView:', currentView);

  // Error boundary simple
  if (error) {
    console.error('LandingPage Error:', error);
  }

  // Renderizado condicional con manejo de errores
  try {
    if (currentView === 'register') {
      console.log('🟢 Renderizando vista de REGISTRO');
      return (
        <div>
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
          <CosmicCadetForm 
            onSubmit={handleRegisterSubmit}
            onBackToLogin={handleBackToLogin}
          />
        </div>
      );
    }

    console.log('🟢 Renderizando vista de LOGIN');
    return (
      <div className="landing-page">
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
  } catch (err) {
    console.error('🔴 Critical error in LandingPage render:', err);
    
    // Fallback UI
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1f2937',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div>
          <h1>Error cargando la aplicación</h1>
          <p>Ha ocurrido un error. Por favor, recarga la página.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: '#3b82f6',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Recargar página
          </button>
        </div>
      </div>
    );
  }
};

export default LandingPage;