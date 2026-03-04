import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import sunLogo from '../assets/logo_SOL_vermelha_e_laranja.png';
import ballLogo from '../assets/logo_branca_apenasbola.png';

export default function HeroSection() {
    const containerVars: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.5
            }
        }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    // Special variant for "Invested in the Future" — smooth left-to-right clip reveal
    const revealVars: Variants = {
        hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
        visible: {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            transition: {
                duration: 3.2,
                ease: [0.05, 0.6, 0.3, 1],  // very slow start, eases in gently
                delay: 1.2
            }
        }
    };

    // The period appears at the very end as a finishing touch
    const periodVars: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 4.0
            }
        }
    };

    return (
        <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-16 md:pt-24 pb-8 md:pb-0 overflow-hidden bg-brand-dark">
            {/* Background Graphic using Sun Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center mix-blend-screen"
            >
                {/* MOBILE: massive so edges bleed, near-static slow rotation */}
                <motion.img
                    src={sunLogo}
                    alt=""
                    initial={{ rotate: -2 }}
                    animate={{ rotate: 2 }}
                    transition={{ repeat: Infinity, duration: 24, ease: "easeInOut", repeatType: "reverse" }}
                    className="md:hidden opacity-90 object-contain flex-shrink-0"
                    style={{ width: '20000px' }}
                />
                {/* DESKTOP: slightly less zoomed than before, smoother animation */}
                <motion.img
                    src={sunLogo}
                    alt=""
                    initial={{ rotate: -3 }}
                    animate={{ rotate: 3 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", repeatType: "reverse" }}
                    className="hidden md:block w-[1300px] opacity-90 object-contain"
                />
                {/* Radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#110609_70%)]" />
            </motion.div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center mt-8">
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl flex flex-col items-center"
                >
                    {/* Ball logo above the title */}
                    <motion.div variants={itemVars} className="mb-8">
                        <motion.img
                            src={ballLogo}
                            alt="S360"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-12 h-12 object-contain cursor-pointer opacity-90"
                        />
                    </motion.div>

                    <motion.h1 variants={itemVars} className="font-copasetic text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-8">
                        Built on Experience.<br className="hidden md:block" />{' '}
                        {/* Left-to-right clip reveal — period stays inside to avoid orphan */}
                        <motion.span
                            variants={revealVars}
                            className="inline-block text-transparent bg-clip-text bg-brand-gradient animate-text-gradient"
                        >
                            Invested in the Future
                        </motion.span>{
                        /* Period appears as a finishing touch after the reveal */}
                        <motion.span
                            variants={periodVars}
                            className="text-transparent bg-clip-text bg-brand-gradient"
                        >.</motion.span>
                    </motion.h1>

                    <motion.p variants={itemVars} className="font-figtree text-sm md:text-xl text-brand-light/70 max-w-2xl mb-12 font-light leading-relaxed px-2 md:px-0">
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
