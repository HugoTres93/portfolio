import React from 'react';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-800">
          Projets
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary-800">{project.title}</h3>
                <p className="text-secondary-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-secondary-600 hover:text-secondary-800 transition"
                    >
                      <i className="devicon-github-original text-xl"></i>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-secondary-600 hover:text-secondary-800 transition"
                    >
                      <i className="fas fa-external-link-alt text-xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;