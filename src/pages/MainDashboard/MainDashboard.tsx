import React, { useState, useEffect } from 'react';
import StarField from '../../components/StarField/StarField';
import GlassPanel from '../../components/GlassPanel/GlassPanel';
import PlanetEarth from '../../components/PlanetEarth/PlanetEarth';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import './MainDashboard.css';

// Import types
import { type Mission, type Astronaut } from '../../types/index';

interface MainDashboardProps {
  onNavigate?: (route: string) => void;
  userName?: string;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ 
  onNavigate,
  userName = "Futuro Explorador"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);

  const missions: Mission[] = [
    {
      id: 1,
      title: "Misión Apollo",
      subtitle: "Explora la Luna",
      icon: "🌙",
      type: "new",
      badge: "NUEVO",
      color: "#00D4FF"
    },
    {
      id: 2,
      title: "Estación Espacial",
      subtitle: "Vive en el espacio",
      icon: "🛰️",
      type: "power",
      badge: "POWER",
      color: "#FF9500"
    },
    {
      id: 3,
      title: "Viaje a Marte",
      subtitle: "Planeta rojo",
      icon: "🚀",
      type: "completed",
      badge: "COMPLETADO",
      color: "#4ECDC4"
    }
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 500);
    const timer2 = setTimeout(() => setShowWelcomeAnimation(false), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleNavigation = (route: string) => {
    setSelectedSection(route);
    if (onNavigate) onNavigate(route);
  };

  const handleEnterExploration = () => {
    handleNavigation('missions');
  };

  return (
    <div className="main-dashboard">
      <StarField starCount={250} className="main-dashboard__starfield" />
      <GlassPanel
        curved
        animated
        glowEffect
        borderColor="cyan"
        size="fullscreen"
        className={`main-dashboard__panel ${isLoaded ? 'main-dashboard__panel--loaded' : ''}`}
      >
        <div className="main-dashboard__content">
          <div className="main-dashboard__nav-left">
            <NavigationButton icon="👤" text="PERFIL" variant="profile" size="large" active={selectedSection === 'profile'} onClick={() => handleNavigation('profile')} tooltip="Ver mi perfil de astronauta" />
            <NavigationButton icon="⚙️" text="LÓGICA" variant="logic" size="large" active={selectedSection === 'settings'} onClick={() => handleNavigation('settings')} tooltip="Configuración del sistema" />
            <NavigationButton icon="👥" text="EQUIPO" variant="account" size="large" active={selectedSection === 'team'} onClick={() => handleNavigation('team')} tooltip="Mi equipo de exploración" />
          </div>
          <div className="main-dashboard__center">
            <div className="main-dashboard__planet-container">
              <PlanetEarth size={220} rotationSpeed={25} showAtmosphere showClouds showRocket className="main-dashboard__planet" />
            </div>
            <div className="main-dashboard__branding">
              <div className="main-dashboard__nasa-logo">NASA</div>
              <div className="main-dashboard__nasa-subtitle">NATIONAL AERONAUTICS<br />AND SPACE ADMINISTRATION</div>
            </div>
            <div className={`main-dashboard__welcome ${showWelcomeAnimation ? 'main-dashboard__welcome--animated' : ''}`}>
              <h1 className="main-dashboard__title">¡HOLA, FUTURO<br /><span className="main-dashboard__title-highlight">EXPLORADOR!</span></h1>
              <p className="main-dashboard__subtitle">WELCOME, EXPLORER</p>
              <p className="main-dashboard__ready-text">¡ESTOY LISTO PARA LA AVENTURA!</p>
            </div>
            <button className="main-dashboard__enter-btn" onClick={handleEnterExploration}>
              <span className="main-dashboard__enter-btn-text">ENTRAR</span>
              <div className="main-dashboard__enter-btn-glow"></div>
            </button>
          </div>
          <div className="main-dashboard__nav-right">
            <NavigationButton text="INFO" variant="info" size="large" active={selectedSection === 'info'} onClick={() => handleNavigation('info')} tooltip="Información del sistema" />
            <NavigationButton icon="ℹ️" variant="question" size="large" active={selectedSection === 'about'} onClick={() => handleNavigation('about')} tooltip="Acerca de la misión" />
            <NavigationButton icon="?" variant="question" size="large" active={selectedSection === 'faq'} onClick={() => handleNavigation('faq')} tooltip="Preguntas frecuentes" />
            <NavigationButton text="HELP" variant="help" size="large" active={selectedSection === 'help'} onClick={() => handleNavigation('help')} tooltip="Centro de ayuda" />
          </div>
        </div>
        <div className="main-dashboard__missions-preview">
          <div className="main-dashboard__missions-title">MISIONES DISPONIBLES</div>
          <div className="main-dashboard__missions-grid">
            {missions.map((mission) => (
              <div key={mission.id} className={`main-dashboard__mission-card main-dashboard__mission-card--${mission.type}`} onClick={() => handleNavigation(`mission-${mission.id}`)}>
                <div className="main-dashboard__mission-icon">{mission.icon}</div>
                <div className="main-dashboard__mission-info">
                  <h4 className="main-dashboard__mission-title">{mission.title}</h4>
                  <p className="main-dashboard__mission-subtitle">{mission.subtitle}</p>
                </div>
                <div className="main-dashboard__mission-badge">{mission.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
      <div className="main-dashboard__status">
        <div className="main-dashboard__status-item">
          <span className="main-dashboard__status-label">SISTEMA</span>
          <span className="main-dashboard__status-value main-dashboard__status-value--online">ONLINE</span>
        </div>
        <div className="main-dashboard__status-item">
          <span className="main-dashboard__status-label">CONEXIÓN</span>
          <span className="main-dashboard__status-value main-dashboard__status-value--stable">ESTABLE</span>
        </div>
        <div className="main-dashboard__status-item">
          <span className="main-dashboard__status-label">EXPLORADOR</span>
          <span className="main-dashboard__status-value main-dashboard__status-value--ready">{userName}</span>
        </div>
      </div>
      <div className="main-dashboard__floating-elements">
        <div className="main-dashboard__floating-particle main-dashboard__floating-particle--1"></div>
        <div className="main-dashboard__floating-particle main-dashboard__floating-particle--2"></div>
        <div className="main-dashboard__floating-particle main-dashboard__floating-particle--3"></div>
      </div>
    </div>
  );
};

export default MainDashboard; // Asegúrate de que esta línea esté presente y sin errores