import { motion } from 'framer-motion';
import logo from '../assets/logo_branca_horizontal_comnome.png';
import { LocationMap } from './ui/expand-map';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=1905+Intermodal+Circle+Palmetto+FL+34221';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="py-16 border-t border-brand-light/5 bg-brand-dark"
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-center text-brand-light/50 font-figtree font-light text-sm gap-12">
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

                {/* Address — interactive map card + hyperlink */}
                <div className="flex flex-col items-center md:items-end gap-6">
                    <LocationMap
                        location="Palmetto, FL 34221"
                        coordinates="27.5228° N, 82.5712° W"
                    />

                    <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brand-light/35 hover:text-brand-light/60 font-figtree font-light text-xs tracking-wide transition-colors duration-300 group"
                    >
                        {/* US flag — muted to match dark palette */}
                        <svg
                            aria-label="United States"
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            className="flex-shrink-0 rounded-[2px] opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                            style={{ shapeRendering: 'crispEdges' }}
                        >
                            {/* Stripes */}
                            {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                                <rect key={i} x="0" y={i * (14 / 13)} width="20" height={14 / 13 + 0.3}
                                    fill={i % 2 === 0 ? '#b83a0c' : '#f4f5f7'} fillOpacity={i % 2 === 0 ? 0.85 : 0.65} />
                            ))}
                            {/* Canton (blue field) */}
                            <rect x="0" y="0" width="8" height="7" fill="#1a2a4a" fillOpacity="0.9" />
                            {/* Stars — 3 rows simplified */}
                            {[1,3,5].map((row) =>
                                [1,2,3,4,5].map((col) => (
                                    <circle key={`${row}-${col}`}
                                        cx={col * 1.45 - 0.5} cy={row * 1.45 - 0.7}
                                        r="0.45" fill="#f4f5f7" fillOpacity="0.75" />
                                ))
                            )}
                            {[2,4].map((row) =>
                                [1,2,3,4].map((col) => (
                                    <circle key={`${row}-${col}`}
                                        cx={col * 1.45 + 0.2} cy={row * 1.45 - 0.7}
                                        r="0.45" fill="#f4f5f7" fillOpacity="0.75" />
                                ))
                            )}
                        </svg>
                        <span className="group-hover:underline underline-offset-4 decoration-brand-light/20">
                            1905 Intermodal Circle, Palmetto FL 34221
                        </span>
                    </a>
                </div>
            </div>
        </motion.footer>
    );
}
