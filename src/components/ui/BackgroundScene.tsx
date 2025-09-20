import React from 'react';
import './BackgroundScene.css';

const BackgroundScene: React.FC = () => {
  // Array para acumular reglas CSS dinámicas
  const starStyles: string[] = [];

  // Generamos 100 estrellas con posiciones y animaciones aleatorias
  const stars = [...Array(100)].map((_, i) => {
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const delay = `${Math.random() * 3}s`;
    const duration = `${2 + Math.random() * 3}s`;

    // Creamos una clase dinámica para cada estrella
    starStyles.push(`
      .star-${i} {
        left: ${left};
        top: ${top};
        animation-delay: ${delay};
        animation-duration: ${duration};
      }
    `);

    return <div key={i} className={`star star-${i}`} />;
  });

  return (
    <div className="background-scene">
      {/* Reglas dinámicas inyectadas */}
      <style>{starStyles.join('\n')}</style>

      {/* Estrellas */}
      <div className="stars">{stars}</div>

      {/* Nave espacial */}
      <div className="spaceship">
        <div className="ship-body">🛸</div>
        <div className="ship-trail"></div>
      </div>

      {/* Montañas */}
      <div className="mountains">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
      </div>

      {/* Gradiente del horizonte */}
      <div className="horizon-gradient"></div>
    </div>
  );
};

export default BackgroundScene;
