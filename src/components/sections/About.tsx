
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3 order-2 lg:order-1">
                        <img
                            src="/assets/images/profile.webp"
                            alt="Hugo Torres"
                            className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-secondary-800">
                            À propos de moi
                        </h2>

                        <p className="text-lg mb-6 text-secondary-700">
                            Je suis Hugo Torres, développeur Full Stack passionné spécialisé dans le développement web et mobile avec plus d'un an d'expérience.
                        </p>

                        <p className="text-lg mb-6 text-secondary-700">
                            Actuellement en Master Lead Développeur à ESIEE-IT à Pontoise, je recherche un contrat d'apprentissage (rythme : 70% en entreprise / 30% en école) avec une disponibilité immédiate.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-secondary-800">
                                    Méthodologies
                                </h3>
                                <ul className="space-y-2 text-secondary-700">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Méthode Agile / Scrum
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Cycle en V
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        TDD
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Merise, UML
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-secondary-800">
                                    Langues
                                </h3>
                                <ul className="space-y-2 text-secondary-700">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Français - Natif
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Portugais - Courant
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Anglais - Professionnel
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="/assets/CV-Hugo-TORRES.pdf"
                                target="_blank"
                                className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition duration-300 flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Télécharger CV
                            </a>

                            <a
                                href="https://github.com/HugoTres93"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-900 transition duration-300 flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                </svg>
                                Github
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;