
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3 order-2 lg:order-1">
                        <img
                            src="/assets/images/photo.jpg"
                            alt="Hugo Torres"
                            className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
                        />
                    </div>

                    <div className="lg:w-2/3 order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-secondary-800">
                            À propos de moi
                        </h2>

                        <p className="text-lg mb-6 text-secondary-700">
                            Bonjour, je m'appelle Torres Hugo, programmateur informatique.
                        </p>

                        <p className="text-lg mb-6 text-secondary-700">
                            Actuellement en Master Lead Développeur à ESIEE-IT à Pontoise, je recherche un contrat d'apprentissage (rythme : 70% en entreprise / 30% en école) avec une disponibilité immédiate.
                        </p>

                        <p className="text-lg mb-6 text-secondary-700">
                            Avec plus d'un an expérience en développement Full Stack, j’ai travaillé sur des projets variés, renforçant mes compétences en Java, TypeScript, Vue.js et Spring Boot. Passionné par les sciences et la résolution de problèmes, j’aspire à devenir un développeur polyvalent, du front-end au back-end. Découvrez mes projets ou contactez-moi pour toute collaboration.
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
                                    <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.262.793-.583 0-.287-.01-1.04-.015-2.04-3.34.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.997.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.24-3.22-.124-.303-.54-1.527.116-3.18 0 0 1.01-.323 3.3 1.23a11.37 11.37 0 013.007-.403c1.02.005 2.045.137 3.007.403 2.29-1.553 3.3-1.23 3.3-1.23.656 1.653.24 2.877.116 3.18.775.838 1.24 1.91 1.24 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.103.823 2.22 0 1.605-.015 2.895-.015 3.29 0 .323.192.698.798.58C20.565 22.092 24 17.595 24 12.297 24 5.67 18.627.297 12 .297z" />
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