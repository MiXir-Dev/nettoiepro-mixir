import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    'Nettoyage résidentiel',
    'Commerces & bureaux',
    'Après-construction',
    'Entretien régulier'
  ];

  const zones = [
    'Magog',
    'Sherbrooke',
    'Orford',
    'Hatley',
    'St-Denis-de-Brompton',
    'Eastman'
  ];

  return (
    <footer className="bg-[#121212] text-white">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous avez une question ? Écrivez-nous !
          </h2>
          <Link
            to="/soumission"
            className="inline-flex items-center space-x-3 bg-[#01dbff] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#01dbff]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Obtenir ma soumission</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <img 
                src="/logo.png" 
                alt="NettoiePro Logo" 
                className="h-24 w-24 rounded-full object-cover mb-6 shadow-xl border border-[aliceblue]"
              />
              <p className="text-white/80 mb-6 leading-relaxed">
                NettoiePro, votre partenaire de confiance pour tous vos besoins de nettoyage professionnel en Estrie.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Nos Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-white/70 hover:text-[#01dbff] transition-colors block w-fit"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zones */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Zones desservies</h3>
              <ul className="space-y-3">
                {zones.map((zone) => (
                  <li key={zone}>
                    <a
                      href="#zones"
                      className="text-white/70 hover:text-[#01dbff] transition-colors block w-fit"
                    >
                      {zone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
              <div className="space-y-4">
                <a 
                  href="tel:8194320064"
                  className="flex items-center space-x-3 text-white/70 hover:text-[#01dbff] transition-colors"
                >
                  <Phone size={18} />
                  <span>(819) 432-0064</span>
                </a>
                
                <a 
                  href="mailto:info@nettoiepro.ca"
                  className="flex items-center space-x-3 text-white/70 hover:text-[#01dbff] transition-colors"
                >
                  <Mail size={18} />
                  <span>info@nettoiepro.ca</span>
                </a>
                
                <div className="flex items-start space-x-3 text-white/70">
                  <MapPin size={18} className="mt-0.5" />
                  <span>Service dans toute l'Estrie</span>
                </div>
                
                <div className="flex items-start space-x-3 text-white/70">
                  <Clock size={18} className="mt-0.5" />
                  <span>7j/7, de 7h à 21h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © 2024 NettoiePro. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-white/70 hover:text-[#01dbff] text-sm cursor-pointer transition-colors">
                Politique de confidentialité
              </span>
              <span className="text-white/70 hover:text-[#01dbff] text-sm cursor-pointer transition-colors">
                Conditions d'utilisation
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;