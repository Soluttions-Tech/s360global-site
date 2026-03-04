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
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center text-brand-light/50 font-figtree font-light text-sm">
                <div className="mb-6 md:mb-0">
                    <motion.img
                        src={logo}
                        alt="S360 Global"
                        whileHover={{ scale: 1.05, opacity: 1 }}
                        className="h-6 md:h-8 mb-6 w-auto opacity-70 transition-opacity duration-300 cursor-pointer origin-left"
                    />
                    <p>&copy; {new Date().getFullYear()} S360 Global Group. All rights reserved.</p>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12">
                    <a href="https://www.s360.global" target="_blank" rel="noopener noreferrer" className="hover:text-brand-light transition-colors duration-300 tracking-wider">
                        www.s360.global
                    </a>
                </div>
            </div>
        </motion.footer>
    );
}
