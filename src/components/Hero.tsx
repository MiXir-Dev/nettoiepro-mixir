
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fafafa] via-white to-[#fafafa] overflow-hidden">
      {/* Background Image avec overlay subtil */}
      <div className="absolute inset-0">
        <img 
          src="/house.png"
          alt="Nettoyage professionnel de vitres"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-[#01dbff]/5"></div>
      </div>

      {/* Forme géométrique moderne */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#01dbff]/10 to-[#01dbff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-[#01dbff]/8 to-transparent rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : ''}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#121212] mb-8 leading-tight">
              L'excellence du{' '}
              <span className="bg-gradient-to-r from-[#01dbff]/80 to-[#01dbff]/60 bg-clip-text text-transparent">
                nettoyage
              </span>{' '}
              <br />
              résidentiel.
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-on-scroll' : ''}`}>
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Services de nettoyage professionnels en <span className="font-semibold text-[#01dbff]">Estrie</span>
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-on-scroll' : ''}`}>
            <Link
              to="/soumission"
              className="group bg-gradient-to-r from-[#01dbff]/80 to-[#01dbff]/60 text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:from-[#01dbff] hover:to-[#01dbff]/80 transition-all duration-500 transform hover:scale-105 flex items-center space-x-4 shadow-2xl hover:shadow-3xl backdrop-blur-sm"
            >
              <span>Obtenir une soumission gratuite</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <button
              onClick={scrollToServices}
              className="text-[#121212] border-2 border-gray-300 px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-gradient-to-r hover:from-[#01dbff]/5 hover:to-[#01dbff]/10 hover:border-[#01dbff]/50 hover:text-[#01dbff] transition-all duration-500 backdrop-blur-sm"
            >
              Découvrir nos services
            </button>
          </div>

          {/* Trust indicators améliorés */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'animate-on-scroll' : ''}`}>
            <div className="flex items-center justify-center space-x-4 text-gray-700 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="font-semibold text-lg">Soumission gratuite</span>
              <CheckCircle size={24} className="text-[#01dbff]" />
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-700 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="font-semibold text-lg">Équipe certifiée</span>
              <CheckCircle size={24} className="text-[#01dbff]" />
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-700 bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="font-semibold text-lg">Satisfaction garantie</span>
              <CheckCircle size={24} className="text-[#01dbff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
