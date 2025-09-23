import React from 'react';
import type { MissionPanelProps } from '../../types/index';
import './MissionPanel.css';

const MissionPanel: React.FC<MissionPanelProps> = ({
  activeMissions,
  unlockedPowers,
  className = ''
}) => {
  const getMissionTypeLabel = (planetType: string) => {
    switch (planetType) {
      case 'earth': return 'Terrestre';
      case 'mars': return 'Marciano';
      case 'moon': return 'Lunar';
      case 'europa': return 'Acuático';
      case 'paracas': return 'Cósmico';
      default: return 'Desconocido';
    }
  };

  const getMissionIcon = (planetType: string) => {
    switch (planetType) {
      case 'earth': return '🌍';
      case 'mars': return '🔴';
      case 'moon': return '🌙';
      case 'europa': return '🛰️';
      case 'paracas': return '🪐';
      default: return '⭐';
    }
  };

  return (
    <div className={`mission-panel ${className}`}>
      {/* Active Missions Section */}
      <div className="mission-panel__section">
        <div className="mission-panel__header">
          <h3 className="mission-panel__title">MISIONES ACTIVAS</h3>
          <div className="mission-panel__subtitle">
            Explora Marte Cultura en Microgravedad
          </div>
        </div>

        <div className="mission-panel__missions">
          {activeMissions.length > 0 ? (
            activeMissions.slice(0, 3).map(mission => (
              <div key={mission.id} className="mission-panel__mission">
                <div className="mission-panel__mission-icon">
                  {getMissionIcon(mission.planetType)}
                </div>
                <div className="mission-panel__mission-info">
                  <h4 className="mission-panel__mission-name">{mission.name}</h4>
                  <p className="mission-panel__mission-desc">{mission.description}</p>
                  <div className="mission-panel__mission-type">
                    {getMissionTypeLabel(mission.planetType)}
                  </div>
                </div>
                <div className="mission-panel__mission-status">
                  <div className="mission-panel__new-badge">NUEVO</div>
                </div>
              </div>
            ))
          ) : (
            <div className="mission-panel__empty">
              <span className="mission-panel__empty-icon">🚀</span>
              <p className="mission-panel__empty-text">No hay misiones activas</p>
            </div>
          )}
        </div>
      </div>

      {/* Unlocked Powers Section */}
      <div className="mission-panel__section">
        <div className="mission-panel__header">
          <h3 className="mission-panel__title">PODERES DESBLOQUEADOS</h3>
        </div>

        <div className="mission-panel__powers">
          {unlockedPowers.length > 0 ? (
            unlockedPowers.slice(0, 2).map((power, index) => (
              <div key={index} className="mission-panel__power">
                <div className="mission-panel__power-icon">
                  <span className="mission-panel__power-symbol">⚡</span>
                </div>
                <div className="mission-panel__power-info">
                  <h4 className="mission-panel__power-name">
                    {power.length > 30 ? `${power.substring(0, 30)}...` : power}
                  </h4>
                  <div className="mission-panel__power-status">
                    <span className="mission-panel__power-badge">DESBLOQUEADO</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mission-panel__empty">
              <span className="mission-panel__empty-icon">🔒</span>
              <p className="mission-panel__empty-text">Completa misiones para desbloquear poderes</p>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="mission-panel__decoration" aria-hidden="true">
        <div className="mission-panel__particle mission-panel__particle--1"></div>
        <div className="mission-panel__particle mission-panel__particle--2"></div>
        <div className="mission-panel__particle mission-panel__particle--3"></div>
      </div>
    </div>
  );
};

export default MissionPanel;