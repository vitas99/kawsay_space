import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundScene from "../components/ui/BackgroundScene";
import AstronautPanel from "../components/ui/AstronautPanel";
import LoginPanel from "../components/ui/LoginPanel";
import MissionNewsPanel from "../components/ui/MissionNewsPanel";
import CreateAccountButton from "../components/ui/CreateAccountButton";
import CosmicCadetForm from "../components/ui/CosmicCadetForm";
import type { LoginFormData, Mission } from "../types";
import "./LandingPage.css";

// Variable para detectar entorno de desarrollo
const isDevelopment =
  import.meta.env?.DEV || window.location.hostname === "localhost";

const LandingPage: React.FC = () => {
  const [selectedAstronaut, setSelectedAstronaut] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<"login" | "register">("login");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Debug logs solo en desarrollo
  useEffect(() => {
    if (isDevelopment) {
      console.log("currentView cambió a:", currentView);
    }
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
      if (isDevelopment) {
        console.log(`Astronauta seleccionado: ${id}`);
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Error desconocido";
      console.error("Error selecting astronaut:", err);
      setError("Error al seleccionar astronauta: " + errorMessage);
    }
  };

  const handleLogin = async (data: LoginFormData): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      if (isDevelopment) {
        console.log("Datos recibidos en handleLogin:", data);
      }

      // Simular llamada a API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Navegar al dashboard después del login exitoso
      navigate("/dashboard");

      if (isDevelopment) {
        console.log("Login exitoso, navegando al dashboard");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Error en la autenticación";
      console.error("Error en login:", err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMissionClick = (mission: Mission): void => {
    try {
      if (isDevelopment) {
        console.log("Misión seleccionada:", mission);
      }
      // Navegar a la misión específica
      navigate(`/mission/${mission.id}`);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Error desconocido";
      console.error("Error selecting mission:", err);
      setError("Error al seleccionar misión: " + errorMessage);
    }
  };

  const handleCreateAccount = (): void => {
    if (isDevelopment) {
      console.log("handleCreateAccount llamado");
      console.log("Estado actual antes del cambio:", currentView);
    }

    try {
      setCurrentView("register");
      setError(null);
      if (isDevelopment) {
        console.log('setCurrentView("register") ejecutado.');
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Error desconocido";
      console.error("Error navigating to register:", err);
      setError("Error al navegar al registro: " + errorMessage);
    }
  };

  const handleBackToLogin = (): void => {
    if (isDevelopment) {
      console.log('handleBackToLogin llamado. Cambiando a vista "login".');
    }
    try {
      setCurrentView("login");
      setError(null);
      if (isDevelopment) {
        console.log('setCurrentView("login") ejecutado.');
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Error desconocido";
      console.error("Error navigating back to login:", err);
      setError("Error al regresar al login: " + errorMessage);
    }
  };

  const handleRegisterSubmit = async (formData: any): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      if (isDevelopment) {
        console.log("handleRegisterSubmit llamado.");
        console.log("Datos de registro recibidos:", formData);
      }

      // Simular llamada a API de registro
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Después del registro exitoso, regresar al login
      setCurrentView("login");

      if (isDevelopment) {
        console.log("Registro completado, regresando al login");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Error al procesar el registro";
      console.error("Error processing registration:", err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Renderizado de notificación de error
  const renderErrorNotification = () => {
    if (!error) return null;

    return (
      <div className="landing-page__error-notification" role="alert">
        <div className="landing-page__error-content">
          <span className="landing-page__error-icon">⚠️</span>
          <span className="landing-page__error-text">{error}</span>
          <button
            className="landing-page__error-close"
            onClick={() => setError(null)}
            aria-label="Cerrar notificación de error"
          >
            ×
          </button>
        </div>
      </div>
    );
  };

  // Renderizado de overlay de carga
  const renderLoadingOverlay = () => {
    if (!isLoading) return null;

    return (
      <div className="loading-overlay">
        <div className="loading-spinner-large">
          <div className="spinner-ring"></div>
          <div className="loading-text">
            {currentView === "register"
              ? "Creando cuenta..."
              : "Iniciando sesión..."}
          </div>
        </div>
      </div>
    );
  };

  // Debug en desarrollo
  if (isDevelopment) {
    console.log("Renderizando con currentView:", currentView);
  }

  // Renderizado condicional con manejo de errores
  try {
    if (currentView === "register") {
      if (isDevelopment) {
        console.log("Renderizando vista de REGISTRO");
      }
      return (
        <div className="landing-page landing-page--register">
          {renderErrorNotification()}
          {renderLoadingOverlay()}

          <CosmicCadetForm
            onSubmit={handleRegisterSubmit}
            onBackToLogin={handleBackToLogin}
          />
        </div>
      );
    }

    if (isDevelopment) {
      console.log("Renderizando vista de LOGIN");
    }

    // En tu return del componente LandingPage, cambia esta parte:

    return (
      <div className="landing-page">
        {renderErrorNotification()}
        {renderLoadingOverlay()}

        <BackgroundScene />

        <div className="landing-content">
          <div className="panels-container">
            <AstronautPanel
              selectedAstronaut={selectedAstronaut}
              onAstronautSelect={handleAstronautSelect}
            />

            <div className="center-panel">
              <LoginPanel onLogin={handleLogin} />
              {/* ⬇️ MUEVE EL BOTÓN AQUÍ */}
              <CreateAccountButton onClick={handleCreateAccount} />
            </div>

            <MissionNewsPanel onMissionClick={handleMissionClick} />
          </div>

          {/* ⬇️ ELIMINA ESTA SECCIÓN COMPLETA */}
          {/* <div className="bottom-section">
        <CreateAccountButton onClick={handleCreateAccount} />
      </div> */}
        </div>
      </div>
    );
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Error crítico desconocido";
    console.error("Critical error in LandingPage render:", err);

    // Fallback UI
    return (
      <div className="landing-page landing-page--error">
        <div className="landing-page__error-fallback">
          <div className="landing-page__error-fallback-icon">🚀</div>
          <h1 className="landing-page__error-fallback-title">
            Error cargando la aplicación
          </h1>
          <p className="landing-page__error-fallback-message">
            Ha ocurrido un error crítico: {errorMessage}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="landing-page__error-fallback-button"
          >
            Recargar página
          </button>
        </div>
      </div>
    );
  }
};

export default LandingPage;
