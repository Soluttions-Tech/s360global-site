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
              className="w-[640px] md:w-[880px] opacity-[0.25] blur-[4px] mix-blend-screen object-contain"
              style={{
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
              }}
            />
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
