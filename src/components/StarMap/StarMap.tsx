import React, { useState, useEffect, useCallback } from 'react';
import PlanetNode from './PlanetNode';
import UserProfile from '../UserProfile/UserProfile';
import MissionPanel from '../MissionPanel/MissionPanel';
import NavigationBar from '../NavigationBar/NavigationBar';
import ConnectionLines from './ConnectionLines';
import './StarMap.css';
import type { Badge } from '../../types';

// Types
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

const DEFAULT_MISSIONS: Mission[] = [
  {
    id: 'earth-start',
    name: 'ÓRBITA TERRESTRE',
    description: 'Inicio de Misión',
    planetType: 'earth',
    position: { x: 50, y: 85 },
    isLocked: false,
    isCompleted: false,
    nasaArticleId: 'earth-orbit-basics',
    connections: ['moon-station', 'mars-mission']
  },
  {
    id: 'moon-station',
    name: 'LUNA',
    description: 'Estación Alpaca',
    planetType: 'moon',
    position: { x: 75, y: 60 },
    isLocked: true,
    isCompleted: false,
    nasaArticleId: 'lunar-exploration',
    connections: ['mars-mission', 'luna-gamma']
  },
  {
    id: 'mars-mission',
    name: 'MARTE',
    description: 'Chacra Especial',
    planetType: 'mars',
    position: { x: 45, y: 35 },
    isLocked: true,
    isCompleted: false,
    nasaArticleId: 'mars-exploration',
    connections: ['europa-biolab', 'paracas-planet']
  },
  {
    id: 'luna-gamma',
    name: 'LUNA',
    description: 'Estación Alpaca',
    planetType: 'moon',
    position: { x: 25, y: 75 },
    isLocked: true,
    isCompleted: false,
    nasaArticleId: 'lunar-gamma-station',
    connections: ['europa-biolab']
  },
  {
    id: 'europa-biolab',
    name: 'EUROPA',
    description: 'Biolab Acuático',
    planetType: 'europa',
    position: { x: 85, y: 45 },
    isLocked: true,
    isCompleted: false,
    nasaArticleId: 'europa-ocean-life',
    connections: []
  },
  {
    id: 'paracas-planet',
    name: 'PLANETA PARACAS',
    description: 'Tejidos Cósmicos',
    planetType: 'paracas',
    position: { x: 15, y: 25 },
    isLocked: true,
    isCompleted: false,
    nasaArticleId: 'exoplanet-discovery',
    connections: ['paracas-planet-2']
  },
  {
    id: 'paracas-planet-2',
    name: 'PLANETA PARACAS',
    description: 'Tejidos Cósmicos',
    planetType: 'paracas',
    position: { x: 85, y: 15 },
    isLocked: true,
    isCompleted: false,
    nasaArticleId: 'exoplanet-advanced',
    connections: []
  }
];

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
  const [missions, setMissions] = useState<Mission[]>(DEFAULT_MISSIONS);
  const [selectedMission, setSelectedMission] = useState<string | null>(null);
  const [activeMissions, setActiveMissions] = useState<Mission[]>([]);
  const [unlockedPowers, setUnlockedPowers] = useState<string[]>([]);

  // Update mission lock states based on user progress
  useEffect(() => {
    const updatedMissions = missions.map(mission => {
      // First mission is always unlocked
      if (mission.id === 'earth-start') {
        return { ...mission, isLocked: false };
      }

      // Check if any prerequisite missions are completed
      const hasCompletedPrerequisites = missions.some(prerequisite =>
        prerequisite.connections.includes(mission.id) &&
        userProgress.completedMissions.includes(prerequisite.id)
      );

      // Check if this mission is completed
      const isCompleted = userProgress.completedMissions.includes(mission.id);

      return {
        ...mission,
        isLocked: !hasCompletedPrerequisites && !isCompleted,
        isCompleted
      };
    });

    setMissions(updatedMissions);

    // Set active missions (available but not completed)
    const active = updatedMissions.filter(mission => 
      !mission.isLocked && !mission.isCompleted
    );
    setActiveMissions(active);

    // Set unlocked powers based on completed missions
    const powers = userProgress.completedMissions.map(missionId => {
      const mission = updatedMissions.find(m => m.id === missionId);
      return mission ? `${mission.name} - ${mission.description}` : '';
    }).filter(Boolean);
    setUnlockedPowers(powers);

  }, [userProgress.completedMissions]);

  const handleMissionClick = useCallback((missionId: string) => {
    const mission = missions.find(m => m.id === missionId);
    
    if (!mission) return;
    
    if (mission.isLocked) {
      // Show locked message or play locked sound
      console.log(`Mission ${mission.name} is locked`);
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
      {/* Starfield Background */}
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

      {/* User Profile */}
      <UserProfile
        level={userProgress.level}
        userName="Cadete Cósmico"
        badges={userProgress.badges}
        className="star-map__user-profile"
      />

      {/* Mission Panel */}
      <MissionPanel
        activeMissions={activeMissions}
        unlockedPowers={unlockedPowers}
        className="star-map__mission-panel"
      />

      {/* Connection Lines */}
      <ConnectionLines
        missions={missions}
        className="star-map__connections"
      />

      {/* Planet Nodes */}
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

      {/* Navigation Bar */}
      <NavigationBar
        onNavigate={handleNavigation}
        activeSection="starmap"
        className="star-map__navigation"
      />

      {/* Floating UI Elements */}
      <div className="star-map__floating-elements">
        <div className="star-map__cosmic-dust star-map__cosmic-dust--1"></div>
        <div className="star-map__cosmic-dust star-map__cosmic-dust--2"></div>
        <div className="star-map__cosmic-dust star-map__cosmic-dust--3"></div>
      </div>
    </div>
  );
};

export default StarMap;