import { useState } from 'react';
import { motion } from 'framer-motion';
import { SolarPanel, HouseLine } from '@phosphor-icons/react';
import smartHomesImg from '../assets/zenith_smart_homes.png';
import solarPlantsImg from '../assets/zenith_solar_plants.png';

interface Project {
    title: string;
    subtitle: string;
    shortDescription: string;
    fullDescription: string;
    icon: React.ReactNode;
    image: string;
    accentClass: string;
}

const projects: Project[] = [
    {
        title: 'Smart Homes',
        subtitle: 'Affordable Housing, Reimagined',
        shortDescription: 'Modular, energy-integrated housing for social and workforce communities — each home a micro energy generator.',
        fullDescription: 'Zenith Smart Homes designs and delivers modular housing built with rooftop solar panels, inverters, and battery systems. Each home is equipped with next-generation IoT technology that monitors and actively manages electrical consumption — reducing waste, lowering costs, and giving residents real control. Resilient, efficient, and built to remain affordable long after the keys are handed over.',
        icon: <HouseLine size={36} weight="light" className="text-brand-yellow" />,
        image: smartHomesImg,
        accentClass: 'border-brand-yellow'
    },
    {
        title: 'Solar Plants',
        subtitle: 'Utility-Scale Clean Energy',
        shortDescription: 'Industrial-grade solar generation facilities engineered to power entire communities with zero-compromise efficiency.',
        fullDescription: 'Zenith Solar Plants develops utility-scale clean energy facilities engineered to power entire industrial communities. Leveraging state-of-the-art photovoltaic systems and advanced tracking mechanisms to maximize yield and aggressively reduce carbon footprint — building the infrastructure needed to power the next generation of sustainable development at industrial scale.',
        icon: <SolarPanel size={36} weight="light" className="text-brand-orange" />,
        image: solarPlantsImg,
        accentClass: 'border-brand-orange'
    }
];

// Desktop card with hover reveal
function DesktopCard({ project, index }: { project: Project; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="relative overflow-hidden border border-brand-light/10 bg-brand-dark cursor-pointer h-[420px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Top gradient bar */}
            <div className={`absolute top-0 left-0 w-full h-[2px] bg-brand-gradient transition-opacity duration-700 z-20 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

            {/* Background image — fades in on hover */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 1.06 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-0"
            >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-[0.44]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
            </motion.div>

            {/* Default content */}
            <motion.div
                animate={{ opacity: hovered ? 0 : 1, y: hovered ? -18 : 0, scale: hovered ? 0.985 : 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 z-10 p-12 lg:p-16 flex flex-col ${hovered ? 'pointer-events-none' : 'pointer-events-auto'}`}
            >
                <div className="mb-6">{project.icon}</div>
                <h3 className="font-copasetic text-3xl mb-3">{project.title}</h3>
                <p className="font-figtree text-brand-yellow/80 text-xs uppercase tracking-widest mb-6 font-semibold">{project.subtitle}</p>
                <p className="font-figtree text-brand-light/60 font-light leading-relaxed text-[1rem] flex-1">{project.shortDescription}</p>
            </motion.div>

            {/* Hover content */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 28, scale: hovered ? 1 : 0.985 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: hovered ? 0.08 : 0 }}
                className={`absolute inset-0 z-10 p-12 lg:p-16 flex flex-col justify-end ${hovered ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                <p className={`font-figtree text-xs uppercase tracking-[0.3em] font-semibold mb-3 border-l-2 pl-3 ${project.accentClass} text-brand-light/60`}>
                    Zenith {project.title}
                </p>
                <h3 className="font-copasetic text-2xl mb-4 text-brand-light">{project.subtitle}</h3>
                <div className="h-px w-12 bg-brand-gradient mb-5" />
                <p className="font-figtree text-brand-light/80 font-light leading-relaxed text-sm">{project.fullDescription}</p>
            </motion.div>
        </motion.div>
    );
}

// Mobile card with tap-to-flip
function MobileCard({ project }: { project: Project }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.button
            type="button"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[380px] w-full cursor-pointer overflow-hidden border border-brand-light/10 bg-brand-dark text-left [perspective:1400px]"
            onClick={() => setFlipped(f => !f)}
        >
            {/* Top gradient bar always visible on mobile */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gradient z-20" />

            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Default face */}
                <div
                    className={`absolute inset-0 z-10 flex flex-col p-8 [backface-visibility:hidden] ${flipped ? 'pointer-events-none' : 'pointer-events-auto'}`}
                >
                    <div className="mb-5">{project.icon}</div>
                    <h3 className="font-copasetic text-2xl mb-2">{project.title}</h3>
                    <p className="font-figtree text-brand-yellow/80 text-xs uppercase tracking-widest mb-5 font-semibold">{project.subtitle}</p>
                    <p className="font-figtree text-brand-light/60 font-light leading-relaxed text-sm flex-1">{project.shortDescription}</p>
                    <div className="flex items-center gap-2 mt-6 text-brand-light/35 text-xs uppercase tracking-widest font-semibold font-figtree transition-opacity duration-300 group-active:opacity-60">
                        <span className="w-4 h-px bg-brand-light/20" />
                        Tap to explore
                    </div>
                </div>

                {/* Flipped face */}
                <div
                    className={`absolute inset-0 z-10 flex flex-col justify-end p-8 [backface-visibility:hidden] ${flipped ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className="absolute inset-0 z-0">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-[0.44]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
                    </div>

                    <div className="relative z-10">
                        <p className={`font-figtree text-xs uppercase tracking-[0.3em] font-semibold mb-2 border-l-2 pl-3 ${project.accentClass} text-brand-light/60`}>
                            Zenith {project.title}
                        </p>
                        <h3 className="font-copasetic text-xl mb-3 text-brand-light">{project.subtitle}</h3>
                        <div className="h-px w-10 bg-brand-gradient mb-4" />
                        <p className="font-figtree text-brand-light/80 font-light leading-relaxed text-xs">{project.fullDescription}</p>
                    </div>
                </div>
            </motion.div>
        </motion.button>
    );
}

export default function ZenithProjects() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section id="projects" className="py-32 bg-[#0c0406]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-24 text-center lg:text-left lg:flex justify-between items-end"
                >
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <p className="font-figtree text-brand-light/40 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                            Check out our
                        </p>
                        <h2 className="font-copasetic text-4xl md:text-5xl mb-6">
                            Zenith <span className="text-transparent bg-clip-text bg-brand-gradient animate-text-gradient">Projects</span>
                        </h2>
                        <p className="font-figtree text-brand-light/60 text-lg font-light leading-relaxed">
                            Redefining modular construction and sustainable energy distribution for the modern era. Designed for resilience, engineered for scale.
                        </p>
                    </div>
                </motion.div>

                {/* Desktop grid */}
                <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <DesktopCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Mobile carousel */}
                <div className="md:hidden">
                    <div className="overflow-hidden" ref={(el) => { if (el) (el as HTMLElement & { _carouselWidth?: number })._carouselWidth = el.offsetWidth; }}>
                        <motion.div
                            className="flex cursor-grab active:cursor-grabbing"
                            animate={{ x: `-${activeSlide * 100}%` }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.1}
                            onDragEnd={(_e, info) => {
                                const threshold = 50;
                                if (info.offset.x < -threshold && activeSlide < projects.length - 1) {
                                    setActiveSlide(s => s + 1);
                                } else if (info.offset.x > threshold && activeSlide > 0) {
                                    setActiveSlide(s => s - 1);
                                }
                            }}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="min-w-full">
                                    <MobileCard project={project} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-6">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveSlide(i)}
                                className={`transition-all duration-300 rounded-full ${activeSlide === i
                                    ? 'w-6 h-2 bg-brand-orange'
                                    : 'w-2 h-2 bg-brand-light/20'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
