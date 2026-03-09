import { motion } from 'framer-motion';

export default function Approach() {
    return (
        <section id="approach" className="pt-16 pb-24 relative overflow-hidden">
            {/* Warm orange ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,58,12,0.07) 0%, transparent 70%)' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* On mobile: title first, then text. On desktop: text left, title right */}

                    {/* Title — first on mobile (order-1), right on desktop (order-2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="lg:col-span-5 order-1 lg:order-2 text-center lg:text-right"
                    >
                        <h2 className="font-copasetic text-4xl md:text-5xl mb-8 leading-tight text-transparent bg-clip-text bg-brand-gradient animate-text-gradient">
                            How We Work
                        </h2>
                        {/* Animated underline — centered on mobile, right-aligned on desktop */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            style={{ originX: 0 }}
                            className="h-px w-24 bg-brand-gradient mb-8 mx-auto lg:ml-auto lg:mr-0"
                        />
                        <p className="font-figtree text-brand-light/60 text-lg font-light leading-relaxed">
                            We invest in the communities and industries we enter.
                        </p>
                    </motion.div>

                    {/* Text content — second on mobile (order-2), left on desktop (order-1) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 order-2 lg:order-1 font-figtree text-brand-light/80 text-lg leading-relaxed font-light space-y-8 text-center lg:text-left"
                    >
                        <p className="text-xl leading-relaxed text-brand-light">
                            Our model is built on developing local talent, establishing domestic operational infrastructure, and growing supply chains from within.
                        </p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="p-8 border-l-2 border-brand-yellow bg-brand-light/[0.02] font-medium text-left"
                        >
                            Every project we pursue reflects a commitment to structured, responsible growth — with the ambition to scale.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
