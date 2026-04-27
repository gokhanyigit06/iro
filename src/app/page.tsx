import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Marquee from './components/Marquee';
import RevealInit from './components/RevealInit';

export default function Home() {
  return (
    <main>
      {/* Scroll reveal init */}
      <RevealInit />
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor */}
      <CustomCursor />

      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero */}
      <Hero />

      {/* Marquee 1 */}
      <Marquee />

      {/* 3. About */}
      <About />

      {/* 4. Services */}
      <Services />

      {/* 5. Projects */}
      <Projects />

      {/* 6. Process */}
      <Process />

      {/* Marquee 3 */}
      <Marquee speed={35} items={['IREM CAGAN', 'PORTFOLIO', 'CREATIVE', 'DESIGN', 'ART', 'VISION', 'IDENTITY']} />

      {/* 9. Contact */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
