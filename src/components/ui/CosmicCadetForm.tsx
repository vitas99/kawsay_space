import React from 'react';

interface CosmicCadetFormProps {
  onSubmit?: (formData: any) => void;
  onBackToLogin?: () => void;
}

const CosmicCadetForm: React.FC<CosmicCadetFormProps> = ({ 
  onSubmit, 
  onBackToLogin 
}) => {
  console.log('CosmicCadetForm renderizado correctamente');
  
  const handleTestSubmit = () => {
    console.log('Botón de registro presionado');
    if (onSubmit) {
      onSubmit({ username: 'test', email: 'test@test.com', password: '123456' });
    }
  };

  const handleBackClick = () => {
    console.log('Botón de regreso presionado');
    if (onBackToLogin) {
      onBackToLogin();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a, #7c3aed)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Botón de regreso */}
      <button
        onClick={handleBackClick}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid #22d3ee',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: '#22d3ee',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}
      >
        ←
      </button>

      {/* Formulario simple */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '2rem',
        border: '1px solid rgba(34, 211, 238, 0.3)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        color: 'white'
      }}>
        {/* Avatar */}
        <div style={{
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, #f97316, #dc2626)',
          borderRadius: '50%',
          margin: '0 auto 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px'
        }}>
          🚀
        </div>

        {/* Título */}
        <h1 style={{
          color: '#22d3ee',
          marginBottom: '2rem',
          fontSize: '1.2rem',
          letterSpacing: '0.1em'
        }}>
          REGISTRO DE CADETE CÓSMICO
        </h1>

        {/* Mensaje de prueba */}
        <div style={{
          background: 'rgba(34, 211, 238, 0.1)',
          border: '1px solid #22d3ee',
          borderRadius: '10px',
          padding: '1rem',
          marginBottom: '1rem',
          fontSize: '14px'
        }}>
          <p>✅ Componente cargado correctamente</p>
          <p>🔧 Versión de prueba funcionando</p>
        </div>

        {/* Campos de prueba */}
        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#7dd3fc' }}>
            NOMBRE DE USUARIO:
          </label>
          <input
            type="text"
            placeholder="Ej: AstroExplorer_7"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '25px',
              border: '2px solid #22d3ee',
              background: 'rgba(255, 255, 255, 0.9)',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#7dd3fc' }}>
            CORREO DE LA MISIÓN:
          </label>
          <input
            type="email"
            placeholder="tu_email@galaxia.com"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '25px',
              border: '2px solid #22d3ee',
              background: 'rgba(255, 255, 255, 0.9)',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#7dd3fc' }}>
            CONTRASEÑA INTERPLANETARIA:
          </label>
          <input
            type="password"
            placeholder="••••••••••••••••"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '25px',
              border: '2px solid #22d3ee',
              background: 'rgba(255, 255, 255, 0.9)',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Botón de registro */}
        <button
          onClick={handleTestSubmit}
          style={{
            width: '100%',
            background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            padding: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '1rem',
            transition: 'all 0.3s ease'
          }}
        >
          🚀 INICIAR REGISTRO
        </button>

        {/* Link de regreso */}
        <p style={{ fontSize: '14px', color: '#7dd3fc' }}>
          ¿Ya tienes cuenta?{' '}
          <button 
            onClick={handleBackClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#22d3ee',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Inicia Sesión
          </button>
        </p>
      </div>
    </div>
  );
};

export default CosmicCadetForm;