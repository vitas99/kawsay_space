import React, { useState } from 'react';
import type { Astronaut } from '../../types';
import './AstronautPanel.css';

interface AstronautPanelProps {
  selectedAstronaut?: number;
  onAstronautSelect?: (id: number) => void;
}

const AstronautPanel: React.FC<AstronautPanelProps> = ({ 
  selectedAstronaut: externalSelected,
  onAstronautSelect 
}) => {
  const [internalSelected, setInternalSelected] = useState<number>(0);
  const selectedAstronaut = externalSelected ?? internalSelected;
  
  const astronauts: Astronaut[] = [
    { id: 0, name: 'Alex', color: '#4CAF50', avatar: '👨‍🚀' },
    { id: 1, name: 'Maya', color: '#2196F3', avatar: '👩‍🚀' },
    { id: 2, name: 'Carlos', color: '#FF9800', avatar: '👨‍🚀' },
    { id: 3, name: 'Sofia', color: '#E91E63', avatar: '👩‍🚀' },
    { id: 4, name: 'Diego', color: '#9C27B0', avatar: '👨‍🚀' }
  ];

  const handleAstronautSelect = (id: number): void => {
    if (onAstronautSelect) {
      onAstronautSelect(id);
    } else {
      setInternalSelected(id);
    }
  };

  return (
    <div className="astronaut-panel">
      <div className="panel-header">
        <button 
          className="nav-button"
          aria-label="Navegar hacia atrás"
          title="Ir atrás"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      
      <div className="main-astronaut">
        <div 
          className={`astronaut-avatar main astronaut-${selectedAstronaut}`}
          data-astronaut-color={astronauts[selectedAstronaut].color}
        >
          <div className="avatar-inner">
            <span className="avatar-emoji" role="img" aria-label={`Avatar de ${astronauts[selectedAstronaut].name}`}>
              {astronauts[selectedAstronaut].avatar}
            </span>
            <div className="helmet-reflection"></div>
          </div>
          <div className="astronaut-suit">
            <div className="suit-detail"></div>
            <div className="suit-badge">NASA</div>
          </div>
        </div>
        <div className="astronaut-name">{astronauts[selectedAstronaut].name}</div>
      </div>
      
      <div className="astronaut-selection" role="group" aria-label="Seleccionar astronauta">
        {astronauts.map((astronaut) => {
          const isSelected = selectedAstronaut === astronaut.id;
          return (
            <button
              key={astronaut.id}
              className={`astronaut-option astronaut-option-${astronaut.id} ${isSelected ? 'active' : ''}`}
              onClick={() => handleAstronautSelect(astronaut.id)}
              data-astronaut-color={astronaut.color}
              aria-label={`Seleccionar astronauta ${astronaut.name}`}
              aria-current={isSelected ? "true" : undefined}
              title={`Seleccionar ${astronaut.name}`}
            >
              <div className="option-avatar">
                <span role="img" aria-label={`Avatar de ${astronaut.name}`}>
                  {astronaut.avatar}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AstronautPanel;