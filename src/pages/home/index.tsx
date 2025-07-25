import { Navbar } from '../../components/navBar';
import { Hero } from '../../components/hero';
import { ServicesSection } from '../../components/services';
import { SpecialThingsSection } from '../../components/specialThings';
import BannerSection from '../../components/banner';
import { NewsletterSection } from '../../components/newsLetter';
import { Footer } from '../../components/footer';
//import ContactSection from '../../components/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <SpecialThingsSection />
      <BannerSection />
      {/*<ContactSection />*/}
      <NewsletterSection />
      <Footer />
    </>
  );
}
