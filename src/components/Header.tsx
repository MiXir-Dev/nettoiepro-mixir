
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Pin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { Instagram } from 'lucide-react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`;
      return;
    }
    
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-aliceblue/80 backdrop-blur-xl shadow-2xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="NettoiePro Logo" 
              className="h-16 w-16 rounded-full object-cover shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 ring-2 ring-white/20 ml-2 md:ml-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">  
            {navigation.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-black hover:text-[#01dbff] font-semibold transition-all duration-300 hover:scale-105 relative group text-lg whitespace-nowrap"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-[#121212] hover:text-[#01dbff] font-semibold py-3 transition-colors text-lg border-b border-aliceblue-100"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/soumission"
              className="bg-gradient-to-r from-[#01dbff]/70 to-[#01dbff]/50 text-white px-8 py-4 rounded-xl font-semibold hover:from-[#01dbff]/90 hover:to-[#01dbff]/70 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <span>Obtenir une soumission</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href="tel:8194320064"
              className="p-3 rounded-xl text-black hover:bg-black/10 transition-all duration-300"
            >
              <Phone size={30} />
            </a>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-3 rounded-xl text-black hover:bg-black/10 transition-all duration-300">
                  <Menu size={34} />
                </button>
              </SheetTrigger>
                <SheetContent side="left" className="w-full bg-white/95 backdrop-blur-xl">
                  <SheetHeader>
                    {/* Logo cliquable */}
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <img 
                        src="/logo.png" 
                        alt="NettoiePro Logo" 
                        className="h-16 w-16 rounded-full object-cover shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 ring-2 ring-white/20 mx-auto mt-4"
                      />
                    </Link>
                    <SheetTitle className="text-[#121212] text-center mt-2">NettoiePro</SheetTitle>
                    <div className="mt-8 flex justify-center">
                      <a
                        href="https://www.instagram.com/nettoiepro.qc/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#121212] hover:text-[#01dbff] transition-colors flex items-center space-x-2 text-sm"
                      >
                        <Instagram size={18} />
                        <span>@nettoiepro.qc</span>
                      </a>
                    </div>
                  </SheetHeader>

                <div className="py-8 space-y-6">
                  {navigation.map((item) =>
                    item.href.startsWith('#') ? (
                      <button
                        key={item.name}
                        onClick={() => {
                          scrollToSection(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block w-full text-left text-[#121212] hover:text-[#01dbff] font-semibold py-3 transition-colors text-lg border-b border-gray-100 last:border-b-0"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-left text-[#121212] hover:text-[#01dbff] font-semibold py-3 transition-colors text-lg border-b border-gray-100 last:border-b-0"
                      >
                        {item.name}
                      </Link>
                    )
                  )}

                  <Link
                    to="/soumission"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-gradient-to-r from-[#01dbff]/70 to-[#01dbff]/50 text-white text-center px-8 py-4 rounded-xl font-semibold mt-6 flex items-center justify-center space-x-2 border border-white/20"
                  >
                    <span>Obtenir une soumission</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
