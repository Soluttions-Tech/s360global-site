import { motion } from 'framer-motion';
import videoSrc from '../assets/0304.mp4';

export default function Approach() {
    return (
        <section id="approach" className="py-32 relative bg-[#0c0406] overflow-hidden">
            {/* Blurry Video Background */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30 mix-blend-screen blur-[4px] scale-105"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0406_55%)]" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <h2 className="font-copasetic text-4xl md:text-5xl mb-8 leading-tight">
                            How We <br />
                            <span className="text-brand-light/40">Work</span>
                        </h2>
                        <div className="h-px w-24 bg-brand-gradient mb-8" />

                        <p className="font-figtree text-brand-light/60 text-lg font-light leading-relaxed">
                            We invest in the communities and industries we enter.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-7 font-figtree text-brand-light/80 text-lg leading-relaxed font-light space-y-8"
                    >
                        <p className="text-xl leading-relaxed text-brand-light">
                            Our model is built on developing local talent, establishing domestic operational infrastructure, and growing supply chains from within.
                        </p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="p-8 border-l-2 border-brand-yellow bg-brand-light/[0.02] font-medium"
                        >
                            Every project we pursue reflects a commitment to structured, responsible growth — with the ambition to scale.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
