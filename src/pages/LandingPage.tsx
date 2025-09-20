import React, { useState, useEffect } from 'react';
import BackgroundScene from '../components/ui/BackgroundScene';
import AstronautPanel from '../components/ui/AstronautPanel';
import LoginPanel from '../components/ui/LoginPanel';
import MissionNewsPanel from '../components/ui/MissionNewsPanel';
import CreateAccountButton from '../components/ui/CreateAccountButton'; // Asegúrate de que esta ruta es correcta
import CosmicCadetForm from '../components/ui/CosmicCadetForm'; // Asegúrate de que esta ruta es correcta
import type { LoginFormData, Mission } from '../types'; // Asegúrate de que esta ruta es correcta
import './LandingPage.css';

// Debug: Verificar que los componentes clave se importaron correctamente
console.log('🔍 CosmicCadetForm importado:', CosmicCadetForm);
console.log('🔍 CreateAccountButton importado:', CreateAccountButton); // Añadido para depuración

const LandingPage: React.FC = () => {
  const [selectedAstronaut, setSelectedAstronaut] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'login' | 'register'>('login');
  const [error, setError] = useState<string | null>(null);

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
      console.log('Procesando login:', data);
      
      // Simulación de autenticación
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Login exitoso');
      // Aquí iría la navegación al dashboard o manejo de token
      
    } catch (error: any) { // Tipo de error más específico
      console.error('Error en login:', error);
      setError('Error en la autenticación: ' + error.message);
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
    console.log('🔵 handleCreateAccount llamado. Cambiando a vista "register".');
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
      // Aquí procesarías el registro (ej: enviar a una API)
      // Después del registro exitoso, podrías regresar al login
      setCurrentView('login');
      console.log('Registro completado, regresando al login.');
      // Opcional: setError('Registro exitoso. ¡Inicia sesión!');
    } catch (err: any) {
      console.error('Error processing registration:', err);
      setError('Error al procesar el registro: ' + err.message);
    }
  };

  // Debug: Mostrar estado actual antes de renderizar
  console.log('🔍 Renderizando con currentView:', currentView);

  // Error boundary simple (si ocurre un error durante el renderizado)
  if (error) {
    console.error('LandingPage Error global:', error);
  }

  // Renderizado condicional
  if (currentView === 'register') {
    console.log('🟢 Renderizando vista de REGISTRO');
    return (
      <div className="landing-page-container"> {/* Contenedor genérico para ambas vistas */}
        {error && (
          <div className="error-message-overlay">
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
    <div className="landing-page"> {/* Clase específica para la vista de login/paneles */}
      {error && (
        <div className="error-message-overlay">
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
            {/* El botón de "Crear Cuenta" está ubicado aquí */}
            <div className="create-account-section">
              <CreateAccountButton onClick={handleCreateAccount} />
            </div>
          </div>
          
          <MissionNewsPanel onMissionClick={handleMissionClick} />
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