import React from 'react';

const BackgroundScene = () => {
  // Generate starfield
  const generateStarField = () => {
    return [...Array(300)].map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 70;
      const size = i % 5 === 4 ? 1 : i % 3 === 0 ? 3 : 2;
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
            #1b2951 20%,
            #2c3e50 40%,
            #34495e 55%,
            #e67e22 70%,
            #f39c12 80%,
            #f1c40f 90%,
            #fff3cd 100%
          );
          overflow: hidden;
          z-index: -1;
        }

        /* Sun */
        .sun {
          position: absolute;
          bottom: 25%;
          right: 15%;
          width: 120px;
          height: 120px;
          background: radial-gradient(
            circle,
            #fff8dc 0%,
            #ffd700 20%,
            #ff8c00 40%,
            #ff6347 70%,
            #ff4500 100%
          );
          border-radius: 50%;
          box-shadow: 
            0 0 50px rgba(255, 215, 0, 0.8),
            0 0 100px rgba(255, 140, 0, 0.6),
            0 0 150px rgba(255, 69, 0, 0.4),
            0 0 200px rgba(255, 99, 71, 0.2);
          animation: sun-pulse 4s ease-in-out infinite alternate;
          z-index: 5;
        }

        @keyframes sun-pulse {
          0% { 
            transform: scale(1);
            box-shadow: 
              0 0 50px rgba(255, 215, 0, 0.8),
              0 0 100px rgba(255, 140, 0, 0.6),
              0 0 150px rgba(255, 69, 0, 0.4),
              0 0 200px rgba(255, 99, 71, 0.2);
          }
          100% { 
            transform: scale(1.05);
            box-shadow: 
              0 0 60px rgba(255, 215, 0, 0.9),
              0 0 120px rgba(255, 140, 0, 0.7),
              0 0 180px rgba(255, 69, 0, 0.5),
              0 0 240px rgba(255, 99, 71, 0.3);
          }
        }

        /* Sun rays */
        .sun-rays {
          position: absolute;
          bottom: 25%;
          right: 15%;
          width: 120px;
          height: 120px;
          z-index: 4;
        }

        .sun-ray {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 80px;
          background: linear-gradient(
            to top,
            rgba(255, 215, 0, 0.8) 0%,
            rgba(255, 140, 0, 0.4) 50%,
            transparent 100%
          );
          transform-origin: bottom center;
          animation: ray-rotate 20s linear infinite;
        }

        .sun-ray:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg); }
        .sun-ray:nth-child(2) { transform: translate(-50%, -50%) rotate(30deg); }
        .sun-ray:nth-child(3) { transform: translate(-50%, -50%) rotate(60deg); }
        .sun-ray:nth-child(4) { transform: translate(-50%, -50%) rotate(90deg); }
        .sun-ray:nth-child(5) { transform: translate(-50%, -50%) rotate(120deg); }
        .sun-ray:nth-child(6) { transform: translate(-50%, -50%) rotate(150deg); }
        .sun-ray:nth-child(7) { transform: translate(-50%, -50%) rotate(180deg); }
        .sun-ray:nth-child(8) { transform: translate(-50%, -50%) rotate(210deg); }
        .sun-ray:nth-child(9) { transform: translate(-50%, -50%) rotate(240deg); }
        .sun-ray:nth-child(10) { transform: translate(-50%, -50%) rotate(270deg); }
        .sun-ray:nth-child(11) { transform: translate(-50%, -50%) rotate(300deg); }
        .sun-ray:nth-child(12) { transform: translate(-50%, -50%) rotate(330deg); }

        @keyframes ray-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Enhanced sunrise glow */
        .sunrise-glow {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 60%;
          height: 50%;
          background: radial-gradient(
            ellipse at bottom right,
            rgba(255, 215, 0, 0.4) 0%,
            rgba(255, 140, 0, 0.3) 20%,
            rgba(255, 69, 0, 0.2) 40%,
            rgba(255, 99, 71, 0.1) 60%,
            transparent 80%
          );
          z-index: 1;
          animation: glow-pulse 6s ease-in-out infinite alternate;
        }

        @keyframes glow-pulse {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }

        /* Atmospheric light rays */
        .atmospheric-rays {
          position: absolute;
          bottom: 20%;
          right: 10%;
          width: 300px;
          height: 200px;
          z-index: 2;
        }

        .light-beam {
          position: absolute;
          bottom: 0;
          right: 50px;
          width: 3px;
          height: 150px;
          background: linear-gradient(
            to top,
            rgba(255, 215, 0, 0.6) 0%,
            rgba(255, 140, 0, 0.3) 50%,
            transparent 100%
          );
          transform-origin: bottom center;
          animation: beam-sway 8s ease-in-out infinite;
        }

        .light-beam:nth-child(1) { 
          transform: rotate(-15deg);
          animation-delay: 0s;
        }
        .light-beam:nth-child(2) { 
          transform: rotate(-5deg);
          animation-delay: 1s;
          right: 80px;
        }
        .light-beam:nth-child(3) { 
          transform: rotate(5deg);
          animation-delay: 2s;
          right: 20px;
        }
        .light-beam:nth-child(4) { 
          transform: rotate(15deg);
          animation-delay: 3s;
          right: 110px;
        }

        @keyframes beam-sway {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        /* Stars */
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

        /* Animaciones */
        @keyframes mystical-glow {
          0%, 100% { opacity: 0.8; transform: scale(1.1); }
          50% { opacity: 1; transform: scale(1.2); }
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
          25% { 
            transform: translateX(78vw) translateY(-60px) rotateZ(-5deg);
          }
          50% { 
            transform: translateX(23vw) translateY(37.5px) rotateZ(4deg);
          }
          75% { 
            transform: translateX(-1vw) translateY(-37.5px) rotateZ(-4deg);
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

        /* Montañas */
        .mountains {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          z-index: 3;
        }

        .mountain {
          position: absolute;
          bottom: 0;
        }

        .mountain-1 {
          left: 0;
          width: 0;
          height: 0;
          border-left: 200px solid transparent;
          border-right: 300px solid transparent;
          border-bottom: 280px solid rgba(25, 25, 112, 0.9);
        }

        .mountain-2 {
          left: 30%;
          width: 0;
          height: 0;
          border-left: 180px solid transparent;
          border-right: 250px solid transparent;
          border-bottom: 320px solid rgba(25, 25, 112, 0.95);
        }

        .mountain-3 {
          right: 0;
          width: 0;
          height: 0;
          border-left: 220px solid transparent;
          border-right: 180px solid transparent;
          border-bottom: 300px solid rgba(25, 25, 112, 0.85);
        }

        /* Enhanced horizon gradient */
        .horizon-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 300px;
          background: linear-gradient(
            to top,
            rgba(255, 215, 0, 0.4) 0%,
            rgba(255, 140, 0, 0.3) 20%,
            rgba(255, 69, 0, 0.2) 40%,
            rgba(255, 99, 71, 0.1) 60%,
            rgba(147, 0, 211, 0.05) 80%,
            transparent 100%
          );
          z-index: 0;
        }

        /* Morning clouds */
        .morning-clouds {
          position: absolute;
          top: 30%;
          left: 0;
          width: 100%;
          height: 40%;
          z-index: 6;
        }

        .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50px;
          animation: cloud-drift 40s linear infinite;
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
        }

        .cloud-1 {
          width: 80px;
          height: 30px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .cloud-1::before {
          width: 40px;
          height: 40px;
          top: -15px;
          left: 10px;
        }

        .cloud-1::after {
          width: 30px;
          height: 30px;
          top: -10px;
          right: 10px;
        }

        .cloud-2 {
          width: 100px;
          height: 40px;
          top: 10%;
          right: 20%;
          animation-delay: 10s;
        }

        .cloud-2::before {
          width: 50px;
          height: 50px;
          top: -20px;
          left: 15px;
        }

        .cloud-2::after {
          width: 35px;
          height: 35px;
          top: -15px;
          right: 15px;
        }

        @keyframes cloud-drift {
          from { transform: translateX(-200px); }
          to { transform: translateX(calc(100vw + 200px)); }
        }
      `}</style>

      {/* Sunrise glow behind mountains */}
      <div className="sunrise-glow"></div>
      
      {/* Enhanced horizon gradient */}
      <div className="horizon-gradient"></div>
      
      {/* Sun */}
      <div className="sun"></div>
      
      {/* Sun rays */}
      <div className="sun-rays">
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
        <div className="sun-ray"></div>
      </div>

      {/* Atmospheric light beams */}
      <div className="atmospheric-rays">
        <div className="light-beam"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
      </div>

      {/* Mountains */}
      <div className="mountains">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
      </div>

      {/* Stars */}
      <div className="stars">
        {stars}
      </div>

      {/* Morning clouds */}
      <div className="morning-clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
      </div>

      {/* Caballito de totora con cóndor */}
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
          </div>
          <div className="mystical-propulsion"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundScene;