import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Moteur de recherche pour développeurs',
    description: 'Développement d\'une plateforme innovante en Next.js avec Backend en Nest.js facilitant la recherche d\'informations pour les développeurs',
    technologies: ['Next.js', 'Nest.js', 'TypeScript', 'TailwindCSS'],
    image: '/assets/images/search-engine.webp',
    github: 'https://github.com/hugotorres',
    demo: 'https://dev-search-engine.example.com',
  },
  {
    title: 'Projet multiplateforme',
    description: 'Développement d\'une application mobile en React Native avec Backend Express.js et WebSocket pour permettre aux utilisateurs de poser des pièges en temps réel dans un jeux Unity',
    technologies: ['React Native', 'Express.js', 'WebSocket', 'Unity'],
    image: '/assets/images/multiplatform.webp',
    github: 'https://github.com/hugotorres',
  },
  {
    title: 'Système de gestion scolaire',
    description: 'Développement d\'un système complet de gestion scolaire pour faciliter l\'administration et le suivi des étudiants',
    technologies: ['Spring Boot', 'Vue.js', 'MySQL', 'Hibernate'],
    image: '/assets/images/school-management.webp',
    github: 'https://github.com/hugotorres',
  },
];