import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import horizontalLogo from '../assets/logo_branca_horizontal_comnome.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 origin-top ${isScrolled ? 'bg-[#0a0305]/60 backdrop-blur-xl py-4 border-b border-white/[0.03] shadow-2xl' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer transition-opacity duration-300"
        >
          <img src={horizontalLogo} alt="S360 Global" className="h-7 md:h-9 w-auto" />
        </motion.a>
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-figtree font-semibold">
          <a href="#about" className="text-brand-light/80 hover:text-brand-yellow transition-colors duration-300">Who We Are</a>
          <a href="#approach" className="text-brand-light/80 hover:text-brand-yellow transition-colors duration-300">How We Work</a>
          <a href="#projects" className="text-brand-light/80 hover:text-brand-orange transition-colors duration-300">Zenith Projects</a>
        </div>
      </div>
    </motion.nav>
  );
}
