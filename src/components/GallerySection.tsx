
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { after, before } from 'node:test';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      before: "/realizations/b1.jpeg",
      after: "/realizations/a1.jpeg",
      title: "Façade résidentielle - Magog",
      service: "Lavage à pression + Vitres"
    },
    {
      before: "/realizations/b2.jpeg",
      after: "/realizations/a2.jpeg",
      title: "Terrasse en bois - Sherbrooke", 
      service: "Nettoyage haute pression"
    },
    {
      before: "/realizations/b3.jpeg",
      after: "/realizations/a3.jpeg",
      title: "Gouttières - Orford",
      service: "Nettoyage + Protection"
    }
  ];

  const projects = [
    {
      image: "/realizations/r1.jpeg",
      title: "Résidence Magog",
      description: "Lavage complet de vitres"
    },
    {
      image: "/realizations/r2.jpeg",
      title: "Maison Sherbrooke",
      description: "Nettoyage haute pression"
    },
    {
      image: "/realizations/r3.jpeg",
      title: "Villa Orford",
      description: "Entretien gouttières"
    },
    {
      image: "/realizations/r4.jpeg",
      title: "Chalet Hatley",
      description: "Installation lumières"
    },
    {
      image: "/realizations/r5.jpeg",
      title: "Condo Brompton",
      description: "Nettoyage façade"
    },
    {
      image: "/realizations/r6.jpeg", 
      title: "Maison Eastman",
      description: "Service complet"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">
            Nos réalisations
          </h2>
          <p className="text-xl text-[#121212]/70 max-w-3xl mx-auto">
            Découvrez la transformation de vos voisins. Des résultats qui parlent d'eux-mêmes.
          </p>
        </div>

        {/* Project Gallery - Without title */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm bg-white border border-gray-100">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-all duration-300"
                />
                <div className="p-6">
                  <h4 className="font-semibold text-[#121212] mb-2 group-hover:text-[#01dbff] transition-colors duration-300">{project.title}</h4>
                  <p className="text-sm text-[#121212]/60">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Before/After - Now After Gallery */}
        <div className="relative">
          <div className="bg-[#fafafa] rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Camera className="text-[#01dbff]" size={24} />
                  <span className="text-sm font-semibold text-[#01dbff] uppercase tracking-wide">
                    {galleryImages[currentIndex].service}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-[#121212]">
                  {galleryImages[currentIndex].title}
                </h3>
                
                <p className="text-[#121212]/70 text-lg">
                  Une transformation complète qui redonne vie à votre propriété. 
                  Nos techniques professionnelles garantissent des résultats durables et spectaculaires.
                </p>

                <div className="flex space-x-4">
                  <button 
                    onClick={prevImage}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#01dbff] hover:bg-[#01dbff] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#01dbff] hover:bg-[#01dbff] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-[#121212]/60">AVANT</span>
                  <img 
                    src={galleryImages[currentIndex].before}
                    alt="Avant transformation"
                    className="w-full h-64 object-cover rounded-xl shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-[#01dbff]">APRÈS</span>
                  <img 
                    src={galleryImages[currentIndex].after}
                    alt="Après transformation"
                    className="w-full h-64 object-cover rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#01dbff]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
