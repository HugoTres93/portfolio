export interface Skill {
  name: string;
  level: 'Acquise' | 'En cours d\'acquisition';
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface Education {
  school: string;
  location: string;
  period: string;
  degree: string;
}