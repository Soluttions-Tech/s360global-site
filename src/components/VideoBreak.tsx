import { motion } from 'framer-motion';
import videoSrc from '../assets/logo_motion.mp4';

export default function VideoBreak() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full bg-brand-dark overflow-hidden"
        >
            {/* Gradient top fade — blends into Who We Are's dark bg */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-dark to-transparent z-10 pointer-events-none" />

            <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
            />

            {/* Gradient bottom fade — blends into How We Work */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0c0406] to-transparent z-10 pointer-events-none" />
        </motion.section>
    );
}
