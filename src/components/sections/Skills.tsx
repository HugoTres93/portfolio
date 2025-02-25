import React from 'react';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-800">
          Compétences
        </h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-secondary-700">Compétences acquises</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills
              .filter(skill => skill.level === 'Acquise')
              .map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
                >
                  <i className={`${skill.icon} text-4xl mb-3 text-primary-600`}></i>
                  <span className="font-medium text-secondary-700">{skill.name}</span>
                </div>
              ))
            }
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 text-secondary-700">En cours d'acquisition</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills
              .filter(skill => skill.level === 'En cours d\'acquisition')
              .map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center border-t-4 border-primary-400"
                >
                  <i className={`${skill.icon} text-4xl mb-3 text-primary-400`}></i>
                  <span className="font-medium text-secondary-700">{skill.name}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;