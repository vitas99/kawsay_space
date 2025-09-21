import React from 'react';

const BackgroundScene: React.FC = () => {
  // Sistema de estrellas más sofisticado
  const generateStarField = () => {
    return [...Array(300)].map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 70; // Matches .stars height: 70%
      const size = i % 5 === 4 ? 1.5 : i % 3 === 0 ? 4.5 : 3; // 1.5x of 1px, 3px, 2px
      const background = i % 5 === 4 ? '#ffd700' : i % 3 === 0 ? '#87ceeb' : 'white';
      const animationDelay = Math.random() * 2;

      return (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            background,
            animationDelay: `${animationDelay}s`
          }}
        />
      );
    });
  };

  // Partículas para el rastro del caballito
  const wakeParticles = [...Array(40)].map((_, i) => {
    const delay = i * 0.06;
    const offsetX = -i * 15 - Math.sin(i * 0.4) * 18; // 1.5x 10, 12
    const offsetY = Math.sin(i * 0.6) * 27 + Math.cos(i * 0.3) * 15; // 1.5x 18, 10
    const scale = 1 - i * 0.02;

    return (
      <div
        key={i}
        className="wake-particle"
        style={{
          left: `${offsetX}px`,
          top: `${offsetY}px`,
          animationDelay: `${delay}s`,
          transform: `scale(${scale})`
        }}
      />
    );
  });

  // Nubes atmosféricas
  const clouds = [...Array(8)].map((_, i) => {
    const left = Math.random() * 120 - 10;
    const top = 50 + Math.random() * 30;
    const scale = 0.6 + Math.random() * 0.8;
    const duration = 40 + Math.random() * 20;
    const delay = Math.random() * 10;

    return (
      <div
        key={i}
        className="cloud"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          transform: `scale(${scale})`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`
        }}
      />
    );
  });

  // Constelaciones incas
  const incaConstellations = [
    {
      name: 'chakana',
      stars: [
        { x: 75, y: 15, size: 3 },
        { x: 78, y: 18, size: 2.5 },
        { x: 72, y: 18, size: 2.5 },
        { x: 75, y: 21, size: 3 },
        { x: 75, y: 18, size: 2 }
      ],
      connections: [
        [0, 1], [0, 2], [0, 3], [1, 3], [2, 3], [0, 4], [1, 4], [2, 4], [3, 4]
      ]
    },
    {
      name: 'llama',
      stars: [
        { x: 65, y: 25, size: 2 },
        { x: 68, y: 27, size: 2.5 },
        { x: 70, y: 30, size: 2 },
        { x: 67, y: 32, size: 2 },
        { x: 64, y: 30, size: 1.5 },
        { x: 62, y: 28, size: 2 }
      ],
      connections: [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]
      ]
    },
    {
      name: 'condor',
      stars: [
        { x: 25, y: 10, size: 2.5 },
        { x: 20, y: 12, size: 2 },
        { x: 30, y: 12, size: 2 },
        { x: 25, y: 15, size: 2 },
        { x: 22, y: 17, size: 1.5 },
        { x: 28, y: 17, size: 1.5 }
      ],
      connections: [
        [0, 1], [0, 2], [0, 3], [3, 4], [3, 5], [1, 4], [2, 5]
      ]
    },
    {
      name: 'partridge',
      stars: [
        { x: 45, y: 20, size: 2 },
        { x: 48, y: 22, size: 1.5 },
        { x: 50, y: 25, size: 2 },
        { x: 47, y: 27, size: 1.5 },
        { x: 43, y: 25, size: 1.5 }
      ],
      connections: [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 0]
      ]
    },
    {
      name: 'serpent',
      stars: [
        { x: 15, y: 25, size: 1.5 },
        { x: 18, y: 28, size: 2 },
        { x: 22, y: 30, size: 1.5 },
        { x: 26, y: 32, size: 2 },
        { x: 30, y: 35, size: 1.5 },
        { x: 34, y: 37, size: 2 }
      ],
      connections: [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
      ]
    }
  ];

  // Generar estrellas de constelaciones
  const constellationElements = incaConstellations.map((constellation) => {
    const stars = constellation.stars.map((star, starIndex) => (
      <div
        key={`${constellation.name}-star-${starIndex}`}
        className={`constellation-star ${constellation.name}-star`}
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`
        }}
      />
    ));

    const connections = constellation.connections.map((connection, lineIndex) => {
      const [start, end] = connection;
      const startStar = constellation.stars[start];
      const endStar = constellation.stars[end];

      const deltaX = endStar.x - startStar.x;
      const deltaY = endStar.y - startStar.y;
      const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

      return (
        <div
          key={`${constellation.name}-line-${lineIndex}`}
          className={`constellation-line ${constellation.name}-line`}
          style={{
            left: `${startStar.x}%`,
            top: `${startStar.y}%`,
            width: `${length}%`,
            transform: `rotate(${angle}deg)`,
            transformOrigin: '0 50%'
          }}
        />
      );
    });

    return (
      <div key={constellation.name} className={`constellation ${constellation.name}`}>
        {stars}
        {connections}
      </div>
    );
  });

  // Call generateStarField to create the stars array
  const stars = generateStarField();

  return (
    <div className="background-scene">
      <style>{`
        .background-scene {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(
            to bottom,
            #0d1b2a 0%,
            #1b2951 30%,
            #415a77 60%,
            #778da9 80%,
            #e0e1dd 100%
          );
          overflow: hidden;
          z-index: -1;
        }

        /* Estrellas */
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 70%;
          z-index: 2;
        }

        .star {
          position: absolute;
          border-radius: 50%;
          animation: twinkle 2s infinite alternate;
        }

        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }

        /* Montañas */
        .mountains {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%; /* 1.5x 40% */
          z-index: 1;
        }

        .mountain {
          position: absolute;
          bottom: 0;
        }

        .mountain-1 {
          left: 0;
          width: 0;
          height: 0;
          border-left: 300px solid transparent; /* 1.5x 200px */
          border-right: 450px solid transparent; /* 1.5x 300px */
          border-bottom: 420px solid rgba(25, 25, 112, 0.8); /* 1.5x 280px */
        }

        .mountain-2 {
          left: 30%;
          width: 0;
          height: 0;
          border-left: 270px solid transparent; /* 1.5x 180px */
          border-right: 375px solid transparent; /* 1.5x 250px */
          border-bottom: 480px solid rgba(25, 25, 112, 0.9); /* 1.5x 320px */
        }

        .mountain-3 {
          right: 0;
          width: 0;
          height: 0;
          border-left: 330px solid transparent; /* 1.5x 220px */
          border-right: 270px solid transparent; /* 1.5x 180px */
          border-bottom: 450px solid rgba(25, 25, 112, 0.7); /* 1.5x 300px */
        }

        /* Gradiente del horizonte */
        .horizon-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 300px; /* 1.5x 200px */
          background: linear-gradient(
            to top,
            rgba(255, 165, 0, 0.3) 0%,
            rgba(255, 69, 0, 0.2) 30%,
            rgba(147, 0, 211, 0.1) 70%,
            transparent 100%
          );
          z-index: 0;
        }

        /* Nubes atmosféricas */
        .cloud {
          position: absolute;
          width: 120px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          animation: cloud-drift 60s linear infinite;
          filter: blur(1px);
          z-index: 10;
        }

        .cloud::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 20px;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }

        .cloud::after {
          content: '';
          position: absolute;
          top: -10px;
          right: 15px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 50%;
        }

        /* Constelaciones incas */
        .constellation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
        }

        .constellation-star {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 215, 0, 1) 0%, rgba(255, 235, 59, 0.8) 40%, rgba(255, 193, 7, 0.4) 100%);
          border-radius: 50%;
          animation: inca-star-glow 4s ease-in-out infinite alternate;
          box-shadow: 
            0 0 8px rgba(255, 215, 0, 0.8),
            0 0 16px rgba(255, 235, 59, 0.4),
            0 0 24px rgba(255, 193, 7, 0.2);
        }

        .constellation-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(to right, 
            rgba(255, 215, 0, 0.8) 0%, 
            rgba(255, 235, 59, 0.6) 50%, 
            rgba(255, 215, 0, 0.8) 100%
          );
          animation: inca-line-pulse 6s ease-in-out infinite;
          box-shadow: 0 0 4px rgba(255, 215, 0, 0.5);
        }

        .chakana .constellation-star {
          background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 215, 0, 0.9) 30%, rgba(255, 193, 7, 0.5) 100%);
          box-shadow: 
            0 0 12px rgba(255, 255, 255, 0.8),
            0 0 24px rgba(255, 215, 0, 0.6),
            0 0 36px rgba(255, 193, 7, 0.3);
          animation: chakana-sacred-glow 3s ease-in-out infinite alternate;
        }

        .chakana .constellation-line {
          background: linear-gradient(to right, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(255, 215, 0, 0.8) 50%, 
            rgba(255, 255, 255, 0.9) 100%
          );
          height: 1.5px;
          box-shadow: 
            0 0 6px rgba(255, 255, 255, 0.7),
            0 0 12px rgba(255, 215, 0, 0.5);
        }

        .llama .constellation-star {
          background: radial-gradient(circle, rgba(160, 132, 92, 1) 0%, rgba(139, 111, 71, 0.8) 50%, rgba(101, 67, 33, 0.4) 100%);
          box-shadow: 
            0 0 8px rgba(160, 132, 92, 0.6),
            0 0 16px rgba(139, 111, 71, 0.3);
          animation: llama-earth-glow 5s ease-in-out infinite alternate;
        }

        .llama .constellation-line {
          background: linear-gradient(to right, 
            rgba(160, 132, 92, 0.7) 0%, 
            rgba(139, 111, 71, 0.8) 50%, 
            rgba(160, 132, 92, 0.7) 100%
          );
          box-shadow: 0 0 4px rgba(139, 111, 71, 0.4);
        }

        .condor .constellation-star {
          background: radial-gradient(circle, rgba(173, 216, 230, 1) 0%, rgba(135, 206, 235, 0.8) 40%, rgba(70, 130, 180, 0.4) 100%);
          box-shadow: 
            0 0 10px rgba(173, 216, 230, 0.7),
            0 0 20px rgba(135, 206, 235, 0.4);
          animation: condor-sky-glow 4s ease-in-out infinite alternate;
        }

        .condor .constellation-line {
          background: linear-gradient(to right, 
            rgba(173, 216, 230, 0.8) 0%, 
            rgba(135, 206, 235, 0.9) 50%, 
            rgba(173, 216, 230, 0.8) 100%
          );
          box-shadow: 0 0 5px rgba(135, 206, 235, 0.5);
        }

        .partridge .constellation-star {
          background: radial-gradient(circle, rgba(255, 182, 193, 1) 0%, rgba(255, 160, 122, 0.8) 50%, rgba(205, 92, 92, 0.4) 100%);
          box-shadow: 
            0 0 6px rgba(255, 182, 193, 0.6),
            0 0 12px rgba(255, 160, 122, 0.3);
          animation: partridge-gentle-glow 6s ease-in-out infinite alternate;
        }

        .partridge .constellation-line {
          background: linear-gradient(to right, 
            rgba(255, 182, 193, 0.6) 0%, 
            rgba(255, 160, 122, 0.7) 50%, 
            rgba(255, 182, 193, 0.6) 100%
          );
          box-shadow: 0 0 3px rgba(255, 160, 122, 0.4);
        }

        .serpent .constellation-star {
          background: radial-gradient(circle, rgba(152, 251, 152, 1) 0%, rgba(144, 238, 144, 0.8) 40%, rgba(34, 139, 34, 0.4) 100%);
          box-shadow: 
            0 0 8px rgba(152, 251, 152, 0.6),
            0 0 16px rgba(144, 238, 144, 0.3);
          animation: serpent-nature-glow 7s ease-in-out infinite alternate;
        }

        .serpent .constellation-line {
          background: linear-gradient(to right, 
            rgba(152, 251, 152, 0.7) 0%, 
            rgba(144, 238, 144, 0.8) 50%, 
            rgba(152, 251, 152, 0.7) 100%
          );
          box-shadow: 0 0 4px rgba(144, 238, 144, 0.4);
        }

        /* Animaciones específicas para constelaciones incas */
        @keyframes inca-star-glow {
          0% { opacity: 0.7; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes inca-line-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes chakana-sacred-glow {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes llama-earth-glow {
          0% { opacity: 0.6; transform: scale(0.95); }
          100% { opacity: 0.9; transform: scale(1.05); }
        }

        @keyframes condor-sky-glow {
          0% { opacity: 0.7; transform: scale(0.9) rotate(0deg); }
          100% { opacity: 1; transform: scale(1.1) rotate(5deg); }
        }

        @keyframes partridge-gentle-glow {
          0% { opacity: 0.5; transform: scale(0.9); }
          100% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes serpent-nature-glow {
          0% { opacity: 0.6; transform: scale(0.95) rotateZ(0deg); }
          100% { opacity: 0.9; transform: scale(1.05) rotateZ(2deg); }
        }

        /* Caballito de totora con cóndor */
        .totora-rider {
          position: absolute;
          top: 22%;
          right: 8%;
          animation: epic-journey 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          z-index: 15;
          filter: drop-shadow(0 0 37.5px rgba(255, 140, 0, 0.3));
        }

        .rider-container {
          position: relative;
          animation: water-bobbing 2s ease-in-out infinite;
        }

        /* Cóndor andino realista */
        .condor {
          position: absolute;
          top: -67.5px;
          left: 22.5px;
          z-index: 17;
          animation: condor-soaring 2s ease-in-out infinite;
          filter: 
            drop-shadow(0 0 30px rgba(0, 0, 0, 0.6))
            drop-shadow(0 0 60px rgba(139, 69, 19, 0.3));
          transform-origin: center;
        }

        .condor-body {
          width: 37.5px;
          height: 60px;
          background: linear-gradient(180deg, 
            #1a1a1a 0%, 
            #2d2d2d 20%, 
            #000000 60%, 
            #1a1a1a 100%
          );
          border-radius: 50% 50% 60% 60%;
          position: relative;
          box-shadow: 
            0 0 22.5px rgba(0, 0, 0, 0.5),
            inset 0 7.5px 15px rgba(255, 255, 255, 0.1);
        }

        .condor-head {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 22.5px;
          background: linear-gradient(180deg, 
            #ff6b47 0%, 
            #ff4757 40%, 
            #ff3742 100%
          );
          border-radius: 60% 60% 40% 40%;
          box-shadow: 0 0 12px rgba(255, 71, 87, 0.4);
        }

        .condor-beak {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 4.5px solid transparent;
          border-right: 4.5px solid transparent;
          border-top: 12px solid #2c2c54;
          filter: drop-shadow(0 1.5px 3px rgba(0, 0, 0, 0.3));
        }

        .condor-collar {
          position: absolute;
          top: 7.5px;
          left: 50%;
          transform: translateX(-50%);
          width: 42px;
          height: 12px;
          background: linear-gradient(180deg, 
            #ffffff 0%, 
            #f1f2f6 50%, 
            #ddd 100%
          );
          border-radius: 50%;
          box-shadow: 
            0 0 15px rgba(255, 255, 255, 0.6),
            inset 0 3px 6px rgba(0, 0, 0, 0.1);
        }

        .condor-wing-left {
          position: absolute;
          top: 12px;
          left: -67.5px;
          width: 75px;
          height: 30px;
          background: linear-gradient(45deg, 
            #1a1a1a 0%, 
            #2d2d2d 30%, 
            #000000 70%, 
            #1a1a1a 100%
          );
          border-radius: 50% 10% 80% 20%;
          transform-origin: right center;
          animation: wing-flap-left 2s ease-in-out infinite;
          box-shadow: 
            0 0 22.5px rgba(0, 0, 0, 0.4),
            inset 0 4.5px 12px rgba(255, 255, 255, 0.05);
        }

        .condor-wing-right {
          position: absolute;
          top: 12px;
          right: -67.5px;
          width: 75px;
          height: 30px;
          background: linear-gradient(-45deg, 
            #1a1a1a 0%, 
            #2d2d2d 30%, 
            #000000 70%, 
            #1a1a1a 100%
          );
          border-radius: 10% 50% 20% 80%;
          transform-origin: left center;
          animation: wing-flap-right 2s ease-in-out infinite;
          box-shadow: 
            0 0 22.5px rgba(0, 0, 0, 0.4),
            inset 0 4.5px 12px rgba(255, 255, 255, 0.05);
        }

        .wing-feathers-left {
          position: absolute;
          top: 3px;
          left: -12px;
          width: 52.5px;
          height: 4.5px;
          background: 
            repeating-linear-gradient(90deg, 
              #000000 0px, 
              #1a1a1a 4.5px, 
              #2d2d2d 9px, 
              #1a1a1a 13.5px
            );
          border-radius: 3px;
          opacity: 0.8;
        }

        .wing-feathers-right {
          position: absolute;
          top: 3px;
          right: -12px;
          width: 52.5px;
          height: 4.5px;
          background: 
            repeating-linear-gradient(-90deg, 
              #000000 0px, 
              #1a1a1a 4.5px, 
              #2d2d2d 9px, 
              #1a1a1a 13.5px
            );
          border-radius: 3px;
          opacity: 0.8;
        }

        .condor-tail {
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 18px;
          background: linear-gradient(180deg, 
            #1a1a1a 0%, 
            #000000 100%
          );
          border-radius: 0 0 60% 60%;
          box-shadow: inset 0 3px 6px rgba(255, 255, 255, 0.05);
        }

        /* Caballito de totora auténtico peruano */
        .totora-boat {
          width: 195px;
          height: 27px;
          position: relative;
          background: linear-gradient(to right, 
            #CD853F 0%,
            #DAA520 8%,
            #F4A460 18%,
            #FFD700 30%,
            #FFF8DC 45%,
            #FFEB3B 55%,
            #FFD700 70%,
            #F4A460 82%,
            #DAA520 92%,
            #CD853F 100%
          );
          border-radius: 0 90px 90px 0;
          transform: perspective(120px) rotateX(8deg);
          box-shadow: 
            0 12px 37.5px rgba(205, 133, 63, 0.5),
            0 6px 22.5px rgba(255, 215, 0, 0.3),
            inset 0 4.5px 12px rgba(255, 248, 220, 0.4),
            inset 0 -4.5px 12px rgba(205, 133, 63, 0.6);
          border: 1.5px solid rgba(218, 165, 32, 0.8);
        }

        .totora-boat::before {
          content: '';
          position: absolute;
          top: 1.5px;
          left: 3px;
          width: 189px;
          height: 24px;
          background: 
            repeating-linear-gradient(90deg, 
              rgba(255, 215, 0, 0.9) 0px, 
              rgba(255, 235, 59, 0.7) 1.5px, 
              rgba(255, 248, 220, 0.5) 3px, 
              rgba(255, 235, 59, 0.7) 4.5px, 
              rgba(255, 215, 0, 0.9) 6px,
              rgba(244, 164, 96, 0.3) 7.5px,
              rgba(218, 165, 32, 0.4) 9px
            );
          border-radius: 0 82.5px 82.5px 0;
          opacity: 0.95;
        }

        .totora-boat::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            repeating-linear-gradient(25deg, 
              transparent 0px, 
              rgba(205, 133, 63, 0.2) 0.75px, 
              transparent 1.5px, 
              transparent 6px
            ),
            repeating-linear-gradient(-25deg, 
              transparent 0px, 
              rgba(255, 215, 0, 0.15) 0.75px, 
              transparent 1.5px, 
              transparent 6px
            ),
            repeating-linear-gradient(90deg, 
              transparent 0px, 
              rgba(244, 164, 96, 0.1) 1.5px, 
              transparent 3px, 
              transparent 7.5px
            );
          border-radius: 0 90px 90px 0;
        }

        .boat-prow {
          position: absolute;
          top: -37.5px;
          right: -18px;
          width: 30px;
          height: 75px;
          background: linear-gradient(170deg, 
            #B8860B 0%, 
            #DAA520 15%, 
            #F4A460 30%, 
            #FFD700 45%, 
            #FFF8DC 60%, 
            #FFEB3B 75%, 
            #FFD700 90%, 
            #F4A460 100%
          );
          border-radius: 40% 60% 30% 20%;
          transform: rotate(-35deg) perspective(60px) rotateY(20deg);
          box-shadow: 
            0 0 22.5px rgba(255, 215, 0, 0.6),
            0 0 37.5px rgba(255, 235, 59, 0.3),
            inset 4.5px 0 15px rgba(255, 248, 220, 0.4),
            inset -1.5px 0 9px rgba(184, 134, 11, 0.5);
        }

        .boat-prow::before {
          content: '';
          position: absolute;
          top: 12px;
          left: 4.5px;
          width: 21px;
          height: 51px;
          background: 
            repeating-linear-gradient(5deg, 
              rgba(255, 215, 0, 0.8) 0px, 
              rgba(255, 235, 59, 0.6) 1.5px, 
              rgba(255, 248, 220, 0.4) 3px,
              rgba(244, 164, 96, 0.3) 4.5px,
              transparent 6px
            );
          border-radius: 30%;
          opacity: 0.9;
        }

        .boat-stern {
          position: absolute;
          top: -27px;
          left: -22.5px;
          width: 27px;
          height: 60px;
          background: linear-gradient(190deg, 
            #B8860B 0%, 
            #DAA520 20%, 
            #F4A460 35%, 
            #FFD700 50%, 
            #FFF8DC 65%, 
            #FFEB3B 80%, 
            #FFD700 100%
          );
          border-radius: 60% 40% 20% 30%;
          transform: rotate(25deg) perspective(60px) rotateY(-20deg);
          box-shadow: 
            0 0 18px rgba(255, 215, 0, 0.5),
            0 0 30px rgba(255, 235, 59, 0.2),
            inset -4.5px 0 12px rgba(255, 248, 220, 0.4),
            inset 1.5px 0 9px rgba(184, 134, 11, 0.5);
        }

        .boat-stern::before {
          content: '';
          position: absolute;
          top: 9px;
          left: 3px;
          width: 21px;
          height: 42px;
          background: 
            repeating-linear-gradient(-5deg, 
              rgba(255, 215, 0, 0.7) 0px, 
              rgba(255, 235, 59, 0.5) 1.5px, 
              rgba(255, 248, 220, 0.3) 3px,
              rgba(244, 164, 96, 0.2) 4.5px,
              transparent 6px
            );
          border-radius: 40%;
          opacity: 0.8;
        }

        .totora-bindings {
          position: absolute;
          top: 9px;
          left: 30px;
          width: 135px;
          height: 2.25px;
          background: linear-gradient(90deg, 
            rgba(139, 69, 19, 0.9) 0%,
            rgba(160, 82, 45, 0.8) 50%,
            rgba(139, 69, 19, 0.9) 100%
          );
          border-radius: 1.5px;
          box-shadow: 
            0 0 6px rgba(139, 69, 19, 0.5),
            0 1.5px 3px rgba(0, 0, 0, 0.3),
            0 0 12px rgba(160, 82, 45, 0.3);
        }

        .totora-bindings::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 7.5px;
          width: 120px;
          height: 2.25px;
          background: linear-gradient(90deg, 
            rgba(139, 69, 19, 0.8) 0%,
            rgba(160, 82, 45, 0.7) 50%,
            rgba(139, 69, 19, 0.8) 100%
          );
          border-radius: 1.5px;
          box-shadow: 0 0 4.5px rgba(139, 69, 19, 0.4);
        }

        .totora-bindings::after {
          content: '';
          position: absolute;
          top: -6px;
          left: 15px;
          width: 105px;
          height: 2.25px;
          background: linear-gradient(90deg, 
            rgba(139, 69, 19, 0.7) 0%,
            rgba(160, 82, 45, 0.6) 50%,
            rgba(139, 69, 19, 0.7) 100%
          );
          border-radius: 1.5px;
          box-shadow: 0 0 3px rgba(139, 69, 19, 0.3);
        }

        .totora-surface {
          position: absolute;
          top: 3px;
          left: 22.5px;
          width: 150px;
          height: 21px;
          background: 
            radial-gradient(ellipse at center, 
              rgba(255, 248, 220, 0.4) 0%, 
              rgba(255, 235, 59, 0.3) 30%, 
              rgba(255, 215, 0, 0.2) 60%, 
              rgba(244, 164, 96, 0.1) 80%,
              transparent 100%
            );
          border-radius: 75px;
          opacity: 0.7;
        }

        .totora-shine {
          position: absolute;
          top: 4.5px;
          left: 37.5px;
          width: 120px;
          height: 7.5px;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(255, 248, 220, 0.6) 20%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 248, 220, 0.6) 80%,
            transparent 100%
          );
          border-radius: 30px;
          animation: golden-shimmer 4s ease-in-out infinite;
        }

        .mystical-propulsion {
          position: absolute;
          bottom: -22.5px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 30px;
          background: radial-gradient(ellipse at center, 
            rgba(0, 255, 255, 0.8) 0%, 
            rgba(30, 144, 255, 0.6) 40%, 
            rgba(0, 191, 255, 0.3) 70%,
            transparent 100%
          );
          border-radius: 50%;
          animation: mystical-glow 0.6s ease-in-out infinite alternate;
          box-shadow: 
            0 0 37.5px rgba(0, 255, 255, 0.4),
            0 0 75px rgba(30, 144, 255, 0.2);
        }

        .wake-container {
          position: absolute;
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          width: 675px;
          height: 120px;
          pointer-events: none;
        }

        .wake-particle {
          position: absolute;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, 
            rgba(173, 216, 230, 0.9) 0%, 
            rgba(135, 206, 235, 0.6) 50%, 
            rgba(70, 130, 180, 0.3) 100%
          );
          border-radius: 50%;
          animation: wake-flow 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          box-shadow: 
            0 0 22.5px rgba(173, 216, 230, 0.5),
            0 0 45px rgba(135, 206, 235, 0.2);
        }

        /* Animaciones */
        @keyframes golden-shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        @keyframes mystical-glow {
          0%, 100% { opacity: 0.8; transform: scale(1.1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes wake-flow {
          0% { 
            transform: translate(0px, 0px) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translate(-450px, 22.5px) scale(0.1);
            opacity: 0;
          }
        }

        @keyframes condor-soaring {
          0%, 100% { 
            transform: translateY(0) rotateY(0deg) rotateZ(0deg);
            filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.6));
          }
          50% { 
            transform: translateY(-7.5px) rotateY(10deg) rotateZ(2deg);
            filter: drop-shadow(0 0 52.5px rgba(0, 0, 0, 0.8));
          }
        }

        @keyframes wing-flap-left {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-25deg); }
        }

        @keyframes wing-flap-right {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(25deg); }
        }

        @keyframes epic-journey {
          0% { 
            transform: translateX(140vw) translateY(0px) rotateZ(0deg);
            filter: drop-shadow(0 0 37.5px rgba(255, 140, 0, 0.3));
          }
          5% { 
            transform: translateX(120vw) translateY(-22.5px) rotateZ(-2deg);
          }
          10% { 
            transform: translateX(105vw) translateY(-45px) rotateZ(-4deg);
          }
          15% { 
            transform: translateX(90vw) translateY(-37.5px) rotateZ(-3deg);
          }
          20% { 
            transform: translateX(78vw) translateY(-60px) rotateZ(-5deg);
          }
          25% { 
            transform: translateX(66vw) translateY(-52.5px) rotateZ(-4deg);
          }
          30% { 
            transform: translateX(56vw) translateY(-30px) rotateZ(-2deg);
          }
          35% { 
            transform: translateX(47vw) translateY(-15px) rotateZ(-1deg);
          }
          40% { 
            transform: translateX(38vw) translateY(7.5px) rotateZ(1deg);
          }
          45% { 
            transform: translateX(30vw) translateY(22.5px) rotateZ(3deg);
          }
          50% { 
            transform: translateX(23vw) translateY(37.5px) rotateZ(4deg);
          }
          55% { 
            transform: translateX(17vw) translateY(30px) rotateZ(3deg);
          }
          60% { 
            transform: translateX(12vw) translateY(15px) rotateZ(2deg);
          }
          65% { 
            transform: translateX(7vw) translateY(-7.5px) rotateZ(0deg);
          }
          70% { 
            transform: translateX(3vw) translateY(-22.5px) rotateZ(-2deg);
          }
          75% { 
            transform: translateX(-1vw) translateY(-37.5px) rotateZ(-4deg);
          }
          80% { 
            transform: translateX(-4vw) translateY(-52.5px) rotateZ(-5deg);
          }
          85% { 
            transform: translateX(-7vw) translateY(-60px) rotateZ(-6deg);
          }
          90% { 
            transform: translateX(-10vw) translateY(-52.5px) rotateZ(-5deg);
          }
          95% { 
            transform: translateX(-12vw) translateY(-30px) rotateZ(-3deg);
          }
          100% { 
            transform: translateX(-15vw) translateY(0px) rotateZ(0deg);
            filter: drop-shadow(0 0 60px rgba(255, 140, 0, 0.5));
          }
        }

        @keyframes water-bobbing {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg);
          }
          50% { 
            transform: translateY(-4.5px) rotateX(2deg);
          }
        }

        @keyframes cloud-drift {
          from { transform: translateX(-100vw); }
          to { transform: translateX(100vw); }
        }
      `}</style>

      <div className="horizon-gradient"></div>
      <div className="mountains">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
      </div>
      <div className="stars">
        {stars}
      </div>
      {constellationElements}
      {clouds}
      <div className="totora-rider">
        <div className="rider-container">
          <div className="condor">
            <div className="condor-body">
              <div className="condor-head">
                <div className="condor-beak"></div>
              </div>
              <div className="condor-collar"></div>
            </div>
            <div className="condor-wing-left">
              <div className="wing-feathers-left"></div>
            </div>
            <div className="condor-wing-right">
              <div className="wing-feathers-right"></div>
            </div>
            <div className="condor-tail"></div>
          </div>
          <div className="totora-boat">
            <div className="boat-prow"></div>
            <div className="boat-stern"></div>
            <div className="totora-bindings"></div>
            <div className="totora-surface"></div>
            <div className="totora-shine"></div>
          </div>
          <div className="mystical-propulsion"></div>
        </div>
        <div className="wake-container">
          {wakeParticles}
        </div>
      </div>
    </div>
  );
};

export default BackgroundScene;