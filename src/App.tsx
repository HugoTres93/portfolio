import React from 'react';
import Navbar from './components/common/Navbar.tsx';
import Hero from './components/sections/Hero.tsx';
import About from './components/sections/About.tsx';
import Skills from './components/sections/Skills.tsx';
import Projects from './components/sections/Projects.tsx';
import Education from './components/sections/Education.tsx';
import Contact from './components/sections/Contact.tsx';
import Footer from './components/common/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;