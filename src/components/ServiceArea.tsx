import { MapPin, Pin } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ServiceArea = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: citiesRef, isVisible: citiesVisible } = useScrollAnimation();

  const cities = [
    'Magog',
    'Sherbrooke',
    'Orford',
    'Hatley',
    'St-Denis-de-Brompton',
    'Eastman',
    'Austin',
    'Bolton-Est',
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-subtle-blue"  id="zones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 ${
              contentVisible ? 'animate-fade-left' : ''
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-6 md:mb-8">
              Zones desservies
            </h2>

            <p className="text-lg md:text-xl text-[#121212]/70 mb-8 md:mb-10 leading-relaxed">
              Nous couvrons toute l'Estrie, avec un focus sur vos secteurs résidentiels préférés.
            </p>

            <div
              ref={citiesRef}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10 ${
                citiesVisible ? 'stagger-animation' : ''
              }`}
            >
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <Pin size={20} className="text-[#01dbff] flex-shrink-0" />
                  <span className="font-medium text-[#121212]">{city}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#01dbff]/10 to-[#01dbff]/5 rounded-2xl p-6 md:p-8 border border-[#01dbff]/20">
              <div className="flex items-start space-x-4">
                <MapPin size={28} className="text-[#01dbff] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#121212] mb-3 text-lg">
                    Secteur non listé?
                  </h3>
                  <p className="text-[#121212]/70 leading-relaxed">
                    Contactez-nous! Nous évaluons chaque demande et pouvons souvent nous déplacer dans un rayon étendu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte interactive */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              sectionVisible ? 'animate-scale-in' : ''
            }`}
          >
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-xl border border-[#01dbff]/10">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1OmXwWG549H3eJK6gjfXFUBMWbe8xSL8&ehbc=2E312F&noprof=1" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-3xl"
                title="Zones desservies NettoiePro en Estrie"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
