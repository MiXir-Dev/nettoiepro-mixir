
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Phone, Mail, Clock, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import emailjs from '@emailjs/browser';

const QuotePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    telephone: '',
    courriel: '',
    services: [],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Lavage de vitres',
    'Nettoyage à pression',
    'Nettoyage de gouttières',
    'Installation de protège-gouttières',
    'Installation LEDs',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nom || !formData.telephone || formData.services.length === 0) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    try {
      const templateParams = {
        destinataire: "nettoiepro.qc@gmail.com",
        nom: formData.nom,
        telephone: formData.telephone,
        adresse: formData.adresse,
        courriel: formData.courriel,
        services: formData.services.join(', '),
        message: formData.message
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setIsSubmitted(true);

      toast({
        title: "Soumission envoyée!",
        description: "Nous vous contacterons dans les 24 heures."
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer plus tard ou nous contacter directement.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafafa] to-white">
      <Header />
      
      <div className="pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">
              Obtenez votre soumission gratuite
            </h1>
            <p className="text-lg text-gray-600">
              Remplissez ce formulaire et recevez une estimation détaillée dans les 24 heures
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-6">
            {/* Form - Mobile first, then desktop layout */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#01dbff]/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#121212] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01dbff] focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#121212] mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01dbff] focus:border-transparent transition-colors"
                      placeholder="(819) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#121212] mb-2">
                      Adresse complète
                    </label>
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01dbff] focus:border-transparent transition-colors"
                      placeholder="123 Rue Principale, Magog, QC"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#121212] mb-2">
                      Courriel
                    </label>
                    <input
                      type="email"
                      name="courriel"
                      value={formData.courriel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01dbff] focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#121212] mb-3">
                    Services désirés * (sélectionnez au moins un)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-[#01dbff]/5 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-[#01dbff] border-gray-300 rounded focus:ring-[#01dbff]"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#121212] mb-2">
                    Message additionnel
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01dbff] focus:border-transparent transition-colors"
                    placeholder="Détails sur vos besoins, questions spéciales, urgence, etc."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#01dbff] to-[#01dbff]/80 text-white py-4 rounded-xl font-bold text-lg hover:from-[#01dbff]/90 hover:to-[#01dbff]/70 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Envoyer ma demande</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>

            {/* Sidebar - Responsive */}
            <div className="w-full xl:w-80 space-y-4">
              {/* Contact info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#01dbff]/10">
                <h3 className="font-bold text-[#121212] mb-3 text-lg">Contact direct</h3>
                
                <div className="space-y-3">
                  <a 
                    href="tel:8194320064"
                    className="flex items-center space-x-3 text-[#01dbff] hover:text-[#01dbff]/80 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="font-medium">(819) 432-0064</span>
                  </a>
                  
                  <a 
                    href="mailto:info@nettoiepro.ca"
                    className="flex items-center space-x-3 text-[#01dbff] hover:text-[#01dbff]/80 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="font-medium">info@nettoiepro.ca</span>
                  </a>

                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock size={18} />
                    <span className="font-medium">7j/7 de 7h à 21h</span>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#01dbff]/10">
                <h3 className="font-bold text-[#121212] mb-3 text-lg">Nos engagements</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={14} className="text-green-500" />
                    <span className="text-sm text-gray-700">Réponse sous 24h garantie</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={14} className="text-green-500" />
                    <span className="text-sm text-gray-700">Soumission détaillée gratuite</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={14} className="text-green-500" />
                    <span className="text-sm text-gray-700">Aucun engagement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={14} className="text-green-500" />
                    <span className="text-sm text-gray-700">Service professionnel</span>
                  </div>
                </div>
              </div>

              {/* Quick response */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#01dbff]/10 text-center">
                <Clock size={32} className="text-[#01dbff] mx-auto mb-2" />
                <h4 className="font-bold text-[#121212] mb-1">Réponse rapide</h4>
                <p className="text-sm text-gray-600">En moins de 60 secondes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
