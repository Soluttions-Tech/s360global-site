import { motion } from 'framer-motion';
export default function AboutUs() {
    return (
        <section id="about" className="pt-32 pb-16 relative border-t border-brand-light/5 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Title col — centered on mobile, left on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 text-center lg:text-left"
                    >
                        <h2 className="font-copasetic text-4xl md:text-5xl mb-8 leading-tight">
                            Who We <br />
                            <span className="text-brand-light/40">Are</span>
                        </h2>
                        {/* Animated underline — centered on mobile */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            style={{ originX: 0 }}
                            className="h-px w-24 bg-brand-gradient mb-8 mx-auto lg:mx-0"
                        />

                        <p className="font-figtree text-brand-light/60 text-lg font-light leading-relaxed">
                            For more than three decades, building capability in sectors that demand precision.
                        </p>
                    </motion.div>

                    {/* Text col */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-7 font-figtree text-brand-light/80 text-lg leading-relaxed font-light space-y-8 text-center lg:text-left"
                    >
                        <p className="text-xl leading-relaxed text-brand-light">
                            For more than three decades, our group has operated across Brazil and Europe, building capability in sectors that demand precision, durability, and long-term commitment. We do not enter markets lightly.
                        </p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="p-8 border-l-2 border-brand-orange bg-brand-light/[0.02] text-left"
                        >
                            <strong>S360 Global</strong> represents our strategic presence in the United States — an investment in people, processes, and local capabilities designed to create sustainable value, not just returns.
                        </motion.p>
                        <p className="font-semibold text-brand-yellow uppercase tracking-widest text-sm">
                            We are here to build, and we are here to stay.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
