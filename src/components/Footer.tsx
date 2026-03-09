import { motion } from 'framer-motion';
import logo from '../assets/logo_branca_horizontal_comnome.png';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="py-16 border-t border-brand-light/5 bg-brand-dark"
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-center text-brand-light/50 font-figtree font-light text-sm gap-8">
                {/* Logo + copyright — centered on mobile */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.img
                        src={logo}
                        alt="S360 Global"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.12, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-9 md:h-12 mb-6 w-auto opacity-60 cursor-pointer transition-[filter] duration-500"
                        style={{ filter: 'var(--logo-filter)' }}
                    />
                    <p>&copy; {new Date().getFullYear()} S360 Global Group. All rights reserved.</p>
                </div>

                {/* Address — centered on mobile */}
                <div className="flex flex-col items-center md:items-end space-y-1 text-brand-light/40 font-figtree text-sm font-light tracking-wide text-center md:text-right">
                    <span>1905 Intermodal Circle</span>
                    <span>Palmetto, FL 34221</span>
                </div>
            </div>
        </motion.footer>
    );
}
