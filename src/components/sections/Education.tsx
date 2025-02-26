
import React from 'react';
import { education } from '../../data/education';

const Education: React.FC = () => {
  return (
    <section id="formations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-800">
          Formations
        </h2>
        
        <div className="relative border-l-2 border-primary-500 pl-8 ml-4 space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Cercle sur la timeline */}
              <div className="absolute -left-12 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-secondary-800">{edu.degree}</h3>
                  <span className="text-sm font-medium text-primary-600 md:text-right">
                    {edu.period}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-secondary-700 font-medium">{edu.school}</span>
                  <span className="text-secondary-500"> • {edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;