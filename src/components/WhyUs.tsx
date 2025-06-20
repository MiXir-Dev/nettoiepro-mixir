
import { Clock, Shield, Leaf, Award } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const WhyUs = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1, '0px');

  const benefits = [
    {
      icon: Clock,
      title: 'Ponctualité garantie',
      description: 'Respect scrupuleux des horaires convenus. Votre temps est précieux, nous le respectons.'
    },
    {
      icon: Leaf,
      title: 'Produits écoresponsables',
      description: 'Utilisation exclusive de produits respectueux de l\'environnement et de votre santé.'
    },
    {
      icon: Shield,
      title: 'Équipe vérifiée',
      description: 'Personnel formé, assuré et de confiance. Sérénité totale pour votre propriété.'
    },
    {
      icon: Award,
      title: 'Satisfaction garantie',
      description: 'Résultats impeccables ou nous revenons gratuitement. Votre satisfaction est notre priorité.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${sectionVisible ? 'animate-on-scroll' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-6">
            Pourquoi choisir NettoiePro ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            L'excellence du service et la tranquillité d'esprit que vous méritez
          </p>
        </div>

        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${gridVisible ? 'stagger-animation' : ''}`}>
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-[#01dbff]/10 rounded-2xl"></div>
                <div className="relative flex items-center justify-center w-full h-full">
                  <benefit.icon size={32} className="text-[#01dbff]" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#121212] mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
