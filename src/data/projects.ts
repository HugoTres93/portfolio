import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Helle E Scape',
    description: 'Développement d\'une application mobile pour permettre aux utilisateurs de poser des pièges en temps réel dans un jeux Unity.',
    technologies: ['Socket.io', 'Express.js', 'Unity', 'React native'],
    image: 'assets/images/hellescape.png',
    github: 'https://github.com/Helle-e-scape',
  },
  {
    title: 'Pronotix',
    description: 'Développé d\'un modèle de Machine Learning pour prédire les résultats des matchs de football en utilisant des données historiques telles que les performances des équipes, les statistiques des joueurs et d\'autres paramètres clés.',
    technologies: ['Python'],
    image: 'assets/images/pronotix.webp',
    github: 'https://github.com/Jerance/pronotix-back',
  },
  {
    title: 'Dawan CFA',
    description: 'Développement d\'une application web pour un CFA permettant aux utilisateurs d\'envoyer des documents, de consulter leur planning et d\'accéder aux informations des autres membres selon leur rôle.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'Vue.js', 'Mariadb'],
    image: 'assets/images/dawan-logo.webp',
  },
  {
    title: 'Boutique en ligne',
    description: 'Développement d\'une application de boutique en ligne permettant la gestion des produits et des ventes.',
    technologies: ['C#', 'React', 'MySQL'],
    image: 'assets/images/boutique-en-ligne-logo.webp',
  },
];