import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-gradient-to-br from-[#fafafa] to-white relative overflow-hidden">
      {/* Décor */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-[#01dbff]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-on-scroll' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] mb-4 md:mb-8">
            Ce que disent nos clients
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, EffectFade]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          effect="slide"
          grabCursor
          autoHeight
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/80 backdrop-blur p-6 md:p-10 lg:p-14">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <img
                      src={testimonial.resultImage}
                      alt={`Résultat ${testimonial.service}`}
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">
                      {testimonial.service}
                    </p>
                  </div>

                  {/* Texte */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current mx-1" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                      “{testimonial.text}”
                    </blockquote>

                    <div className="text-center lg:text-left">
                      <div className="font-bold text-[#121212] text-lg md:text-xl">
                        {testimonial.name}
                      </div>
                      <div className="text-[#01dbff] font-semibold text-sm md:text-base">
                        {testimonial.service}
                      </div>
                      <div className="text-gray-600 text-sm md:text-base">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
