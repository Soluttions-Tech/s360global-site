import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Approach from './components/Approach';
import ZenithProjects from './components/ZenithProjects';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

/* ─── Flat gradient-strip divider ────────────────────────────────────
   Uses CSS variables so colours adapt to dark / light theme.
   accent=true adds a centred 1px orange accent line.
────────────────────────────────────────────────────────────────────── */
function FlatDivider({ accent = false }: { accent?: boolean }) {
  if (accent) {
    return (
      <div className="relative py-6 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--color-brand-dark), var(--wave-mid), var(--color-brand-dark))',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{
              background:
                'linear-gradient(to right, transparent, var(--wave-stroke) 50%, transparent)',
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-16 pointer-events-none"
      style={{
        background:
          'linear-gradient(to bottom, var(--color-brand-dark), var(--wave-fill), var(--color-brand-dark))',
      }}
    />
  );
}

function AppInner() {
  const { theme } = useTheme();

  return (
    <div
      data-theme={theme}
      className="bg-brand-dark min-h-screen text-brand-light font-figtree selection:bg-brand-burgundy selection:text-brand-light transition-colors duration-500"
    >
      <Navbar />
      <main>
        <HeroSection />

        {/* Hero → Who We Are */}
        <FlatDivider />

        <AboutUs />

        {/* Who We Are → How We Work — with accent line */}
        <FlatDivider accent />

        <Approach />

        {/* How We Work → Zenith */}
        <FlatDivider />

        {/* Zenith always stays dark regardless of theme */}
        <div data-theme="dark">
          <ZenithProjects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

