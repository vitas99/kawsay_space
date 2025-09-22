// types/index.ts - Definición de tipos para la aplicación

// Tipos para los astronautas
export interface Astronaut {
  id: number;
  name: string;
  color: string;
  avatar: string;
  mission?: string;
  status?: 'active' | 'inactive' | 'on-mission';
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
  description?: string;
  duration?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

// Tipos para formularios
export interface LoginFormData {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

// Tipos para respuestas de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Tipos para props de componentes principales
export interface CreateAccountButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface AstronautPanelProps {
  selectedAstronaut?: number;
  onAstronautSelect?: (id: number) => void;
  astronauts?: Astronaut[];
}

export interface LoginPanelProps {
  onLogin?: (data: LoginFormData) => Promise<void>;
  loading?: boolean;
  error?: string | null;
}

export interface MissionNewsPanelProps {
  missions?: Mission[];
  onMissionClick?: (mission: Mission) => void;
}

// Tipos para props de componentes específicos de MainDashboard
export interface StarFieldProps {
  starCount: number;
  className?: string;
  animated?: boolean;
}

export interface GlassPanelProps {
  children: React.ReactNode;
  curved?: boolean;
  animated?: boolean;
  glowEffect?: boolean;
  borderColor?: 'cyan' | 'blue' | 'green' | 'red' | 'yellow';
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  className?: string;
}

export interface PlanetEarthProps {
  size: number;
  rotationSpeed?: number;
  showAtmosphere?: boolean;
  showClouds?: boolean;
  showRocket?: boolean;
  className?: string;
}

export interface NavigationButtonProps {
  icon?: string;
  text?: string;
  variant?: 'profile' | 'logic' | 'account' | 'info' | 'question' | 'help';
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  onClick?: () => void;
  tooltip?: string;
  disabled?: boolean;
}

// Tipos para MainDashboard
export interface MainDashboardProps {
  onNavigate?: (route: string) => void;
  userName?: string;
  userAvatar?: string;
  systemStatus?: {
    system: 'online' | 'offline' | 'maintenance';
    connection: 'stable' | 'unstable' | 'disconnected';
    explorer: string;
  };
}

// Tipos para estados de la aplicación
export interface AppState {
  user: {
    name: string;
    avatar?: string;
    isLoggedIn: boolean;
  };
  currentView: 'login' | 'register' | 'dashboard' | 'mission';
  selectedMission?: Mission;
  loading: boolean;
  error: string | null;
}

// Tipos para rutas
export type RouteNames = 
  | 'login'
  | 'register' 
  | 'dashboard'
  | 'profile'
  | 'settings'
  | 'team'
  | 'info'
  | 'about'
  | 'faq'
  | 'help'
  | 'missions'
  | `mission-${number}`;

// Tipos para eventos
export interface NavigationEvent {
  route: RouteNames;
  timestamp: Date;
  source: 'button' | 'keyboard' | 'programmatic';
}

// Tipos para configuración
export interface AppConfig {
  theme: 'dark' | 'light';
  language: 'es' | 'en';
  animations: boolean;
  soundEffects: boolean;
}

// Interfaces para errores personalizados (en lugar de clases)
export interface NavigationErrorData {
  name: 'NavigationError';
  message: string;
  route: string;
  source: string;
}

export interface MissionErrorData {
  name: 'MissionError';
  message: string;
  missionId: number;
}

// Factory functions para crear errores (reemplazo de las clases)
export function createNavigationError(
  message: string,
  route: string,
  source: string
): NavigationErrorData {
  return {
    name: 'NavigationError',
    message,
    route,
    source
  };
}

export function createMissionError(
  message: string,
  missionId: number
): MissionErrorData {
  return {
    name: 'MissionError',
    message,
    missionId
  };
}

// Tipos para utilidades
export interface Coordinates {
  x: number;
  y: number;
  z?: number;
}

export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

// Tipos para constantes (reemplazo de as const)
export type MissionType = 'new' | 'power' | 'completed';
export type NavigationVariant = 'profile' | 'logic' | 'account' | 'info' | 'question' | 'help';
export type SystemStatus = 'online' | 'offline' | 'maintenance';

// Arrays de constantes normales (sin as const)
export const MISSION_TYPES: MissionType[] = ['new', 'power', 'completed'];
export const NAVIGATION_VARIANTS: NavigationVariant[] = ['profile', 'logic', 'account', 'info', 'question', 'help'];
export const SYSTEM_STATUS_OPTIONS: SystemStatus[] = ['online', 'offline', 'maintenance'];

// Funciones de utilidad para validación de tipos
export function isMissionType(value: string): value is MissionType {
  return MISSION_TYPES.includes(value as MissionType);
}

export function isNavigationVariant(value: string): value is NavigationVariant {
  return NAVIGATION_VARIANTS.includes(value as NavigationVariant);
}

export function isSystemStatus(value: string): value is SystemStatus {
  return SYSTEM_STATUS_OPTIONS.includes(value as SystemStatus);
}

// Constantes adicionales para la aplicación
export const DEFAULT_ANIMATION_DURATION = 300;
export const DEFAULT_USER_NAME = "Futuro Explorador";
export const MAX_STARS_COUNT = 500;
export const MIN_STARS_COUNT = 50;

// Tipos para autenticación (compatibilidad hacia atrás)
export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}