
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import ServiceArea from '@/components/ServiceArea';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTABanner />
      <GallerySection />
      <AboutSection />
      <ServiceArea />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
