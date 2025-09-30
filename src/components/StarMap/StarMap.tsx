import React, { useState, useEffect, useCallback } from 'react';
import PlanetNode from './PlanetNode';
import UserProfile from '../UserProfile/UserProfile';
import MissionPanel from '../MissionPanel/MissionPanel';
import NavigationBar from '../NavigationBar/NavigationBar';
import ConnectionLines from './ConnectionLines';
import { STAR_MAP_MISSIONS } from '../../data/mission';
import './StarMap.css';
import type { Badge } from '../../types';

interface Mission {
  id: string;
  name: string;
  description: string;
  planetType: 'earth' | 'mars' | 'moon' | 'europa' | 'paracas';
  position: { x: number; y: number };
  isLocked: boolean;
  isCompleted: boolean;
  nasaArticleId: string;
  connections: string[];
}

interface UserProgress {
  level: number;
  completedMissions: string[];
  badges: Badge[];
  currentMission?: string;
}

interface StarMapProps {
  onMissionSelect?: (missionId: string) => void;
  onNavigate?: (route: string) => void;
  userProgress?: UserProgress;
}

const DEFAULT_USER_PROGRESS: UserProgress = {
  level: 5,
  completedMissions: [],
  badges: [],
  currentMission: undefined
};

const StarMap: React.FC<StarMapProps> = ({
  onMissionSelect,
  onNavigate,
  userProgress = DEFAULT_USER_PROGRESS
}) => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [selectedMission, setSelectedMission] = useState<string | null>(null);
  const [activeMissions, setActiveMissions] = useState<Mission[]>([]);
  const [unlockedPowers, setUnlockedPowers] = useState<string[]>([]);

  // Inicializar y actualizar misiones basado en el progreso del usuario
  useEffect(() => {
    const updatedMissions = STAR_MAP_MISSIONS.map(mission => {
      // Primera misión (bone-loss) siempre desbloqueada
      const isFirstMission = mission.id === 'bone-loss';
      
      // Verificar si alguna misión prerequisito está completada
      const hasCompletedPrerequisites = STAR_MAP_MISSIONS.some(prerequisite =>
        prerequisite.connections.includes(mission.id) &&
        userProgress.completedMissions.includes(prerequisite.id)
      );

      // Verificar si esta misión está completada
      const isCompleted = userProgress.completedMissions.includes(mission.id);

      return {
        id: mission.id,
        name: mission.name,
        description: mission.description,
        planetType: mission.planetType,
        position: mission.position,
        nasaArticleId: mission.nasaArticleId || '',
        connections: mission.connections,
        isLocked: !isFirstMission && !hasCompletedPrerequisites && !isCompleted,
        isCompleted
      };
    });

    setMissions(updatedMissions);

    // Misiones activas (disponibles pero no completadas)
    const active = updatedMissions.filter(mission => 
      !mission.isLocked && !mission.isCompleted
    );
    setActiveMissions(active);

    // Poderes desbloqueados
    const powers = userProgress.completedMissions
      .map(missionId => {
        const mission = updatedMissions.find(m => m.id === missionId);
        return mission ? `${mission.name} - ${mission.description}` : '';
      })
      .filter(Boolean);
    setUnlockedPowers(powers);

  }, [userProgress.completedMissions]); // Solo depende de completedMissions

  const handleMissionClick = useCallback((missionId: string) => {
    const mission = missions.find(m => m.id === missionId);
    
    if (!mission) return;
    
    if (mission.isLocked) {
      console.log(`Misión ${mission.name} está bloqueada`);
      return;
    }

    setSelectedMission(missionId);
    onMissionSelect?.(missionId);
  }, [missions, onMissionSelect]);

  const handleNavigation = useCallback((route: string) => {
    onNavigate?.(route);
  }, [onNavigate]);

  return (
    <div className="star-map">
      <div className="star-map__starfield">
        <div className="star-map__nebula star-map__nebula--purple"></div>
        <div className="star-map__nebula star-map__nebula--blue"></div>
        <div className="star-map__nebula star-map__nebula--orange"></div>
        {Array.from({ length: 200 }, (_, i) => (
          <div
            key={i}
            className="star-map__star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <UserProfile
        level={userProgress.level}
        userName="Cadete Cósmico"
        badges={userProgress.badges}
        className="star-map__user-profile"
      />

      <MissionPanel
        activeMissions={activeMissions}
        unlockedPowers={unlockedPowers}
        className="star-map__mission-panel"
      />

      <ConnectionLines
        missions={missions}
        className="star-map__connections"
      />

      <div className="star-map__nodes">
        {missions.map(mission => (
          <PlanetNode
            key={mission.id}
            mission={mission}
            isSelected={selectedMission === mission.id}
            onClick={() => handleMissionClick(mission.id)}
            style={{
              left: `${mission.position.x}%`,
              top: `${mission.position.y}%`
            }}
          />
        ))}
      </div>

      <NavigationBar
        onNavigate={handleNavigation}
        activeSection="starmap"
        className="star-map__navigation"
      />

      <div className="star-map__floating-elements">
        <div className="star-map__cosmic-dust star-map__cosmic-dust--1"></div>
        <div className="star-map__cosmic-dust star-map__cosmic-dust--2"></div>
        <div className="star-map__cosmic-dust star-map__cosmic-dust--3"></div>
      </div>
    </div>
  );
};

export default StarMap;