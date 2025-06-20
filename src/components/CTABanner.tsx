
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-[#01dbff]/80 to-[#01dbff]/60 backdrop-blur-xl relative overflow-hidden">
      {/* Effet de blur en arrière-plan */}
      <div className="absolute inset-0 bg-[#01dbff]/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'animate-scale-in' : ''}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
            <Clock size={32} className="text-white" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Obtenez une soumission gratuite en moins de 60 secondes
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Formulaire simple et rapide. Réponse garantie sous 24h.
          </p>

          <Link
            to="/soumission"
            className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm text-[#01dbff] px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Commencer ma soumission</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
