/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (touchStartX !== null && touchEndX !== null) {
      const delta = touchStartX - touchEndX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          setSwipeDirection('left');
          nextTestimonial();
        } else {
          setSwipeDirection('right');
          prevTestimonial();
        }
      }
      setTouchStartX(null);
      setTouchEndX(null);
    }
  }, [touchEndX]);

  const testimonials = [
    {
      name: 'Marie Tremblay',
      location: 'Magog',
      service: 'Lavage de vitres résidentiel',
      rating: 5,
      text: 'L\'équipe de NettoiePro a fait des miracles avec mes vitres, j\'en revenais pas. À l\'heure pis ben professionnel à part de ça. J\'les recommande en maudit!',
      resultImage: '/realizations/r8.jpeg'
    },
    {
      name: 'Jean-François Dubois',
      location: 'Sherbrooke',
      service: 'Lavage de vitres intérieur et extérieur',
      rating: 5,
      text: 'Une équipe fiable, prix correct pis toujours ben faite. On a signé un contrat d\'entretien, c\'est sûr qu\'on les lâche pas!',
      resultImage: '/realizations/r7.jpeg'
    },
    {
      name: 'Sophie Lavoie',
      location: 'Orford',
      service: 'Nettoyage intérieur et extérieur',
      rating: 5,
      text: 'Après notre rénos, c\'était l\'enfer icitte dedans! NettoiePro a toute nettoyé ça comme du monde. J\'pensais jamais que ça redeviendrait si beau. Merci ben gros les gars!',
      resultImage: '/realizations/r6.jpeg'
    },
    {
      name: 'Michel Bergeron',
      location: 'Hatley',
      service: 'Nettoyage intérieur, extérieur et de gouttières',
      rating: 5,
      text: 'Ça fait 2 ans qu\'y viennent faire l\'entretien régulier pis j\'ai jamais eu de trouble. Toujours ben fait, jamais en retard. Une équipe de confiance, c\'est rare de nos jours!',
      resultImage: '/realizations/r5.jpeg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-gradient-to-br from-[#fafafa] to-white relative overflow-hidden">
      {/* Formes géométriques */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-[#01dbff]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 md:mb-8">
            Ce que disent nos clients
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-8 lg:p-12 shadow-xl border border-[#01dbff]/10 relative overflow-hidden transition-all duration-700 ease-in-out ${
            swipeDirection === 'left' ? 'animate-swipe-left' : swipeDirection === 'right' ? 'animate-swipe-right' : ''
          }`}
          onAnimationEnd={() => setSwipeDirection(null)}
        >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              {/* Photo */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <img 
                  src={testimonials[currentIndex].resultImage}
                  alt={`Résultat ${testimonials[currentIndex].service}`}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg transition-opacity duration-500"
                />
                <p className="text-center text-sm text-gray-500 mt-2">
                  {testimonials[currentIndex].service}
                </p>
              </div>

              {/* Texte */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="flex justify-center lg:justify-start mb-4 md:mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current mx-1" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="text-center lg:text-left">
                  <div className="font-bold text-[#121212] text-lg md:text-xl mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[#01dbff] font-semibold mb-1 text-sm md:text-base">
                    {testimonials[currentIndex].service}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#01dbff] scale-125' 
                    : 'bg-gray-300 hover:bg-[#01dbff]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
