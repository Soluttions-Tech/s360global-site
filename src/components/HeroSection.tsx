import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import sunLogo from '../assets/logo_SOL_vermelha_e_laranja.png';
import iconLogo from '../assets/logo_branca_apenasbola.png';

export default function HeroSection() {
    const containerVars: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-dark">
            {/* Background Graphic using Sun Logo - Centered like the globe in print */}
            <motion.div
                initial={{ opacity: 0, scale: 0.90 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center mix-blend-screen"
            >
                <motion.img
                    src={sunLogo}
                    alt=""
                    initial={{ rotate: -5 }}
                    animate={{ rotate: 5 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", repeatType: "reverse" }}
                    className="w-[800px] md:w-[1200px] opacity-90 object-contain"
                />
                {/* Radial gradient overlay to darken the center for text legibility */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#110609_55%)]" />
            </motion.div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center mt-8">
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl flex flex-col items-center"
                >
                    {/* Logo badge */}
                    <motion.div variants={itemVars} className="mb-8 flex flex-col items-center">
                        <motion.img
                            src={iconLogo}
                            alt="S360"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-14 h-14 mb-4 object-contain cursor-pointer"
                        />
                    </motion.div>

                    <motion.h1 variants={itemVars} className="font-copasetic text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-8">
                        Built on Experience. <br />
                        <span className="text-transparent bg-clip-text bg-brand-gradient animate-text-gradient">Invested in the Future.</span>
                    </motion.h1>

                    <motion.p variants={itemVars} className="font-figtree text-base md:text-xl text-brand-light/70 max-w-2xl mb-12 font-light leading-relaxed">
                        S360 Global is a long-term investment and operational platform bringing over 35 years of international expertise to the United States — in infrastructure, engineering, energy, and technology.
                    </motion.p>

                    <motion.div variants={itemVars} className="flex justify-center w-full">
                        <a href="#about" className="px-10 py-4 border border-brand-orange text-brand-orange font-figtree font-semibold uppercase tracking-widest text-xs hover:bg-brand-orange hover:text-white transition-all duration-500 bg-transparent rounded-sm">
                            Discover S360
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
