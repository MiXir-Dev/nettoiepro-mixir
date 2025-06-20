
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      image: "/realizations/s1.jpeg",
      title: 'Lavage de vitres (intérieur & extérieur)',
      description: 'Nettoyage manuel + raclette ; cadre, rebords et moustiquaires compris. Produits biodégradables antistatiques.',
      features: ['Maisons, condos, commerces', 'Idéal printemps & automne', 'Produits écologiques']
    },
    {
      image: "/realizations/s2.jpeg",
      title: 'Lavage à pression haute / basse',
      description: 'Dégraissage et décrassage de parements, terrasses, dalles, clôtures. Ajustement de la pression pour ne pas abîmer le bois ou vinyle.',
      features: ['Revêtements extérieurs encrassés', 'Préparation avant peinture', 'Pression ajustée par matériau']
    },
    {
      image: "/realizations/s3.png",
      title: 'Nettoyage et protection de gouttières',
      description: 'Retrait des feuilles / débris, rinçage complet, inspection des joints. Option Protège-gouttières (grilles aluminium ou mousse filtrante) installée sur place.',
      features: ['Prévention des débordements', 'Inspection complète', 'Installation protège-gouttières']
    },
    {
      image: "/realizations/s4.png",
      title: 'Installation de lumières',
      description: 'Lumières modernisées (bandes LED, éclairage architectural) et lumières de Noël (pose, retrait, entreposage). Mise en valeur de façade toute l\'année ou décorations saisonnières clé-en-main.',
      features: ['Éclairage LED moderne', 'Décorations de Noël', 'Service clé-en-main']
    }
  ];

  return (
    <section id="services" className="py-24 bg-subtle-blue relative overflow-hidden">
      {/* Formes géométriques subtiles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#01dbff]/3 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : ''}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] mb-8">
            Nos services professionnels
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Des solutions de nettoyage adaptées à tous vos besoins, avec l'expertise et la <span className="font-semibold text-[#01dbff]">fiabilité</span> que vous méritez
          </p>
        </div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#01dbff]/20 transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? `animate-on-scroll animate-delay-${(index + 1) * 100}` : ''}`}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#121212] mb-4 group-hover:text-[#01dbff] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#01dbff] rounded-full mr-4 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section améliorée */}
        <div className={`text-center bg-gradient-to-br from-white to-[#fafbff] rounded-3xl p-8 md:p-16 border border-[#01dbff]/10 shadow-lg transition-all duration-1000 delay-600 ${isVisible ? 'animate-on-scroll' : ''}`}>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-6 md:mb-8">
            Prêt à transformer votre espace ?
          </h3>
          <p className="text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Obtenez une estimation gratuite en moins de 24h. Notre équipe est disponible pour répondre à tous vos besoins.
          </p>
          <Link
            to="/soumission"
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#01dbff]/70 to-[#01dbff]/50 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-semibold text-lg md:text-xl hover:from-[#01dbff]/90 hover:to-[#01dbff]/70 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl backdrop-blur-sm"
          >
            <span>Obtenir ma soumission gratuite</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
