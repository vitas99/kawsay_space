// data/missions.ts
import { 
  type StarMapMission, 
  type NasaArticle, 
  type Quiz, 
  type Badge,
  createStarMapMission,
  createBadge 
} from '../types/index';

// Misiones principales del mapa estelar - SOLO LAS REALES
export const STAR_MAP_MISSIONS: StarMapMission[] = [
  // Artículo 1: Pérdida Ósea
  {
    ...createStarMapMission('bone-loss', 'PÉRDIDA ÓSEA', 'Microgravedad y Huesos', 'earth', { x: 30, y: 70 }),
    isLocked: false,
    connections: ['bench-to-exploration'],
    difficulty: 'medium',
    estimatedTime: 12,
    nasaArticleId: 'nasa-article-bone-loss'
  },
  
  // Artículo 2: Del laboratorio a la exploración
  {
    ...createStarMapMission('bench-to-exploration', 'MEDICINA ESPACIAL', 'Del Laboratorio al Espacio', 'moon', { x: 55, y: 50 }),
    isLocked: false,
    connections: ['cardiovascular-cells'],
    difficulty: 'medium',
    estimatedTime: 15,
    nasaArticleId: 'nasa-article-bench-to-exploration'
  },
  
  // Artículo 3: Células cardiovasculares
  {
    ...createStarMapMission('cardiovascular-cells', 'CORAZÓN ESTELAR', 'Células Cardíacas en Órbita', 'mars', { x: 75, y: 35 }),
    isLocked: false,
    connections: ['neural-stem-cells'],
    difficulty: 'hard',
    estimatedTime: 18,
    nasaArticleId: 'nasa-article-cardiovascular'
  },
  
  // Artículo 4: Células madre neuronales
  {
    ...createStarMapMission('neural-stem-cells', 'NEURONAS ESPACIALES', 'Células Cerebrales Voladoras', 'europa', { x: 25, y: 20 }),
    isLocked: false,
    connections: [],
    difficulty: 'hard',
    estimatedTime: 16,
    nasaArticleId: 'nasa-article-neural-stem'
  }
];

// Artículos NASA - LOS 4 REALES
export const NASA_ARTICLES: Record<string, NasaArticle> = {
  // ARTÍCULO 1: Pérdida Ósea
  'nasa-article-bone-loss': {
    id: 'nasa-article-bone-loss',
    title: 'Microgravedad y Pérdida Ósea en el Espacio',
    content: `# MISIÓN ESPACIAL: ¿Por qué los huesos de la pelvis se debilitan en gravedad cero?`,
    imageUrl: '/images/bone-loss.jpg',
    videoUrl: '',
    sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3630201/',
    publishedDate: new Date('2024-01-15'),
    readingTime: 12,
    tags: ['microgravedad', 'huesos', 'osteoblastos', 'osteoclastos', 'salud espacial']
  },

  // ARTÍCULO 2: Del laboratorio a la exploración
  'nasa-article-bench-to-exploration': {
    id: 'nasa-article-bench-to-exploration',
    title: 'Del Laboratorio a la Exploración Médica Espacial',
    content: `# Misión Espacial: ¡Transformar experimentos de laboratorio en súper poderes para astronautas!`,
    imageUrl: '/images/bench-to-exploration.jpg',
    videoUrl: '',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5460236/',
    publishedDate: new Date('2024-02-20'),
    readingTime: 15,
    tags: ['medicina espacial', 'investigación traslacional', 'sistema inmune', 'microbios']
  },

  // ARTÍCULO 3: Células cardiovasculares
  'nasa-article-cardiovascular': {
    id: 'nasa-article-cardiovascular',
    title: 'Células del Corazón Cultivadas en la Estación Espacial',
    content: `# Misión Espacial: Misión Corazón Estelar`,
    imageUrl: '/images/cardiovascular-cells.jpg',
    videoUrl: '',
    sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6062551/',
    publishedDate: new Date('2024-03-10'),
    readingTime: 18,
    tags: ['células cardiovasculares', 'corazón', 'regeneración', 'ISS']
  },

  // ARTÍCULO 4: Células madre neuronales
  'nasa-article-neural-stem': {
    id: 'nasa-article-neural-stem',
    title: 'Células Madre Neuronales Volaron al Espacio',
    content: `# Human Neural Stem Cells Flown into Space`,
    imageUrl: '/images/neural-stem-cells.jpg',
    videoUrl: '',
    sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8412175/',
    publishedDate: new Date('2024-04-05'),
    readingTime: 16,
    tags: ['neuronas', 'células madre', 'cerebro', 'microgravedad']
  }
};

// Cuestionarios para cada misión
export const MISSION_QUIZZES: Record<string, Quiz> = {
  'bone-loss': {
    id: 'quiz-bone-loss',
    missionId: 'bone-loss',
    passingScore: 70,
    timeLimit: 360,
    questions: [
      {
        id: 'bone-q1',
        question: '¿Qué células son conocidas como los "comedores de hueso"?',
        options: ['Osteocitos', 'Osteoblastos', 'Osteoclastos', 'Osteocondrocitos'],
        correctAnswer: 2,
        explanation: 'Los osteoclastos son las células responsables de destruir o reabsorber el tejido óseo.',
        points: 10
      },
      {
        id: 'bone-q2',
        question: '¿Qué proteína inhibe el ciclo celular de los osteoblastos en microgravedad?',
        options: ['MMP-1', 'CDKN1a/p21', 'Helio-3', 'Calcitonina'],
        correctAnswer: 1,
        explanation: 'La proteína CDKN1a/p21 actúa como un "guardián" que detiene la multiplicación de los osteoblastos.',
        points: 10
      },
      {
        id: 'bone-q3',
        question: '¿Cuántos días duraron los ratones en el transbordador espacial?',
        options: ['7 días', '15 días', '30 días', '60 días'],
        correctAnswer: 1,
        explanation: 'Los ratones permanecieron 15 días en el transbordador espacial.',
        points: 10
      },
      {
        id: 'bone-q4',
        question: '¿Qué porcentaje disminuyó el volumen de hueso?',
        options: ['3%', '6%', '12%', '20%'],
        correctAnswer: 1,
        explanation: 'El volumen de hueso disminuyó aproximadamente un 6%.',
        points: 10
      }
    ]
  },

  'bench-to-exploration': {
    id: 'quiz-bench-to-exploration',
    missionId: 'bench-to-exploration',
    passingScore: 70,
    timeLimit: 360,
    questions: [
      {
        id: 'bench-q1',
        question: '¿Cuál es el objetivo principal de la investigación traslacional de NASA?',
        options: [
          'Solo estudiar el espacio',
          'Llevar ciencia del laboratorio al espacio real',
          'Crear naves espaciales',
          'Estudiar solo planetas'
        ],
        correctAnswer: 1,
        explanation: 'La investigación traslacional busca llevar los descubrimientos del laboratorio a aplicaciones prácticas en el espacio.',
        points: 10
      },
      {
        id: 'bench-q2',
        question: '¿Qué le pasa al sistema inmune en el espacio?',
        options: [
          'Se fortalece',
          'Se debilita',
          'No cambia',
          'Desaparece'
        ],
        correctAnswer: 1,
        explanation: 'El sistema inmune se debilita en el espacio, haciendo a los astronautas más vulnerables.',
        points: 10
      },
      {
        id: 'bench-q3',
        question: '¿Cómo se comportan algunas bacterias en microgravedad?',
        options: [
          'Mueren todas',
          'Se vuelven más fuertes y peligrosas',
          'No cambian',
          'Se debilitan'
        ],
        correctAnswer: 1,
        explanation: 'Algunas bacterias se vuelven más fuertes y resistentes en el ambiente espacial.',
        points: 10
      }
    ]
  },

  'cardiovascular-cells': {
    id: 'quiz-cardiovascular',
    missionId: 'cardiovascular-cells',
    passingScore: 70,
    timeLimit: 420,
    questions: [
      {
        id: 'cardio-q1',
        question: '¿Qué son las CPCs?',
        options: [
          'Células Planetarias Cósmicas',
          'Células cardiovasculares progenitoras',
          'Células de la piel',
          'Células del hígado'
        ],
        correctAnswer: 1,
        explanation: 'CPCs son células cardiovasculares progenitoras, células base del corazón.',
        points: 10
      },
      {
        id: 'cardio-q2',
        question: '¿Qué cambió en las células tras estar en el espacio?',
        options: [
          'Nada',
          'Se volvieron más jóvenes genéticamente',
          'Murieron todas',
          'Se convirtieron en células de piel'
        ],
        correctAnswer: 1,
        explanation: 'Las CPCs de recién nacidos se volvieron más "jóvenes" genéticamente tras el viaje espacial.',
        points: 10
      },
      {
        id: 'cardio-q3',
        question: '¿Cómo se movieron las células tras el viaje espacial?',
        options: [
          'No se movieron',
          'Más lento',
          'Mejor, migraron más rápido',
          'Igual que antes'
        ],
        correctAnswer: 2,
        explanation: 'Las células mejoraron su capacidad de migración tras estar en el espacio.',
        points: 10
      }
    ]
  },

  'neural-stem-cells': {
    id: 'quiz-neural',
    missionId: 'neural-stem-cells',
    passingScore: 70,
    timeLimit: 400,
    questions: [
      {
        id: 'neural-q1',
        question: '¿Cuántos días estuvieron las células cerebrales en la ISS?',
        options: ['15 días', '30 días', '39 días', '60 días'],
        correctAnswer: 2,
        explanation: 'Las células madre neuronales estuvieron 39 días en la Estación Espacial Internacional.',
        points: 10
      },
      {
        id: 'neural-q2',
        question: '¿Qué le pasó a la energía de las células en el espacio?',
        options: [
          'Disminuyó',
          'Se mantuvo igual',
          'Aumentó (modo turbo)',
          'Desapareció'
        ],
        correctAnswer: 2,
        explanation: 'Las células usaban más oxígeno y glucosa en el espacio, entraron en "modo turbo".',
        points: 10
      },
      {
        id: 'neural-q3',
        question: '¿Pudieron las células convertirse en neuronas tras volver a la Tierra?',
        options: [
          'No, murieron todas',
          'Sí, seguían pudiendo transformarse',
          'Solo algunas',
          'Se convirtieron en células del corazón'
        ],
        correctAnswer: 1,
        explanation: 'Las células mantuvieron su capacidad de transformarse en neuronas jóvenes.',
        points: 10
      }
    ]
  }
};

// Insignias
export const MISSION_BADGES: Record<string, Badge[]> = {
  'bone-loss': [
    createBadge('bone-scientist', 'Científico Óseo', 'Estudió la pérdida ósea espacial', '🦴', 'rare')
  ],
  'bench-to-exploration': [
    createBadge('space-medic', 'Médico Espacial', 'Domina la medicina espacial', '🏥', 'rare')
  ],
  'cardiovascular-cells': [
    createBadge('heart-explorer', 'Explorador Cardíaco', 'Investigó células del corazón', '❤️', 'epic')
  ],
  'neural-stem-cells': [
    createBadge('brain-pioneer', 'Pionero Cerebral', 'Estudió neuronas espaciales', '🧠', 'epic')
  ]
};

// Resto de funciones de utilidad...
export const EXPERIENCE_CONFIG = {
  MISSION_BASE_XP: 100,
  QUIZ_PERFECT_BONUS: 50,
  QUIZ_GOOD_BONUS: 25,
  LEVEL_XP_MULTIPLIER: 1000,
  MAX_LEVEL: 50
};

export const calculateMissionXP = (
  difficulty: 'easy' | 'medium' | 'hard',
  quizScore: number,
  timeSpent: number
): number => {
  const baseXP = EXPERIENCE_CONFIG.MISSION_BASE_XP;
  const difficultyMultiplier = { easy: 1, medium: 1.5, hard: 2 }[difficulty];
  let quizBonus = 0;
  if (quizScore >= 90) quizBonus = EXPERIENCE_CONFIG.QUIZ_PERFECT_BONUS;
  else if (quizScore >= 70) quizBonus = EXPERIENCE_CONFIG.QUIZ_GOOD_BONUS;
  const timePenalty = timeSpent > 1800 ? 0.9 : 1;
  return Math.floor((baseXP * difficultyMultiplier + quizBonus) * timePenalty);
};

export const calculateLevelFromXP = (totalXP: number): number => {
  return Math.floor(totalXP / EXPERIENCE_CONFIG.LEVEL_XP_MULTIPLIER) + 1;
};

export const getXPForNextLevel = (currentLevel: number): number => {
  return currentLevel * EXPERIENCE_CONFIG.LEVEL_XP_MULTIPLIER;
};

export const validateMissionCompletion = (
  missionId: string,
  quizScore: number,
  timeSpent: number
): boolean => {
  const quiz = MISSION_QUIZZES[missionId];
  if (!quiz) return false;
  return quizScore >= quiz.passingScore && timeSpent <= (quiz.timeLimit || 3600);
};

export const getNextAvailableMission = (
  completedMissions: string[]
): string | null => {
  for (const mission of STAR_MAP_MISSIONS) {
    if (!completedMissions.includes(mission.id) && !mission.isLocked) {
      const hasPrerequisites = STAR_MAP_MISSIONS.some(prerequisite =>
        prerequisite.connections.includes(mission.id) &&
        completedMissions.includes(prerequisite.id)
      );
      if (hasPrerequisites || mission.id === 'bone-loss') {
        return mission.id;
      }
    }
  }
  return null;
};