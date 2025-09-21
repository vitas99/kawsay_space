// Tipos para los astronautas
export interface Astronaut {
  id: number;
  name: string;
  color: string;
  avatar: string;
}

// Tipos para las misiones
export interface Mission {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  type: 'new' | 'power' | 'completed';
  badge: string;
  color: string;
}

// Tipos para formularios
export interface LoginFormData {
  username: string;
  password: string;
}

// Tipos para props de componentes
export interface CreateAccountButtonProps {
  onClick?: () => void;
}

export interface AstronautPanelProps {
  selectedAstronaut?: number;
  onAstronautSelect?: (id: number) => void;
}

export interface LoginPanelProps {
  onLogin?: (data: LoginFormData) => void;
}

export interface MissionNewsPanelProps {
  missions?: Mission[];
}