import { motion } from 'framer-motion';
import { ArrowRight, SolarPanel, HouseLine } from '@phosphor-icons/react';

export default function ZenithProjects() {
    const projects = [
        {
            title: 'Zenith - Smart Homes',
            description: 'Modular, scalable, and ultra-efficient housing blocks designed for workforce contexts. Each unit acts as a standalone micro-grid, seamlessly integrating rooftop solar grids, top-tier inverters, and high-capacity battery systems to provide lifelong energy resilience.',
            icon: <HouseLine size={48} weight="light" className="text-brand-yellow mb-8" />
        },
        {
            title: 'Zenith - Solar Plants',
            description: 'Utility-scale clean energy generation facilities engineered to power entire industrial communities. Leveraging state-of-the-art photovoltaic systems and advanced tracking mechanisms to maximize yield and aggressively reduce carbon footprint at an industrial level.',
            icon: <SolarPanel size={48} weight="light" className="text-brand-orange mb-8" />
        }
    ];

    return (
        <section id="projects" className="py-32 bg-[#0c0406]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-24 md:flex justify-between items-end"
                >
                    <div className="max-w-2xl">
                        <h2 className="font-copasetic text-4xl md:text-5xl mb-6">Our Flagship <span className="text-transparent bg-clip-text bg-brand-gradient">Initiatives</span></h2>
                        <p className="font-figtree text-brand-light/60 text-lg font-light leading-relaxed">
                            Redefining modular construction and sustainable energy distribution for the modern era. Designed for resilience, engineered for scale.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                            className="group relative p-12 lg:p-16 border border-brand-light/10 bg-brand-dark transition-colors duration-700 hover:border-brand-burgundy/50"
                        >
                            {/* Subtle top border gradient reveal */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {project.icon}
                            <h3 className="font-copasetic text-3xl mb-6 group-hover:text-brand-light transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="font-figtree text-brand-light/60 font-light leading-relaxed mb-12 text-[1.05rem]">
                                {project.description}
                            </p>

                            <button className="flex items-center text-brand-light/70 uppercase tracking-[0.2em] text-xs font-semibold group-hover:text-brand-yellow transition-colors duration-300">
                                Explore Specification <ArrowRight size={16} weight="regular" className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
