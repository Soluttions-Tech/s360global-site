import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Approach from './components/Approach';
import ZenithProjects from './components/ZenithProjects';
import Footer from './components/Footer';
import logoMotion from './assets/logo_motion.mp4';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-figtree selection:bg-brand-burgundy selection:text-brand-light">
      <Navbar />
      <main>
        <HeroSection />

        {/* Shared background wrapper spanning both Who We Are + How We Work */}
        <div className="relative overflow-hidden">
          {/* Blurry video background — sits behind both sections */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
            <video
              src={logoMotion}
              autoPlay
              loop
              muted
              playsInline
              className="w-[480px] md:w-[680px] opacity-20 blur-[8px] mix-blend-screen object-contain"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#110609_60%)]" />
          </div>

          <AboutUs />
          <Approach />
        </div>

        <ZenithProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
