import { ArrowRight, CheckCircle } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/house.png"
          alt="Nettoyage professionnel de vitres"
          className="w-full h-full object-cover object-center brightness-[0.95] contrast-105"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      {/* Modern Decorative Shapes */}
      <div className="absolute top-32 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-300/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center pt-24 pb-20">
        <div className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#121212] leading-tight max-w-4xl mx-auto mb-6">
            L'excellence du{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              nettoyage
            </span>{' '}
            résidentiel
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto mb-10">
            Services de nettoyage professionnels en <span className="text-cyan-500 font-medium">Estrie</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <Link
              to="/soumission"
              className="group bg-cyan-400 hover:bg-cyan-500 text-white px-10 py-4 rounded-xl text-lg font-medium transition-transform transform hover:scale-105 shadow-md flex items-center space-x-2"
            >
              <span>Obtenir une soumission gratuite</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={scrollToServices}
              className="text-[#121212] border border-gray-300 px-10 py-4 rounded-xl text-lg font-medium bg-gray-100/60 transition-all"
            >
              Découvrir nos services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Soumission gratuite",
              "Équipe certifiée",
              "Satisfaction garantie",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-xl shadow hover:shadow-md transition hover:scale-105"
              >
                <CheckCircle size={20} className="text-cyan-400" />
                <span className="text-gray-800 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
