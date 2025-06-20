import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const comparisons = [
    {
      before: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80&w=1000&auto=format&fit=crop',
      title: 'Maison à Sherbrooke',
      description: 'Lavage de vitres complet - Juin 2024'
    },
    {
      before: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1000&auto=format&fit=crop',
      title: 'Résidence à Magog',
      description: 'Nettoyage à pression - Mai 2024'
    },
    {
      before: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80&w=1000&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop',
      title: 'Commerce à Orford',
      description: 'Nettoyage de gouttières - Avril 2024'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % comparisons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + comparisons.length) % comparisons.length);
  };

  return (
    <section id="avant-apres" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Avant / Après
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la transformation spectaculaire de nos interventions
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main comparison slider - Responsive */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Before */}
              <div className="relative bg-gray-100 h-full">
                <img
                  src={comparisons[currentSlide].before}
                  alt="Avant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  Avant
                </div>
              </div>
              
              {/* After */}
              <div className="relative bg-gray-100 h-full">
                <img
                  src={comparisons[currentSlide].after}
                  alt="Après"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  Après
                </div>
              </div>
            </div>

            {/* Navigation arrows - Responsive */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 md:p-2 transition-all duration-200 shadow-lg"
            >
              <ChevronLeft size={20} className="md:hidden text-gray-700" />
              <ChevronLeft size={24} className="hidden md:block text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 md:p-2 transition-all duration-200 shadow-lg"
            >
              <ChevronRight size={20} className="md:hidden text-gray-700" />
              <ChevronRight size={24} className="hidden md:block text-gray-700" />
            </button>

            {/* Project info - Responsive text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-6">
              <h3 className="text-white text-lg md:text-xl font-bold mb-1">
                {comparisons[currentSlide].title}
              </h3>
              <p className="text-blue-200 text-sm md:text-base">
                {comparisons[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Dots indicator - Responsive spacing */}
          <div className="flex justify-center space-x-2 mt-6 md:mt-8">
            {comparisons.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-blue-600 w-6 md:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm md:text-base">Propriétés nettoyées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">48h</div>
            <div className="text-gray-600 text-sm md:text-base">Délai moyen d'intervention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600 text-sm md:text-base">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
