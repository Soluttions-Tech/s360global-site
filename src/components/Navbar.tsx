import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import horizontalLogo from '../assets/logo_branca_horizontal_comnome.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#about', label: 'Who We Are' },
    { href: '#approach', label: 'How We Work' },
    { href: '#projects', label: 'Zenith Projects' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 transition-all duration-700 origin-top border-b ${isScrolled ? 'bg-[#0a0305]/60 backdrop-blur-xl py-4 border-white/[0.04] shadow-2xl' : 'bg-transparent py-6 border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer transition-opacity duration-300"
          >
            <img src={horizontalLogo} alt="S360 Global" className="h-7 md:h-9 w-auto" />
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-figtree font-semibold">
            {links.map(link => (
              <a key={link.href} href={link.href} className="text-brand-light/80 hover:text-brand-yellow transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden text-brand-light/80 p-1 focus:outline-none"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-40 pt-24 pb-10 px-8 bg-[#0a0305]/95 backdrop-blur-xl flex flex-col space-y-6 border-b border-white/[0.06] md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                className="font-figtree font-semibold uppercase tracking-[0.2em] text-sm text-brand-light/80 hover:text-brand-yellow transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
