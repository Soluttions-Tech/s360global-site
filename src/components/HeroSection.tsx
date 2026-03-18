import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import logoMotion from '../assets/logo_motion.mp4';
import logoMark from '../assets/logo_branca_apenasbola.png';
import { useTheme } from '../context/ThemeContext';

export default function HeroSection() {
    const { theme } = useTheme();
    const [videoReady, setVideoReady] = useState(false);
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
            {/* Static fallback keeps the hero background visible on mobile even if autoplay is restricted. */}
            <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                <img
                    src={logoMark}
                    alt=""
                    aria-hidden="true"
                    className={`w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] blur-[1px] object-contain transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-[0.16] md:opacity-[0.12]'} ${theme === 'dark' ? '' : 'mix-blend-multiply'}`}
                />
            </div>

            {/* Background: blurry logo motion video */}
            <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                <video
                    src={logoMotion}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={() => setVideoReady(true)}
                    onPlaying={() => setVideoReady(true)}
                    className={`w-[360px] sm:w-[460px] md:w-[880px] opacity-[0.32] md:opacity-[0.25] blur-[2px] md:blur-[4px] object-contain ${theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
                    poster={logoMark}
                    style={{
                        maskImage: 'radial-gradient(circle at center, black 48%, transparent 76%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black 48%, transparent 76%)',
                    }}
                />
            </div>
            {/* Bottom fade — adapts to theme via --color-brand-dark */}
            <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-0"
                style={{ background: 'linear-gradient(to bottom, transparent, var(--color-brand-dark))' }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center mt-8">
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl flex flex-col items-center"
                >
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
                        <a href="#about" className="px-10 py-4 border border-brand-orange text-brand-orange font-figtree font-semibold uppercase tracking-widest text-xs hover:bg-brand-orange hover:text-white transition-all duration-500 bg-transparent rounded-full">
                            Discover S360
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
