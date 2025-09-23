// data/missions.ts - Datos de las misiones NASA y configuración

import { 
  type StarMapMission, 
  type NasaArticle, 
  type Quiz, 
  type QuizQuestion, 
  type Badge,
  createStarMapMission,
  createBadge 
} from '../types/index';

// Misiones principales del mapa estelar
export const STAR_MAP_MISSIONS: StarMapMission[] = [
  // Tierra - Misión inicial
  {
    ...createStarMapMission('earth-start', 'ÓRBITA TERRESTRE', 'Inicio de Misión', 'earth', { x: 50, y: 85 }),
    isLocked: false,
    connections: ['moon-station', 'mars-mission'],
    difficulty: 'easy',
    estimatedTime: 10
  },
  
  // Luna - Estaciones lunares
  {
    ...createStarMapMission('moon-station', 'LUNA', 'Estación Alpaca', 'moon', { x: 75, y: 60 }),
    connections: ['mars-mission', 'luna-gamma'],
    difficulty: 'medium',
    estimatedTime: 15
  },
  
  {
    ...createStarMapMission('luna-gamma', 'LUNA', 'Estación Gamma', 'moon', { x: 25, y: 75 }),
    connections: ['europa-biolab'],
    difficulty: 'medium',
    estimatedTime: 20
  },
  
  // Marte - Exploración marciana
  {
    ...createStarMapMission('mars-mission', 'MARTE', 'Chacra Especial', 'mars', { x: 45, y: 35 }),
    connections: ['europa-biolab', 'paracas-planet'],
    difficulty: 'hard',
    estimatedTime: 25
  },
  
  // Europa - Investigación de vida
  {
    ...createStarMapMission('europa-biolab', 'EUROPA', 'Biolab Acuático', 'europa', { x: 85, y: 45 }),
    connections: [],
    difficulty: 'hard',
    estimatedTime: 30
  },
  
  // Planetas Paracas - Exploración de exoplanetas
  {
    ...createStarMapMission('paracas-planet', 'PLANETA PARACAS', 'Tejidos Cósmicos', 'paracas', { x: 15, y: 25 }),
    connections: ['paracas-planet-2'],
    difficulty: 'hard',
    estimatedTime: 35
  },
  
  {
    ...createStarMapMission('paracas-planet-2', 'PLANETA PARACAS', 'Tejidos Avanzados', 'paracas', { x: 85, y: 15 }),
    connections: [],
    difficulty: 'hard',
    estimatedTime: 40
  }
];

// Artículos NASA asociados a cada misión
export const NASA_ARTICLES: Record<string, NasaArticle> = {
  'nasa-article-earth-start': {
    id: 'nasa-article-earth-start',
    title: 'Órbita Terrestre: El Primer Paso al Espacio',
    content: `
# Órbita Terrestre: El Primer Paso al Espacio

La órbita terrestre baja (LEO) es el primer destino de cualquier misión espacial. Aquí, a aproximadamente 400 kilómetros sobre la superficie de la Tierra, los astronautas experimentan la microgravedad y pueden observar nuestro planeta desde una perspectiva única.

## ¿Qué es la Órbita Terrestre Baja?

La órbita terrestre baja se extiende desde los 160 km hasta los 2,000 km de altitud. Es aquí donde se encuentran:

- La Estación Espacial Internacional (ISS)
- La mayoría de los satélites de observación terrestre
- Los telescopios espaciales como el Hubble

## Microgravedad y Sus Efectos

En la órbita terrestre, los astronautas experimentan microgravedad, lo que permite:

- Experimentos científicos únicos
- Crecimiento de cristales perfectos
- Investigación médica avanzada
- Estudios de comportamiento de fluidos

## Misiones Históricas

- **Sputnik 1** (1957): Primer satélite artificial
- **Yuri Gagarin** (1961): Primer ser humano en órbita
- **Apollo 11** (1969): Misión lunar que partió de órbita terrestre
- **ISS** (1998-presente): Laboratorio orbital internacional

La órbita terrestre sigue siendo fundamental para la exploración espacial moderna y el punto de partida hacia destinos más lejanos.
    `,
    imageUrl: '/images/earth-orbit.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=earth-orbit-video',
    sourceUrl: 'https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-orbit-k4.html',
    publishedDate: new Date('2024-01-15'),
    readingTime: 8,
    tags: ['órbita', 'tierra', 'microgravedad', 'ISS', 'exploración espacial']
  },

  'nasa-article-moon-station': {
    id: 'nasa-article-moon-station',
    title: 'La Luna: Nuestro Laboratorio Natural',
    content: `
# La Luna: Nuestro Laboratorio Natural

La Luna ha sido el objetivo de la humanidad desde el amanecer de la era espacial. Como nuestro satélite natural más cercano, ofrece oportunidades únicas para la investigación científica y la preparación para misiones más lejanas.

## Características Lunares

- **Gravedad**: 1/6 de la terrestre
- **Día lunar**: 29.5 días terrestres
- **Temperatura**: -173°C a 127°C
- **Atmósfera**: Prácticamente inexistente

## Programa Artemis

NASA está desarrollando el programa Artemis para:

- Establecer una presencia sostenible en la Luna
- Construir la estación Gateway en órbita lunar
- Preparar misiones tripuladas a Marte
- Desarrollar tecnologías de exploración profunda

## Recursos Lunares

La Luna contiene:

- **Agua congelada** en los polos
- **Helio-3** para energía nuclear
- **Minerales raros** para tecnología
- **Regolito** para construcción

## Bases Lunares del Futuro

Las futuras bases lunares incluirán:

- Hábitats presurizados
- Laboratorios de investigación
- Sistemas de soporte vital
- Plataformas de lanzamiento

La Luna será nuestro trampolín hacia el sistema solar exterior.
    `,
    imageUrl: '/images/lunar-station.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=lunar-exploration-video',
    sourceUrl: 'https://www.nasa.gov/artemisprogram',
    publishedDate: new Date('2024-02-10'),
    readingTime: 12,
    tags: ['luna', 'artemis', 'exploración', 'bases lunares', 'recursos']
  },

  'nasa-article-mars-mission': {
    id: 'nasa-article-mars-mission',
    title: 'Marte: El Planeta Rojo y la Búsqueda de Vida',
    content: `
# Marte: El Planeta Rojo y la Búsqueda de Vida

Marte, conocido como el "Planeta Rojo" debido a su color característico, es uno de los objetivos principales de la exploración espacial moderna. Su similitud con la Tierra y las evidencias de agua pasada lo convierten en un candidato ideal para la búsqueda de vida.

## Características de Marte

- **Diámetro**: Aproximadamente la mitad del de la Tierra
- **Día marciano**: 24 horas 37 minutos
- **Año marciano**: 687 días terrestres
- **Gravedad**: 38% de la terrestre
- **Atmósfera**: 95% dióxido de carbono

## Misiones Rover Actuales

### Perseverance (2021-presente)
- Búsqueda de signos de vida antigua
- Recolección de muestras para retorno futuro
- Producción de oxígeno (MOXIE)
- Helicóptero Ingenuity como compañero

### Curiosity (2012-presente)
- Análisis de la geología marciana
- Estudio de la habitabilidad pasada
- Investigación del clima marciano

## Evidencias de Agua

Marte muestra evidencias de:

- **Canales de ríos antiguos**
- **Lagos y océanos prehistóricos**
- **Agua líquida estacional** (percloratos)
- **Hielo en los polos** y subsuelo

## Misiones Tripuladas Futuras

Los planes para enviar humanos a Marte incluyen:

- Viajes de 6-9 meses cada tramo
- Estancias de 18-26 meses en superficie
- Sistemas de soporte vital cerrados
- Producción in-situ de combustible y oxígeno

## Terraformación

Conceptos teóricos para hacer Marte habitable:

- Liberación de CO₂ de los polos
- Creación de una atmósfera más densa
- Calentamiento global controlado
- Introducción de organismos extremófilos

Marte representa el futuro de la humanidad como especie multiplanetaria.
    `,
    imageUrl: '/images/mars-surface.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=mars-exploration-video',
    sourceUrl: 'https://www.nasa.gov/mars',
    publishedDate: new Date('2024-03-05'),
    readingTime: 15,
    tags: ['marte', 'rover', 'perseverance', 'vida', 'terraformación', 'exploración']
  },

  'nasa-article-europa-biolab': {
    id: 'nasa-article-europa-biolab',
    title: 'Europa: Un Océano Bajo el Hielo',
    content: `
# Europa: Un Océano Bajo el Hielo

Europa, una de las lunas más fascinantes de Júpiter, esconde bajo su superficie helada un vasto océano que podría albergar vida. Con más agua líquida que todos los océanos de la Tierra juntos, Europa es un objetivo prioritario en la búsqueda de vida extraterrestre.

## Características de Europa

- **Diámetro**: 3,121 km (ligeramente menor que la Luna)
- **Órbita**: 670,900 km de Júpiter
- **Periodo orbital**: 3.5 días terrestres
- **Composición**: Núcleo rocoso, océano líquido, corteza de hielo

## El Océano Subsuperficial

Europa posee:

- **Océano global** de 100-200 km de profundidad
- **Corteza de hielo** de 20-30 km de espesor
- **Volumen de agua** 2-3 veces mayor que los océanos terrestres
- **Actividad geológica** que mantiene el agua líquida

## Fuentes de Energía para la Vida

### Calentamiento por Marea
- Las fuerzas gravitacionales de Júpiter
- Flexión constante del interior de Europa
- Generación de calor por fricción

### Química del Océano
- Interacción agua-roca en el fondo oceánico
- Posible presencia de compuestos orgánicos
- Sistemas hidrotermales similares a la Tierra

## Misión Europa Clipper

Programada para lanzamiento en 2024:

- **Objetivo**: Estudiar la habitabilidad de Europa
- **Instrumentos**: Radar, espectrómetros, magnetómetros
- **Órbitas**: Múltiples sobrevuelos cercanos
- **Duración**: Misión de 4 años

## Búsqueda de Vida

Estrategias para detectar vida:

- Análisis de los penachos de vapor de agua
- Estudio de la composición química del océano
- Búsqueda de biomarcadores
- Detección de patrones de actividad biológica

## Desafíos de la Exploración

- **Radiación intensa** de Júpiter
- **Distancia extrema** de la Tierra
- **Comunicación retrasada** (33-75 minutos)
- **Condiciones extremas** de frío y vacío

Europa representa una de nuestras mejores oportunidades para encontrar vida más allá de la Tierra.
    `,
    imageUrl: '/images/europa-surface.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=europa-clipper-video',
    sourceUrl: 'https://www.nasa.gov/europa-clipper',
    publishedDate: new Date('2024-04-20'),
    readingTime: 18,
    tags: ['europa', 'júpiter', 'océano', 'vida', 'clipper', 'astrobiología']
  },

  'nasa-article-exoplanet-discovery': {
    id: 'nasa-article-exoplanet-discovery',
    title: 'Exoplanetas: Mundos Más Allá del Sistema Solar',
    content: `
# Exoplanetas: Mundos Más Allá del Sistema Solar

Los exoplanetas, o planetas extrasolares, son mundos que orbitan estrellas diferentes a nuestro Sol. Desde el descubrimiento del primer exoplaneta en 1995, hemos identificado miles de estos mundos distantes, expandiendo nuestra comprensión del universo y las posibilidades de vida.

## Métodos de Detección

### Tránsito
- Disminución del brillo estelar cuando el planeta pasa frente a la estrella
- Utilizado por las misiones Kepler y TESS
- Permite medir el tamaño del planeta

### Velocidad Radial
- Detección del "bamboleo" gravitacional de la estrella
- Permite determinar la masa del planeta
- Primer método exitoso para detectar exoplanetas

### Imagen Directa
- Fotografía directa del planeta
- Extremadamente difícil debido al brillo de la estrella
- Requiere coronógrafos avanzados

## Telescopio Espacial James Webb

El JWST está revolucionando el estudio de exoplanetas:

- **Análisis atmosférico** de exoplanetas
- **Detección de vapor de agua** y otros gases
- **Caracterización de planetas rocosos**
- **Búsqueda de biomarcadores**

## Tipos de Exoplanetas

### Súper-Tierras
- Planetas rocosos más grandes que la Tierra
- Posiblemente habitables
- Comunes en la galaxia

### Gigantes Gaseosos Calientes
- Júpiteres que orbitan muy cerca de su estrella
- Temperaturas extremas (>1000°C)
- Primeros exoplanetas descubiertos

### Planetas en Zona Habitable
- Distancia correcta para agua líquida
- Candidatos para albergar vida
- Objetivo principal de búsqueda

## Misiones Futuras

### Telescopio Espacial Nancy Grace Roman
- Búsqueda de exoplanetas mediante microlente gravitacional
- Detección de planetas similares a la Tierra
- Lanzamiento previsto para 2027

### Misión HabEx
- Imagen directa de exoplanetas habitables
- Análisis espectroscópico de atmósferas
- Búsqueda de signos de vida

## Estadísticas Actuales

- **Más de 5,000** exoplanetas confirmados
- **Cientos de candidatos** en zona habitable
- **Estimación**: 100 mil millones de planetas en la Vía Láctea
- **Posibilidad**: 1 de cada 5 estrellas tiene un planeta habitable

## Implicaciones para la Vida

Los exoplanetas nos enseñan que:

- Los sistemas planetarios son comunes
- La diversidad de mundos es inmensa
- Las condiciones para la vida pueden ser más variadas de lo pensado
- La Tierra podría no ser única

La búsqueda de exoplanetas continúa expandiendo nuestros horizontes y acercándonos a responder la pregunta fundamental: ¿estamos solos en el universo?
    `,
    imageUrl: '/images/exoplanet-art.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=exoplanet-discovery-video',
    sourceUrl: 'https://exoplanets.nasa.gov/',
    publishedDate: new Date('2024-05-15'),
    readingTime: 20,
    tags: ['exoplanetas', 'JWST', 'kepler', 'TESS', 'zona habitable', 'vida extraterrestre']
  }
};

// Cuestionarios para cada misión
export const MISSION_QUIZZES: Record<string, Quiz> = {
  'earth-start': {
    id: 'quiz-earth-start',
    missionId: 'earth-start',
    passingScore: 70,
    timeLimit: 300,
    questions: [
      {
        id: 'earth-q1',
        question: '¿A qué altitud se encuentra aproximadamente la órbita terrestre baja (LEO)?',
        options: ['100-200 km', '160-2000 km', '2000-5000 km', '5000-10000 km'],
        correctAnswer: 1,
        explanation: 'La órbita terrestre baja se extiende desde los 160 km hasta los 2,000 km de altitud.',
        points: 10
      },
      {
        id: 'earth-q2',
        question: '¿Qué es la microgravedad?',
        options: [
          'Ausencia total de gravedad',
          'Gravedad muy débil experimentada en órbita',
          'Gravedad artificial creada por rotación',
          'Gravedad invertida'
        ],
        correctAnswer: 1,
        explanation: 'La microgravedad es la sensación de gravedad muy débil que experimentan los objetos en caída libre orbital.',
        points: 10
      },
      {
        id: 'earth-q3',
        question: '¿Cuál fue el primer satélite artificial en órbita terrestre?',
        options: ['Explorer 1', 'Sputnik 1', 'Vanguard 1', 'Telstar 1'],
        correctAnswer: 1,
        explanation: 'Sputnik 1, lanzado por la Unión Soviética en 1957, fue el primer satélite artificial.',
        points: 10
      }
    ]
  },

  'moon-station': {
    id: 'quiz-moon-station',
    missionId: 'moon-station',
    passingScore: 70,
    timeLimit: 360,
    questions: [
      {
        id: 'moon-q1',
        question: '¿Cuál es la gravedad lunar comparada con la terrestre?',
        options: ['1/2', '1/4', '1/6', '1/8'],
        correctAnswer: 2,
        explanation: 'La gravedad lunar es aproximadamente 1/6 de la gravedad terrestre.',
        points: 10
      },
      {
        id: 'moon-q2',
        question: '¿Cuánto dura un día lunar completo?',
        options: ['24 horas', '27.3 días', '29.5 días', '14.7 días'],
        correctAnswer: 2,
        explanation: 'Un día lunar (de luna nueva a luna nueva) dura aproximadamente 29.5 días terrestres.',
        points: 10
      },
      {
        id: 'moon-q3',
        question: '¿Qué es el programa Artemis de NASA?',
        options: [
          'Misión a Marte',
          'Telescopio espacial',
          'Programa lunar tripulado',
          'Estación espacial'
        ],
        correctAnswer: 2,
        explanation: 'Artemis es el programa de NASA para llevar humanos de regreso a la Luna de manera sostenible.',
        points: 10
      }
    ]
  },

  'mars-mission': {
    id: 'quiz-mars-mission',
    missionId: 'mars-mission',
    passingScore: 70,
    timeLimit: 420,
    questions: [
      {
        id: 'mars-q1',
        question: '¿De qué está compuesta principalmente la atmósfera marciana?',
        options: ['Oxígeno', 'Nitrógeno', 'Dióxido de carbono', 'Metano'],
        correctAnswer: 2,
        explanation: 'La atmósfera de Marte está compuesta en un 95% por dióxido de carbono.',
        points: 10
      },
      {
        id: 'mars-q2',
        question: '¿Cuánto dura un año marciano?',
        options: ['365 días', '687 días', '445 días', '523 días'],
        correctAnswer: 1,
        explanation: 'Un año marciano dura aproximadamente 687 días terrestres.',
        points: 10
      },
      {
        id: 'mars-q3',
        question: '¿Cómo se llama el rover de NASA que aterrizó en Marte en 2021?',
        options: ['Curiosity', 'Perseverance', 'Opportunity', 'Spirit'],
        correctAnswer: 1,
        explanation: 'Perseverance es el rover más reciente de NASA, que aterrizó en Marte en febrero de 2021.',
        points: 10
      }
    ]
  }
};

// Sistema de insignias y recompensas
export const MISSION_BADGES: Record<string, Badge[]> = {
  'earth-start': [
    createBadge(
      'first-steps',
      'Primeros Pasos',
      'Primera misión completada',
      '🚀',
      'common'
    )
  ],
  
  'moon-station': [
    createBadge(
      'lunar-explorer',
      'Explorador Lunar',
      'Misión lunar completada',
      '🌙',
      'rare'
    )
  ],
  
  'mars-mission': [
    createBadge(
      'mars-pioneer',
      'Pionero Marciano',
      'Exploración de Marte',
      '🔴',
      'epic'
    )
  ],
  
  'europa-biolab': [
    createBadge(
      'ocean-discoverer',
      'Descubridor de Océanos',
      'Investigación en Europa',
      '🌊',
      'legendary'
    )
  ],
  
  'paracas-planet': [
    createBadge(
      'exoplanet-hunter',
      'Cazador de Exoplanetas',
      'Exploración de mundos lejanos',
      '🪐',
      'legendary'
    )
  ]
};

// Configuración de experiencia y niveles
export const EXPERIENCE_CONFIG = {
  MISSION_BASE_XP: 100,
  QUIZ_PERFECT_BONUS: 50,
  QUIZ_GOOD_BONUS: 25,
  LEVEL_XP_MULTIPLIER: 1000,
  MAX_LEVEL: 50
};

// Funciones de utilidad
export const calculateMissionXP = (
  difficulty: 'easy' | 'medium' | 'hard',
  quizScore: number,
  timeSpent: number
): number => {
  const baseXP = EXPERIENCE_CONFIG.MISSION_BASE_XP;
  
  // Multiplicador por dificultad
  const difficultyMultiplier = {
    easy: 1,
    medium: 1.5,
    hard: 2
  }[difficulty];
  
  // Bonus por puntaje del quiz
  let quizBonus = 0;
  if (quizScore >= 90) quizBonus = EXPERIENCE_CONFIG.QUIZ_PERFECT_BONUS;
  else if (quizScore >= 70) quizBonus = EXPERIENCE_CONFIG.QUIZ_GOOD_BONUS;
  
  // Penalización por tiempo excesivo (opcional)
  const timePenalty = timeSpent > 1800 ? 0.9 : 1; // 30 minutos
  
  return Math.floor((baseXP * difficultyMultiplier + quizBonus) * timePenalty);
};

export const calculateLevelFromXP = (totalXP: number): number => {
  return Math.floor(totalXP / EXPERIENCE_CONFIG.LEVEL_XP_MULTIPLIER) + 1;
};

export const getXPForNextLevel = (currentLevel: number): number => {
  return currentLevel * EXPERIENCE_CONFIG.LEVEL_XP_MULTIPLIER;
};

// Validación de misiones completadas
export const validateMissionCompletion = (
  missionId: string,
  quizScore: number,
  timeSpent: number
): boolean => {
  const quiz = MISSION_QUIZZES[missionId];
  if (!quiz) return false;
  
  return quizScore >= quiz.passingScore && timeSpent <= (quiz.timeLimit || 3600);
};

// Obtener siguiente misión disponible
export const getNextAvailableMission = (
  completedMissions: string[]
): string | null => {
  for (const mission of STAR_MAP_MISSIONS) {
    if (!completedMissions.includes(mission.id) && !mission.isLocked) {
      // Verificar si tiene prerrequisitos cumplidos
      const hasPrerequisites = STAR_MAP_MISSIONS.some(prerequisite =>
        prerequisite.connections.includes(mission.id) &&
        completedMissions.includes(prerequisite.id)
      );
      
      if (hasPrerequisites || mission.id === 'earth-start') {
        return mission.id;
      }
    }
  }
  
  return null;
};