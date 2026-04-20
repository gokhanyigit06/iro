import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero — büyük başlık + monster karakter + tech marquee */}
      <Hero />

      {/* 3. About */}
      <About />

      {/* 4. Services — uzmanlık alanlarım (Nexia: Your Brand) */}
      <Services />

      {/* 5. Process — 01/02/03 adımlar (Nexia: How we work) */}
      <Process />

      {/* 6. Projects — proje showcase (Nexia: Our Work) */}
      <Projects />

      {/* 7. Skills — detaylı skill bars + tech stack */}
      <Skills />

      {/* 8. CTA Banner — büyük iletişim çağrısı (Nexia: Let's turn your ideas) */}
      <CTABanner />

      {/* 9. Contact — form ve iletişim bilgileri */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
