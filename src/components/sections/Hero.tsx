import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-primary-800 to-primary-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hugo Torres
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Développeur Full Stack
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Spécialisé en Java, JavaScript, TypeScript et les frameworks modernes comme Vue.js, Angular et Spring Boot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-white text-primary-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
          >
            Me contacter
          </a>
          <a 
            href="#projects" 
            className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition duration-300"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;