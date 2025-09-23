import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import StarMap from '../../components/StarMap/StarMap';
import { createUserProgress } from '../../types/index';
import type { UserProgress} from '../../types/index';
import './StarMapPage.css';

const StarMapPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Estado del usuario - en una aplicación real vendría de un contexto global o API
  const [userProgress] = useState<UserProgress>(() => {
    // Intentar cargar desde localStorage o usar valores por defecto
    const saved = localStorage.getItem('kawsayspace-user-progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.warn('Error loading user progress:', error);
      }
    }
    
    // Progreso inicial con algunas misiones desbloqueadas para demostración
    return {
      ...createUserProgress(),
      level: 5,
      experience: 450,
      completedMissions: [], // Comenzar sin misiones completadas
      badges: []
    };
  });

  const handleMissionSelect = useCallback((missionId: string) => {
    console.log('Mission selected:', missionId);
    
    // Aquí podrías navegar a una página específica de la misión
    // Por ejemplo: navigate(`/mission/${missionId}`);
    
    // Por ahora, solo mostrar un mensaje
    alert(`Iniciando misión: ${missionId}\n\nEn una implementación completa, esto abriría el artículo de NASA y el cuestionario correspondiente.`);
  }, []);

  const handleNavigation = useCallback((route: string) => {
    console.log('Navigating to:', route);
    
    switch (route) {
      case 'starmap':
        // Ya estamos en el mapa estelar
        break;
        
      case 'laboratory':
        // Navegar al laboratorio virtual (ruta a implementar)
        alert('Laboratorio Virtual - Próximamente disponible');
        break;
        
      case 'profile':
        // Navegar al perfil del usuario
        alert('Perfil de Usuario - Próximamente disponible');
        break;
        
      case 'comic':
        // Navegar a los cómics espaciales
        alert('Cómic Espacial - Próximamente disponible');
        break;
        
      default:
        console.warn('Unknown route:', route);
    }
  }, []);

  const handleBackToDashboard = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div className="star-map-page">
      {/* Botón de regreso al dashboard */}
      <button 
        className="star-map-page__back-button"
        onClick={handleBackToDashboard}
        aria-label="Regresar al panel principal"
        title="Regresar al panel principal"
      >
        <span className="star-map-page__back-icon">←</span>
        <span className="star-map-page__back-text">Dashboard</span>
      </button>

      {/* Componente principal del mapa estelar */}
      <StarMap
        onMissionSelect={handleMissionSelect}
        onNavigate={handleNavigation}
        userProgress={userProgress}
      />

      {/* Indicador de carga inicial (opcional) */}
      <div className="star-map-page__loader" id="initial-loader" style={{ display: 'none' }}>
        <div className="star-map-page__loader-content">
          <div className="star-map-page__loader-spinner"></div>
          <p>Cargando mapa estelar...</p>
        </div>
      </div>
    </div>
  );
};

export default StarMapPage;