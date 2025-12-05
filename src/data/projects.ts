import { Project } from '../types';

export const projects: Project[] = [
    {
        title: 'DevyndAi',
        description: 'Développement d\'un moteur de recherche fullstack avec Next.js pour le frontend (déployé sur Vercel), NestJS pour l\'API backend avec TypeORM et PostgreSQL, et un microservice Python pour le scraping et l\'enregistrement des données.',
        technologies: ['Adonis', 'Lucid', 'PostgreSQL', 'Python'],
        image: 'assets/images/DevSearch_logo.png',
        link: 'https://beta.devyndai.com/',
    },
    {
        title: 'Langage de programmation RPG',
        description: 'Création d’un langage de programmation RPG développé en Kotlin, intégrant un lexer personnalisé, un parser (Pratt + recursive descent), un AST complet, un interpréteur, un système de types, ainsi qu’un compilateur avec VM en bytecode. Le langage inclut des fonctionnalités avancées telles que le hot reload, le pipe operator, un REPL amélioré, la gestion d’erreurs, le pattern matching, la concurrence (async/threads), et un système d’import. Le projet comprend également une extension dédiée pour Visual Studio Code et un générateur automatique de documentation.',
        technologies: ['Kotlin'],
        image: 'assets/images/RPG.png',
    },
    {
        title: 'PoutchTV',
        description: 'Développement d’une plateforme de live-streaming en microservices avec Python, structurée en monorepo avec des packages partagés entre les services. Déployée sur un cluster Kubernetes utilisant plusieurs pods, un load balancer et une orchestration complète pour garantir scalabilité, résilience et haute disponibilité.',
        technologies: ['Python', 'Kubernetes', 'microservices', 'monorepo'],
        image: 'assets/images/poutchTV.png',
    },
    {
        title: 'Fractal Mandelbrot / Julia',
        description: 'Développement d’un générateur de fractale Mandelbrot / Julia, utilisant un découpage en blocs calculés en parallèle via threads/workers pour accélérer le rendu. Réalisé en deux projets, l’un en Kotlin et l’autre en WebAssembly avec Go afin de comparer les performances des deux implémentations',
        technologies: ['Kotlin', 'WASM avec go'],
        image: 'assets/images/mandelbrot.jpg',
    },
    {
        title: 'Funkify',
        description: 'Développement d’une application mobile de streaming musical sur Android, conçue en architecture Atomic Design avec un système de caching pour les pistes audio et une gestion asynchrone basée sur les coroutines.',
        technologies: ['Android'],
        image: 'assets/images/funkify.png',
    },
    {
        title: 'Helle E Scape',
        description: 'Développement d\'une application mobile pour permettre aux utilisateurs de poser des pièges en temps réel dans un jeux Unity.',
        technologies: ['Socket.io', 'Express.js', 'Unity', 'React native'],
        image: 'assets/images/hellescape.png',
        github: 'https://github.com/Helle-e-scape',
    },
    {
        title: 'Pronotix',
        description: 'Développement d\'un modèle de Machine Learning pour prédire les résultats des matchs de football en utilisant des données historiques telles que les performances des équipes, les statistiques des joueurs et d\'autres paramètres clés.',
        technologies: ['Python', 'scikit-learn'],
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