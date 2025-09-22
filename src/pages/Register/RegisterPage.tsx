import React from 'react';
import { useNavigate } from 'react-router-dom';
import CosmicCadetForm from '../../components/ui/CosmicCadetForm';
import type { RegisterFormData } from '../../types';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterSubmit = async (formData: RegisterFormData): Promise<void> => {
    try {
      // Aquí puedes agregar la lógica de registro real
      console.log('Datos del registro:', formData);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirigir al dashboard después del registro exitoso
      navigate('/dashboard');
    } catch (error) {
      console.error('Error en el registro:', error);
      // Aquí puedes manejar errores específicos
      throw error;
    }
  };

  const handleBackToLogin = (): void => {
    navigate('/login');
  };

  return (
    <div className="register-page">
      {/* Campo de estrellas de fondo */}
      <div className="stars-background">
        {/* Estrellas dinámicas generadas */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className={`star-bg star-${(i % 5) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Nebulosas de fondo */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      {/* Contenido principal */}
      <div className="register-content">
        <CosmicCadetForm
          onSubmit={handleRegisterSubmit}
          onBackToLogin={handleBackToLogin}
        />
      </div>

      {/* Elementos decorativos adicionales */}
      <div className="cosmic-elements">
        <div className="planet planet-1" />
        <div className="planet planet-2" />
        <div className="shooting-star" />
      </div>
    </div>
  );
};

export default RegisterPage;