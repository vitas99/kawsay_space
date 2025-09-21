import React, { useEffect, useState } from 'react';
import './PlanetEarth.css';

interface PlanetEarthProps {
  size?: number;
  rotationSpeed?: number;
  showAtmosphere?: boolean;
  showClouds?: boolean;
  showRocket?: boolean;
  className?: string;
}

const PlanetEarth: React.FC<PlanetEarthProps> = ({
  size = 200,
  rotationSpeed = 30, // seconds per full rotation
  showAtmosphere = true,
  showClouds = true,
  showRocket = true,
  className = ''
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, (rotationSpeed * 1000) / 360); // Calculate interval for smooth rotation

    return () => clearInterval(interval);
  }, [rotationSpeed]);

  const planetStyle = {
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotateY(${rotation}deg)`,
    animationDuration: `${rotationSpeed}s`
  };

  return (
    <div className={`planet-earth ${className}`} style={planetStyle}>
      {showAtmosphere && <div className="planet-earth__atmosphere" />}
      <div className="planet-earth__body">
        <div className="planet-earth__surface" />
        <div className="planet-earth__continents" />
        <div className="planet-earth__oceans" />
        {showClouds && <div className="planet-earth__clouds" />}
        <div className="planet-earth__terminator" />
      </div>
      {showRocket && (
        <div className="planet-earth__rocket-orbit">
          <div className="planet-earth__rocket">🚀</div>
        </div>
      )}
      <div className="planet-earth__ring planet-earth__ring--1" />
      <div className="planet-earth__ring planet-earth__ring--2" />
      <div className="planet-earth__ring planet-earth__ring--3" />
    </div>
  );
};

export default PlanetEarth; // Asegúrate de que esta línea esté presente