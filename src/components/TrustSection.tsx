
import { Clock, Shield, MapPin, Award } from 'lucide-react';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Clock,
      title: 'Rapidité garantie',
      description: 'Fenêtres lavées en 48h ouvrables',
      color: 'text-[#01dbff]'
    },
    {
      icon: Shield,
      title: 'Disponibilité maximale',
      description: '7 jours sur 7, de 7h à 21h',
      color: 'text-[#01dbff]'
    },
    {
      icon: MapPin,
      title: 'Service local',
      description: 'Équipe fiable et équipements modernes',
      color: 'text-[#01dbff]'
    },
    {
      icon: Award,
      title: 'Qualité professionnelle',
      description: 'Résultats garantis ou argent remis',
      color: 'text-[#01dbff]'
    }
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">
            Pourquoi choisir NettoiePro?
          </h2>
          <p className="text-xl text-[#121212]/70 max-w-3xl mx-auto">
            Le service local, rapide et professionnel pour redonner de l'éclat à votre maison
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div 
              key={point.title}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-[#01dbff]/10 rounded-2xl"></div>
                <div className="relative flex items-center justify-center w-full h-full">
                  <point.icon size={32} className={point.color} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#121212] mb-3">
                {point.title}
              </h3>
              
              <p className="text-[#121212]/70 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#121212] mb-4">
              "Du lever du soleil à son coucher — NettoiePro est là."
            </p>
            <p className="text-[#121212]/70">
              Notre engagement : vous offrir un service exceptionnel, peu importe l'heure ou la saison.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
