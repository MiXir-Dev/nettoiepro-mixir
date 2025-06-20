
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      title: "Lavage de vitres professionnel",
      description: "Résultats impeccables, sans traces"
    },
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", 
      title: "Nettoyage haute pression",
      description: "Façades et terrasses comme neuves"
    },
    {
      url: "https://images.unsplash.com/photo-1565976780-5d1a12e03a41?w=800&h=600&fit=crop",
      title: "Entretien de gouttières", 
      description: "Protection et maintenance complète"
    },
    {
      url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&h=600&fit=crop",
      title: "Installation de lumières",
      description: "Décoration moderne et festive"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden group shadow-lg">
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img 
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-white/80">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#01dbff]/30"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#01dbff]/30"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-[#01dbff]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
