
import { Users, CheckCircle, MapPin } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="apropos" className="py-20 px-5 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className={`transition-all duration-1000 ${contentVisible ? 'animate-fade-left' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-6">
              Votre partenaire de confiance en Estrie
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Depuis 2023, NettoiePro s'engage à offrir des services de nettoyage professionnels 
              qui dépassent vos attentes. Notre passion pour l'excellence et notre attention aux 
              détails font de nous le choix privilégié des résidents et entreprises de l'Estrie.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <CheckCircle size={24} className="text-[#01dbff] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#121212] mb-2">Équipe expérimentée</h3>
                  <p className="text-gray-600">Personnel formé aux dernières techniques de nettoyage professionnel</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle size={24} className="text-[#01dbff] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#121212] mb-2">Entreprise locale</h3>
                  <p className="text-gray-600">Connaissance parfaite des besoins spécifiques de notre région</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle size={24} className="text-[#01dbff] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#121212] mb-2">Engagement qualité</h3>
                  <p className="text-gray-600">Satisfaction garantie et suivi personnalisé de chaque intervention</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-center text-gray-600">
              <div>
                <div className="text-2xl font-bold text-[#01dbff] mb-2">300+</div>
                <div className="text-gray-600">Maisons</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#01dbff] mb-2">2 ans</div>
                <div className="text-gray-600">D'expérience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#01dbff] mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* { Image */}
          <div ref={imageRef} className={`relative transition-all duration-1000 ${imageVisible ? 'animate-fade-right' : ''}`}>
            <img 
              src="/team.png"
              alt="Équipe NettoiePro"
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <MapPin size={24} className="text-[#01dbff]" />
                <div>
                  <div className="font-bold text-[#121212]">Basé en Estrie</div>
                  <div className="text-gray-600 text-sm">Service local de qualité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
