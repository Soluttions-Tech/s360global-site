import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Approach from './components/Approach';
import ZenithProjects from './components/ZenithProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-figtree selection:bg-brand-burgundy selection:text-brand-light">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <Approach />
        <ZenithProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
