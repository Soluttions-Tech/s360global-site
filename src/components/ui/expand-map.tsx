import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"

interface LocationMapProps {
  location?: string
  coordinates?: string
  className?: string
}

export function LocationMap({
  location = "Palmetto, FL 34221",
  coordinates = "27.5228° N, 82.5712° W",
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className ?? ""}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsExpanded(v => !v)}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-brand-light/[0.08]"
        style={{
          backgroundColor: "#1c080a",
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? 260 : 220,
          height: isExpanded ? 220 : 110,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        {/* Subtle warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.04] via-transparent to-brand-light/[0.02]" />

        {/* Expanded map layer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute inset-0" style={{ backgroundColor: "#200a0c" }} />

              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {/* Main horizontal roads */}
                <motion.line x1="0%" y1="35%" x2="100%" y2="35%" stroke="rgba(244,245,247,0.18)" strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
                <motion.line x1="0%" y1="65%" x2="100%" y2="65%" stroke="rgba(244,245,247,0.18)" strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
                {/* Main vertical roads */}
                <motion.line x1="30%" y1="0%" x2="30%" y2="100%" stroke="rgba(244,245,247,0.14)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.4 }} />
                <motion.line x1="70%" y1="0%" x2="70%" y2="100%" stroke="rgba(244,245,247,0.14)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5 }} />
                {/* Secondary streets */}
                {[20, 50, 80].map((y, i) => (
                  <motion.line key={`h-${i}`} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
                    stroke="rgba(244,245,247,0.07)" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }} />
                ))}
                {[15, 45, 55, 85].map((x, i) => (
                  <motion.line key={`v-${i}`} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
                    stroke="rgba(244,245,247,0.07)" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }} />
                ))}
              </svg>

              {/* Buildings */}
              <motion.div className="absolute top-[40%] left-[10%] w-[15%] h-[18%] rounded-sm"
                style={{ backgroundColor: "rgba(184,58,12,0.25)", border: "1px solid rgba(184,58,12,0.18)" }}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.5 }} />
              <motion.div className="absolute top-[15%] left-[35%] w-[12%] h-[14%] rounded-sm"
                style={{ backgroundColor: "rgba(244,245,247,0.10)", border: "1px solid rgba(244,245,247,0.07)" }}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.6 }} />
              <motion.div className="absolute top-[70%] left-[75%] w-[16%] h-[16%] rounded-sm"
                style={{ backgroundColor: "rgba(244,245,247,0.12)", border: "1px solid rgba(244,245,247,0.08)" }}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.7 }} />
              <motion.div className="absolute top-[20%] right-[10%] w-[10%] h-[22%] rounded-sm"
                style={{ backgroundColor: "rgba(184,58,12,0.18)", border: "1px solid rgba(184,58,12,0.12)" }}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.55 }} />
              <motion.div className="absolute top-[55%] left-[5%] w-[8%] h-[12%] rounded-sm"
                style={{ backgroundColor: "rgba(244,245,247,0.08)", border: "1px solid rgba(244,245,247,0.05)" }}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.65 }} />
              <motion.div className="absolute top-[8%] left-[75%] w-[14%] h-[10%] rounded-sm"
                style={{ backgroundColor: "rgba(244,245,247,0.09)", border: "1px solid rgba(244,245,247,0.06)" }}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.75 }} />

              {/* Pin */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                  style={{ filter: "drop-shadow(0 0 10px rgba(246,161,27,0.65))" }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#f6a11b" />
                  <circle cx="12" cy="9" r="2.5" fill="#110609" />
                </svg>
              </motion.div>

              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#110609] via-transparent to-transparent opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern — collapsed only */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.04]">
            <defs>
              <pattern id="grid-s360" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(244,245,247,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-s360)" />
          </svg>
        </motion.div>

        {/* Card content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-4">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <motion.div
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-brand-yellow"
                animate={{
                  filter: isHovered
                    ? "drop-shadow(0 0 8px rgba(246,161,27,0.7))"
                    : "drop-shadow(0 0 4px rgba(246,161,27,0.3))",
                }}
                transition={{ duration: 0.3 }}
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" x2="9" y1="3" y2="18" />
                <line x1="15" x2="15" y1="6" y2="21" />
              </motion.svg>
            </motion.div>

            <motion.div
              className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "rgba(244,245,247,0.05)" }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              <span className="text-[9px] font-medium text-brand-light/40 tracking-widest uppercase font-figtree">
                Live
              </span>
            </motion.div>
          </div>

          {/* Bottom row */}
          <div className="space-y-1">
            <motion.p
              className="text-brand-light/60 font-figtree font-light text-xs tracking-wide"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.p>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="text-brand-light/35 text-[10px] font-mono"
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.div
              className="h-px bg-gradient-to-r from-brand-yellow/50 via-brand-yellow/20 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Hint */}
      <motion.p
        className="absolute -bottom-5 left-1/2 text-[9px] text-brand-light/25 whitespace-nowrap font-figtree tracking-widest uppercase"
        style={{ x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && !isExpanded ? 1 : 0, y: isHovered ? 0 : 4 }}
        transition={{ duration: 0.2 }}
      >
        Click to expand
      </motion.p>
    </motion.div>
  )
}
