import React from 'react';

const BackgroundScene: React.FC = () => {
  // Sistema de estrellas más sofisticado
  const generateStarField = () => {
    const layers = [
      { count: 300, minSize: 0.5, maxSize: 1, speed: 0.3, brightness: 0.4 },
      { count: 150, minSize: 1, maxSize: 2, speed: 0.5, brightness: 0.6 },
      { count: 80, minSize: 1.5, maxSize: 3, speed: 0.8, brightness: 0.8 },
      { count: 30, minSize: 2, maxSize: 4, speed: 1.2, brightness: 1 }
    ];

    return layers.map((layer, layerIndex) => {
      return [...Array(layer.count)].map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 45;
        const size = layer.minSize + Math.random() * (layer.maxSize - layer.minSize);
        const brightness = layer.brightness * (0.7 + Math.random() * 0.3);
        const twinkleDelay = Math.random() * 4;
        const twinkleDuration = 2 + Math.random() * 3;
        
        return (
          <div
            key={`star-${layerIndex}-${i}`}
            className={`star layer-${layerIndex}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: brightness,
              animationDelay: `${twinkleDelay}s`,
              animationDuration: `${twinkleDuration}s`
            }}
          />
        );
      });
    }).flat();
  };

  // Partículas para el rastro del caballito
  const wakeParticles = [...Array(40)].map((_, i) => {
    const delay = i * 0.06;
    const offsetX = -i * 10 - Math.sin(i * 0.4) * 12;
    const offsetY = Math.sin(i * 0.6) * 18 + Math.cos(i * 0.3) * 10;
    const scale = 1 - (i * 0.02);
    
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
    // Chakana (Cruz del Sur)
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
    // Llama (constelación oscura del Saco de Carbón)
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
    // Cóndor (parte de la Vía Láctea)
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
    // Partridge (Perdiz)
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
    // Serpiente (parte de la Vía Láctea)
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
  const constellationElements = incaConstellations.map((constellation, constIndex) => {
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
          background: 
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255, 140, 0, 0.25) 0%, rgba(255, 69, 0, 0.15) 40%, transparent 70%),
            linear-gradient(180deg, 
              #000428 0%,
              #004e92 8%,
              #1565c0 16%,
              #1976d2 24%,
              #2196f3 32%,
              #42a5f5 40%,
              #64b5f6 48%,
              #90caf9 56%,
              #bbdefb 64%,
              #e3f2fd 72%,
              #fff3e0 80%,
              #ffe0b2 88%,
              #ffcc02 94%,
              #ffc107 100%
            );
          overflow: hidden;
          z-index: -1;
        }

        /* Sistema avanzado de estrellas */
        .star {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 40%, transparent 100%);
          border-radius: 50%;
          animation: stellar-twinkle 3s ease-in-out infinite alternate;
        }

        .layer-0 .star {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%);
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
        }

        .layer-1 .star {
          background: radial-gradient(circle, rgba(173, 216, 230, 1) 0%, rgba(173, 216, 230, 0.6) 50%, transparent 100%);
          box-shadow: 0 0 4px rgba(173, 216, 230, 0.4);
        }

        .layer-2 .star {
          background: radial-gradient(circle, rgba(255, 215, 0, 1) 0%, rgba(255, 215, 0, 0.7) 40%, transparent 100%);
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
        }

        .layer-3 .star {
          background: radial-gradient(circle, rgba(255, 182, 193, 1) 0%, rgba(255, 182, 193, 0.8) 30%, transparent 100%);
          box-shadow: 0 0 12px rgba(255, 182, 193, 0.6);
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

        /* Chakana (Cruz del Sur) - La más sagrada */
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

        /* Llama - constelación del Saco de Carbón */
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

        /* Cóndor - ave sagrada */
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

        /* Perdiz */
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

        /* Serpiente */
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

        @keyframes stellar-twinkle {
          0% { opacity: 0.4; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
          100% { opacity: 0.6; transform: scale(1) rotate(360deg); }
        }

        /* Caballito de totora con cóndor */
        .totora-rider {
          position: absolute;
          top: 22%;
          right: 8%;
          animation: epic-journey 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          z-index: 15;
          filter: drop-shadow(0 0 25px rgba(255, 140, 0, 0.3));
        }

        .rider-container {
          position: relative;
          animation: water-bobbing 2s ease-in-out infinite;
        }

        /* Cóndor andino realista */
        .condor {
          position: absolute;
          top: -45px;
          left: 15px;
          z-index: 17;
          animation: condor-soaring 2s ease-in-out infinite;
          filter: 
            drop-shadow(0 0 20px rgba(0, 0, 0, 0.6))
            drop-shadow(0 0 40px rgba(139, 69, 19, 0.3));
          transform-origin: center;
        }

        /* Cuerpo del cóndor */
        .condor-body {
          width: 25px;
          height: 40px;
          background: linear-gradient(180deg, 
            #1a1a1a 0%, 
            #2d2d2d 20%, 
            #000000 60%, 
            #1a1a1a 100%
          );
          border-radius: 50% 50% 60% 60%;
          position: relative;
          box-shadow: 
            0 0 15px rgba(0, 0, 0, 0.5),
            inset 0 5px 10px rgba(255, 255, 255, 0.1);
        }

        /* Cabeza del cóndor */
        .condor-head {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 15px;
          background: linear-gradient(180deg, 
            #ff6b47 0%, 
            #ff4757 40%, 
            #ff3742 100%
          );
          border-radius: 60% 60% 40% 40%;
          box-shadow: 0 0 8px rgba(255, 71, 87, 0.4);
        }

        /* Pico del cóndor */
        .condor-beak {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 3px solid transparent;
          border-right: 3px solid transparent;
          border-top: 8px solid #2c2c54;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        }

        /* Collar blanco característico */
        .condor-collar {
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 8px;
          background: linear-gradient(180deg, 
            #ffffff 0%, 
            #f1f2f6 50%, 
            #ddd 100%
          );
          border-radius: 50%;
          box-shadow: 
            0 0 10px rgba(255, 255, 255, 0.6),
            inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Alas extendidas */
        .condor-wing-left {
          position: absolute;
          top: 8px;
          left: -45px;
          width: 50px;
          height: 20px;
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
            0 0 15px rgba(0, 0, 0, 0.4),
            inset 0 3px 8px rgba(255, 255, 255, 0.05);
        }

        .condor-wing-right {
          position: absolute;
          top: 8px;
          right: -45px;
          width: 50px;
          height: 20px;
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
            0 0 15px rgba(0, 0, 0, 0.4),
            inset 0 3px 8px rgba(255, 255, 255, 0.05);
        }

        /* Plumas primarias del ala */
        .wing-feathers-left {
          position: absolute;
          top: 2px;
          left: -8px;
          width: 35px;
          height: 3px;
          background: 
            repeating-linear-gradient(90deg, 
              #000000 0px, 
              #1a1a1a 3px, 
              #2d2d2d 6px, 
              #1a1a1a 9px
            );
          border-radius: 2px;
          opacity: 0.8;
        }

        .wing-feathers-right {
          position: absolute;
          top: 2px;
          right: -8px;
          width: 35px;
          height: 3px;
          background: 
            repeating-linear-gradient(-90deg, 
              #000000 0px, 
              #1a1a1a 3px, 
              #2d2d2d 6px, 
              #1a1a1a 9px
            );
          border-radius: 2px;
          opacity: 0.8;
        }

        /* Cola del cóndor */
        .condor-tail {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 12px;
          background: linear-gradient(180deg, 
            #1a1a1a 0%, 
            #000000 100%
          );
          border-radius: 0 0 60% 60%;
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.05);
        }

        /* Caballito de totora auténtico peruano */
        .totora-boat {
          width: 130px;
          height: 18px;
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
          border-radius: 0 60px 60px 0;
          transform: perspective(80px) rotateX(8deg);
          box-shadow: 
            0 8px 25px rgba(205, 133, 63, 0.5),
            0 4px 15px rgba(255, 215, 0, 0.3),
            inset 0 3px 8px rgba(255, 248, 220, 0.4),
            inset 0 -3px 8px rgba(205, 133, 63, 0.6);
          border: 1px solid rgba(218, 165, 32, 0.8);
        }

        /* Textura de juncos entrelazados realista */
        .totora-boat::before {
          content: '';
          position: absolute;
          top: 1px;
          left: 2px;
          width: 126px;
          height: 16px;
          background: 
            repeating-linear-gradient(90deg, 
              rgba(255, 215, 0, 0.9) 0px, 
              rgba(255, 235, 59, 0.7) 1px, 
              rgba(255, 248, 220, 0.5) 2px, 
              rgba(255, 235, 59, 0.7) 3px, 
              rgba(255, 215, 0, 0.9) 4px,
              rgba(244, 164, 96, 0.3) 5px,
              rgba(218, 165, 32, 0.4) 6px
            );
          border-radius: 0 55px 55px 0;
          opacity: 0.95;
        }

        /* Patrón entrecruzado de fibras */
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
              rgba(205, 133, 63, 0.2) 0.5px, 
              transparent 1px, 
              transparent 4px
            ),
            repeating-linear-gradient(-25deg, 
              transparent 0px, 
              rgba(255, 215, 0, 0.15) 0.5px, 
              transparent 1px, 
              transparent 4px
            ),
            repeating-linear-gradient(90deg, 
              transparent 0px, 
              rgba(244, 164, 96, 0.1) 1px, 
              transparent 2px, 
              transparent 5px
            );
          border-radius: 0 60px 60px 0;
        }

        /* Proa alta y curvada (característica principal) */
        .boat-prow {
          position: absolute;
          top: -25px;
          right: -12px;
          width: 20px;
          height: 50px;
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
          transform: rotate(-35deg) perspective(40px) rotateY(20deg);
          box-shadow: 
            0 0 15px rgba(255, 215, 0, 0.6),
            0 0 25px rgba(255, 235, 59, 0.3),
            inset 3px 0 10px rgba(255, 248, 220, 0.4),
            inset -1px 0 6px rgba(184, 134, 11, 0.5);
        }

        .boat-prow::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 3px;
          width: 14px;
          height: 34px;
          background: 
            repeating-linear-gradient(5deg, 
              rgba(255, 215, 0, 0.8) 0px, 
              rgba(255, 235, 59, 0.6) 1px, 
              rgba(255, 248, 220, 0.4) 2px,
              rgba(244, 164, 96, 0.3) 3px,
              transparent 4px
            );
          border-radius: 30%;
          opacity: 0.9;
        }

        /* Popa también curvada pero menor */
        .boat-stern {
          position: absolute;
          top: -18px;
          left: -15px;
          width: 18px;
          height: 40px;
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
          transform: rotate(25deg) perspective(40px) rotateY(-20deg);
          box-shadow: 
            0 0 12px rgba(255, 215, 0, 0.5),
            0 0 20px rgba(255, 235, 59, 0.2),
            inset -3px 0 8px rgba(255, 248, 220, 0.4),
            inset 1px 0 6px rgba(184, 134, 11, 0.5);
        }

        .boat-stern::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 2px;
          width: 14px;
          height: 28px;
          background: 
            repeating-linear-gradient(-5deg, 
              rgba(255, 215, 0, 0.7) 0px, 
              rgba(255, 235, 59, 0.5) 1px, 
              rgba(255, 248, 220, 0.3) 2px,
              rgba(244, 164, 96, 0.2) 3px,
              transparent 4px
            );
          border-radius: 40%;
          opacity: 0.8;
        }

        /* Amarres tradicionales con fibra */
        .totora-bindings {
          position: absolute;
          top: 6px;
          left: 20px;
          width: 90px;
          height: 1.5px;
          background: linear-gradient(90deg, 
            rgba(139, 69, 19, 0.9) 0%,
            rgba(160, 82, 45, 0.8) 50%,
            rgba(139, 69, 19, 0.9) 100%
          );
          border-radius: 1px;
          box-shadow: 
            0 0 4px rgba(139, 69, 19, 0.5),
            0 1px 2px rgba(0, 0, 0, 0.3),
            0 0 8px rgba(160, 82, 45, 0.3);
        }

        .totora-bindings::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 5px;
          width: 80px;
          height: 1.5px;
          background: linear-gradient(90deg, 
            rgba(139, 69, 19, 0.8) 0%,
            rgba(160, 82, 45, 0.7) 50%,
            rgba(139, 69, 19, 0.8) 100%
          );
          border-radius: 1px;
          box-shadow: 0 0 3px rgba(139, 69, 19, 0.4);
        }

        .totora-bindings::after {
          content: '';
          position: absolute;
          top: -4px;
          left: 10px;
          width: 70px;
          height: 1.5px;
          background: linear-gradient(90deg, 
            rgba(139, 69, 19, 0.7) 0%,
            rgba(160, 82, 45, 0.6) 50%,
            rgba(139, 69, 19, 0.7) 100%
          );
          border-radius: 1px;
          box-shadow: 0 0 2px rgba(139, 69, 19, 0.3);
        }

        /* Superficie de totora tejida */
        .totora-surface {
          position: absolute;
          top: 2px;
          left: 15px;
          width: 100px;
          height: 14px;
          background: 
            radial-gradient(ellipse at center, 
              rgba(255, 248, 220, 0.4) 0%, 
              rgba(255, 235, 59, 0.3) 30%, 
              rgba(255, 215, 0, 0.2) 60%, 
              rgba(244, 164, 96, 0.1) 80%,
              transparent 100%
            );
          border-radius: 50px;
          opacity: 0.7;
        }

        /* Brillo dorado natural */
        .totora-shine {
          position: absolute;
          top: 3px;
          left: 25px;
          width: 80px;
          height: 5px;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(255, 248, 220, 0.6) 20%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 248, 220, 0.6) 80%,
            transparent 100%
          );
          border-radius: 20px;
          animation: golden-shimmer 4s ease-in-out infinite;
        }

        @keyframes golden-shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        /* Propulsión mística */
        .mystical-propulsion {
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 20px;
          background: radial-gradient(ellipse at center, 
            rgba(0, 255, 255, 0.8) 0%, 
            rgba(30, 144, 255, 0.6) 40%, 
            rgba(0, 191, 255, 0.3) 70%,
            transparent 100%
          );
          border-radius: 50%;
          animation: mystical-glow 0.6s ease-in-out infinite alternate;
          box-shadow: 
            0 0 25px rgba(0, 255, 255, 0.4),
            0 0 50px rgba(30, 144, 255, 0.2);
        }

        /* Estela del caballito */
        .wake-container {
          position: absolute;
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          width: 450px;
          height: 80px;
          pointer-events: none;
        }

        .wake-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, 
            rgba(173, 216, 230, 0.9) 0%, 
            rgba(135, 206, 235, 0.6) 50%, 
            rgba(70, 130, 180, 0.3) 100%
          );
          border-radius: 50%;
          animation: wake-flow 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          box-shadow: 
            0 0 15px rgba(173, 216, 230, 0.5),
            0 0 30px rgba(135, 206, 235, 0.2);
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

        /* Animaciones épicas */
        @keyframes epic-journey {
          0% { 
            transform: translateX(140vw) translateY(0px) rotateZ(0deg);
            filter: drop-shadow(0 0 25px rgba(255, 140, 0, 0.3));
          }
          5% { 
            transform: translateX(120vw) translateY(-15px) rotateZ(-2deg);
          }
          10% { 
            transform: translateX(105vw) translateY(-30px) rotateZ(-4deg);
          }
          15% { 
            transform: translateX(90vw) translateY(-25px) rotateZ(-3deg);
          }
          20% { 
            transform: translateX(78vw) translateY(-40px) rotateZ(-5deg);
          }
          25% { 
            transform: translateX(66vw) translateY(-35px) rotateZ(-4deg);
          }
          30% { 
            transform: translateX(56vw) translateY(-20px) rotateZ(-2deg);
          }
          35% { 
            transform: translateX(47vw) translateY(-10px) rotateZ(-1deg);
          }
          40% { 
            transform: translateX(38vw) translateY(5px) rotateZ(1deg);
          }
          45% { 
            transform: translateX(30vw) translateY(15px) rotateZ(3deg);
          }
          50% { 
            transform: translateX(23vw) translateY(25px) rotateZ(4deg);
          }
          55% { 
            transform: translateX(17vw) translateY(20px) rotateZ(3deg);
          }
          60% { 
            transform: translateX(12vw) translateY(10px) rotateZ(2deg);
          }
          65% { 
            transform: translateX(7vw) translateY(-5px) rotateZ(0deg);
          }
          70% { 
            transform: translateX(3vw) translateY(-15px) rotateZ(-2deg);
          }
          75% { 
            transform: translateX(-1vw) translateY(-25px) rotateZ(-4deg);
          }
          80% { 
            transform: translateX(-4vw) translateY(-35px) rotateZ(-5deg);
          }
          85% { 
            transform: translateX(-7vw) translateY(-40px) rotateZ(-6deg);
          }
          90% { 
            transform: translateX(-10vw) translateY(-35px) rotateZ(-5deg);
          }
          95% { 
            transform: translateX(-12vw) translateY(-20px) rotateZ(-3deg);
          }
          100% { 
            transform: translateX(-15vw) translateY(0px) rotateZ(0deg);
            filter: drop-shadow(0 0 40px rgba(255, 140, 0, 0.5));
          }
        }

        @keyframes water-bobbing {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg);
          }
          25% { 
            transform: translateY(-8px) rotateX(1deg);
          }
          50% { 
            transform: translateY(-12px) rotateX(0deg);
          }
          75% { 
            transform: translateY(-6px) rotateX(-1deg);
          }
        }

        @keyframes condor-soaring {
          0%, 100% { 
            transform: translateY(0px) rotateZ(-5deg);
          }
          25% { 
            transform: translateY(-12px) rotateZ(-8deg);
          }
          50% { 
            transform: translateY(-20px) rotateZ(-3deg);
          }
          75% { 
            transform: translateY(-15px) rotateZ(-6deg);
          }
        }

        @keyframes wing-flap-left {
          0%, 100% { 
            transform: rotateZ(15deg) rotateY(-10deg);
          }
          50% { 
            transform: rotateZ(-5deg) rotateY(-25deg);
          }
        }

        @keyframes wing-flap-right {
          0%, 100% { 
            transform: rotateZ(-15deg) rotateY(10deg);
          }
          50% { 
            transform: rotateZ(5deg) rotateY(25deg);
          }
        }

        @keyframes mystical-glow {
          0% { 
            opacity: 0.6; 
            transform: translateX(-50%) scaleY(0.8) scaleX(1);
          }
          100% { 
            opacity: 1; 
            transform: translateX(-50%) scaleY(1.3) scaleX(1.2);
          }
        }

        @keyframes wake-flow {
          0% { 
            opacity: 1; 
            transform: scale(1) translateY(0px) rotate(0deg);
          }
          30% { 
            opacity: 0.8; 
            transform: scale(1.4) translateY(-8px) rotate(120deg);
          }
          70% { 
            opacity: 0.4; 
            transform: scale(1.8) translateY(-15px) rotate(240deg);
          }
          100% { 
            opacity: 0; 
            transform: scale(0.3) translateY(20px) rotate(360deg);
          }
        }

        @keyframes cloud-drift {
          from { transform: translateX(0px) translateY(0px); }
          to { transform: translateX(-150px) translateY(-20px); }
        }

        /* Montañas andinas ultra realistas */
        .andes-mountains {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 55%;
          z-index: 10;
        }

        /* Capa de montañas lejanas */
        .mountain-distant {
          position: absolute;
          bottom: 0;
          left: -5%;
          width: 0;
          height: 0;
          border-left: 200px solid transparent;
          border-right: 180px solid transparent;
          border-bottom: 280px solid rgba(20, 12, 8, 0.6);
          z-index: 10;
        }

        /* Montaña principal izquierda */
        .mountain-left {
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 0;
          height: 0;
          border-left: 320px solid transparent;
          border-right: 280px solid transparent;
          border-bottom: 420px solid #0d0805;
          z-index: 12;
        }

        .mountain-left::before {
          content: '';
          position: absolute;
          top: -80px;
          left: -100px;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 120px solid transparent;
          border-bottom: 90px solid rgba(26, 15, 8, 0.9);
        }

        .mountain-left::after {
          content: '';
          position: absolute;
          top: -45px;
          left: 20px;
          width: 0;
          height: 0;
          border-left: 70px solid transparent;
          border-right: 90px solid transparent;
          border-bottom: 60px solid rgba(45, 28, 16, 0.8);
        }

        /* Montaña central majestuosa */
        .mountain-center {
          position: absolute;
          bottom: 0;
          left: 32%;
          width: 0;
          height: 0;
          border-left: 380px solid transparent;
          border-right: 420px solid transparent;
          border-bottom: 520px solid #050302;
          z-index: 13;
        }

        .mountain-center::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -140px;
          width: 0;
          height: 0;
          border-left: 140px solid transparent;
          border-right: 160px solid transparent;
          border-bottom: 130px solid rgba(13, 8, 5, 0.9);
        }

        .mountain-center::after {
          content: '';
          position: absolute;
          top: -70px;
          left: 60px;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 130px solid transparent;
          border-bottom: 90px solid rgba(26, 15, 8, 0.8);
        }

        /* Montaña derecha */
        .mountain-right {
          position: absolute;
          bottom: 0;
          right: 8%;
          width: 0;
          height: 0;
          border-left: 300px solid transparent;
          border-right: 250px solid transparent;
          border-bottom: 380px solid #0a0603;
          z-index: 11;
        }

        .mountain-right::before {
          content: '';
          position: absolute;
          top: -85px;
          left: -90px;
          width: 0;
          height: 0;
          border-left: 90px solid transparent;
          border-right: 110px solid transparent;
          border-bottom: 100px solid rgba(20, 12, 8, 0.9);
        }

        /* Efectos atmosféricos avanzados */
        .cosmic-atmosphere {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 70%;
          background: 
            radial-gradient(ellipse 90% 50% at 50% 100%, 
              rgba(255, 215, 0, 0.18) 0%,
              rgba(255, 165, 0, 0.14) 25%,
              rgba(255, 140, 0, 0.12) 40%,
              rgba(255, 69, 0, 0.08) 60%,
              rgba(33, 150, 243, 0.04) 80%,
              transparent 100%
            );
          z-index: 8;
          animation: cosmic-breathing 12s ease-in-out infinite;
        }

        .aurora-rays {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: 
            conic-gradient(from 45deg at 50% 100%, 
              transparent 0deg,
              rgba(255, 215, 0, 0.12) 20deg,
              transparent 40deg,
              rgba(255, 165, 0, 0.08) 60deg,
              transparent 80deg,
              rgba(255, 140, 0, 0.10) 100deg,
              transparent 120deg,
              rgba(255, 69, 0, 0.06) 140deg,
              transparent 160deg,
              rgba(33, 150, 243, 0.04) 180deg,
              transparent 200deg
            );
          border-radius: 50% 50% 0 0;
          animation: aurora-dance 25s linear infinite;
          z-index: 7;
        }

        @keyframes cosmic-breathing {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }

        @keyframes aurora-dance {
          from { transform: translateX(-50%) rotate(-5deg); }
          to { transform: translateX(-50%) rotate(355deg); }
        }
      `}</style>

      {/* Campo de estrellas */}
      <div className="stellar-field">
        {stars}
      </div>

      {/* Constelaciones incas */}
      <div className="inca-constellations">
        {constellationElements}
      </div>

      {/* Nubes atmosféricas */}
      <div className="atmospheric-clouds">
        {clouds}
      </div>

      {/* Cóndor andino realista sobre caballito de totora */}
      <div className="totora-rider">
        <div className="rider-container">
          <div className="condor">
            <div className="condor-body">
              <div className="condor-head">
                <div className="condor-beak"></div>
              </div>
              <div className="condor-collar"></div>
              <div className="condor-wing-left">
                <div className="wing-feathers-left"></div>
              </div>
              <div className="condor-wing-right">
                <div className="wing-feathers-right"></div>
              </div>
              <div className="condor-tail"></div>
            </div>
          </div>
          <div className="totora-boat">
            <div className="boat-prow"></div>
            <div className="boat-stern"></div>
            <div className="totora-bindings"></div>
            <div className="totora-surface"></div>
            <div className="totora-shine"></div>
            <div className="mystical-propulsion"></div>
          </div>
          <div className="wake-container">
            {wakeParticles}
          </div>
        </div>
      </div>

      {/* Cordillera de los Andes */}
      <div className="andes-mountains">
        <div className="mountain-distant"></div>
        <div className="mountain-left"></div>
        <div className="mountain-center"></div>
        <div className="mountain-right"></div>
      </div>

      {/* Efectos atmosféricos */}
      <div className="cosmic-atmosphere"></div>
      <div className="aurora-rays"></div>
    </div>
  );
};

export default BackgroundScene;