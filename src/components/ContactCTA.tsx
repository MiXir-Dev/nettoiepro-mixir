import { Phone, ArrowRight, Clock, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ContactCTA = () => {
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

    const element = document.querySelector('#contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 md:py-24 bg-subtle-blue relative overflow-hidden">
      {/* Formes géométriques modernes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#01dbff]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01dbff]/3 to-transparent rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#121212] mb-6 md:mb-8 leading-tight">
            Transformons ensemble
            <br />
            <span className="bg-gradient-to-r from-[#01dbff]/80 to-[#01dbff]/60 bg-clip-text text-transparent">
              votre espace
            </span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Obtenez votre soumission gratuite en moins de 24h. Notre équipe certifiée est prête à donner une nouvelle vie à votre propriété.
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-center mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-on-scroll' : ''}`}>
          <Link
            to="/soumission"
            className="group bg-gradient-to-r from-[#01dbff]/70 to-[#01dbff]/50 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:from-[#01dbff]/90 hover:to-[#01dbff]/70 transition-all duration-500 transform hover:scale-105 flex items-center space-x-4 shadow-2xl hover:shadow-3xl backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            <span>Obtenir ma soumission</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>

          <a
            href="tel:8194320064"
            className="bg-white/80 backdrop-blur-sm text-[#121212] border-2 border-[#01dbff]/30 px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:bg-[#01dbff]/10 hover:border-[#01dbff] transition-all duration-500 flex items-center space-x-4 shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Phone size={24} className="text-[#01dbff]" />
            <span>(819) 432-0064</span>
          </a>
        </div>

        {/* Statistiques modernisées et responsives */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'animate-on-scroll' : ''}`}>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#01dbff]/10">
            <Clock size={48} className="text-[#01dbff] mx-auto mb-4" />
            <div className="text-3xl md:text-4xl font-bold text-[#121212] mb-2">24h</div>
            <div className="text-gray-600 font-medium">Réponse garantie</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#01dbff]/10">
            <Award size={48} className="text-[#01dbff] mx-auto mb-4" />
            <div className="text-3xl md:text-4xl font-bold text-[#121212] mb-2">100%</div>
            <div className="text-gray-600 font-medium">Satisfaction garantie</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#01dbff]/10">
            <MapPin size={48} className="text-[#01dbff] mx-auto mb-4" />
            <div className="text-3xl md:text-4xl font-bold text-[#121212] mb-2">Estrie</div>
            <div className="text-gray-600 font-medium">Service local</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
