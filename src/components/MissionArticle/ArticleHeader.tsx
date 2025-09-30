import React from 'react';
import { STAR_MAP_MISSIONS } from '../../data/missions';
import './ArticleHeader.css';

interface ArticleHeaderProps {
  missionId: string;
  onBack: () => void;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ missionId, onBack }) => {
  // Datos de ejemplo del usuario - en producción vendría del contexto/estado global
  const userLevel = 5;
  const userName = "Cadete Cósmico";

  // Obtener información de la misión actual
  const currentMission = STAR_MAP_MISSIONS.find(m => m.id === missionId);
  const missionName = currentMission?.name || 'MISIÓN DESCONOCIDA';
  const missionDescription = currentMission?.description || '';

  return (
    <header className="article-header">
      <div className="article-header__container">
        {/* Botón de regreso */}
        <button 
          className="article-header__back-button"
          onClick={onBack}
          aria-label="Regresar al mapa estelar"
        >
          <span className="article-header__back-icon">←</span>
          <span className="article-header__back-text">MAPA ESTELAR</span>
        </button>

        {/* Perfil de usuario */}
        <div className="article-header__user">
          <div className="article-header__avatar">
            <div className="article-header__avatar-image">
              <span className="article-header__avatar-icon">👨‍🚀</span>
            </div>
            <div className="article-header__level-badge">
              NIVEL {userLevel}
            </div>
          </div>
          <div className="article-header__user-info">
            <div className="article-header__user-name">{userName}</div>
            <div className="article-header__user-title">CADETE CÓSMICO</div>
          </div>
        </div>

        {/* Badges/Insignias */}
        <div className="article-header__badges">
          <div className="article-header__badge article-header__badge--shield">
            🛡️
          </div>
          <div className="article-header__badge article-header__badge--star">
            ⭐
          </div>
          <div className="article-header__badge article-header__badge--leaf">
            🍃
          </div>
        </div>

        {/* Misión/Artículo actual */}
        <div className="article-header__mission-tag">
          <span className="article-header__mission-icon">📄</span>
          <div className="article-header__mission-info">
            <span className="article-header__mission-text">{missionName}</span>
            {missionDescription && (
              <span className="article-header__mission-subtitle">{missionDescription}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;