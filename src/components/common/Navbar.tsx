import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className={`text-2xl font-bold ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
            HT
          </a>

          {/* Menu pour mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-primary-700' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>

          {/* Menu pour desktop */}
          <nav className="hidden md:flex space-x-8">
            {
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <a href="#about" className={`font-medium capitalize transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-600 hover:text-primary-700' : 'text-white hover:text-primary-200'
                }`}>À propos</a>
                  <a href="#skills" className={`font-medium capitalize transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-600 hover:text-primary-700' : 'text-white hover:text-primary-200'
                }`}>Compétences</a>
                  <a href="#projects" className={`font-medium capitalize transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-600 hover:text-primary-700' : 'text-white hover:text-primary-200'
                }`}>Projets</a>
                  <a href="#education" className={`font-medium capitalize transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-600 hover:text-primary-700' : 'text-white hover:text-primary-200'
                }`}>Formations</a>
                </div>
              </div>
            }
          </nav>
        </div>

        {/* Menu mobile déplié */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className={`font-medium capitalize transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-600 hover:text-primary-700' : 'text-white hover:text-primary-200'
                }`}>À propos</a>
              <a href="#skills" className={`font-medium capitalize transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-600 hover:text-primary-700' : 'text-white hover:text-primary-200'
                }`}>Compétences</a>
              <a href="#projects" className={`font-medium capitalize transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-600 hover:text-primary-700' : 'text-white hover:text-primary-200'
                }`}>Projets</a>
              <a href="#education" className={`font-medium capitalize transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-600 hover:text-primary-700' : 'text-white hover:text-primary-200'
                }`}>Formations</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;