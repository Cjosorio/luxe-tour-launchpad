import { motion } from "framer-motion";
import { Bus, MapPin } from "lucide-react";

/**
 * Stylized Central America map with an animated bus traveling
 * along the route connecting key destinations.
 */
export const AnimatedMap = () => {
  // Route path connecting cities (in SVG coords, viewBox 600x450)
  const routePath =
    "M 95 130 Q 150 145 200 175 T 305 215 Q 360 245 405 290 T 495 360";

  const cities = [
    { x: 95, y: 130, name: "Guatemala", side: "left" },
    { x: 175, y: 165, name: "El Salvador", side: "bottom" },
    { x: 260, y: 195, name: "San Pedro Sula", side: "top" },
    { x: 305, y: 215, name: "Tegucigalpa", side: "right", primary: true },
    { x: 405, y: 290, name: "Managua", side: "right" },
    { x: 495, y: 360, name: "San José", side: "right" },
  ];

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-elegant border border-border bg-gradient-to-br from-secondary/95 via-secondary to-foreground">
      {/* Subtle grid */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glow accent */}
      <div aria-hidden className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-secondary-glow/20 blur-3xl" />

      <svg
        viewBox="0 0 600 450"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
          <filter id="busGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Stylized Central America landmass */}
        <path
          d="M 40 110
             C 70 80, 130 85, 175 105
             C 220 115, 250 130, 290 150
             C 330 165, 360 185, 395 220
             C 425 250, 450 290, 480 330
             C 510 365, 540 395, 555 420
             L 540 430
             C 510 410, 475 380, 440 345
             C 405 310, 380 285, 350 260
             C 320 235, 290 215, 255 200
             C 220 185, 180 175, 140 165
             C 105 158, 70 155, 50 150
             Z"
          fill="url(#landGrad)"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="1"
        />

        {/* Dashed background route */}
        <path
          d={routePath}
          fill="none"
          stroke="hsl(var(--primary) / 0.25)"
          strokeWidth="2"
          strokeDasharray="4 6"
        />

        {/* Animated drawing route */}
        <motion.path
          d={routePath}
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.6 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />

        {/* City markers */}
        {cities.map((c, i) => (
          <g key={c.name}>
            <motion.circle
              cx={c.x}
              cy={c.y}
              r={c.primary ? 7 : 5}
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 200 }}
              style={{ transformOrigin: `${c.x}px ${c.y}px` }}
            />
            <motion.circle
              cx={c.x}
              cy={c.y}
              r={c.primary ? 7 : 5}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              animate={{ r: [c.primary ? 7 : 5, 22], opacity: [0.7, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
            />
            <text
              x={c.x + (c.side === "left" ? -10 : 10)}
              y={c.y - 10}
              textAnchor={c.side === "left" ? "end" : "start"}
              fill="white"
              fontSize={c.primary ? "13" : "11"}
              fontWeight={c.primary ? "700" : "500"}
              fontFamily="Montserrat, sans-serif"
              style={{ paintOrder: "stroke", stroke: "hsl(var(--foreground) / 0.6)", strokeWidth: 3 }}
            >
              {c.name}
            </text>
          </g>
        ))}

        {/* Bus traveling along the route */}
        <g filter="url(#busGlow)">
          <circle r="14" fill="hsl(var(--primary))" opacity="0.25">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path={routePath} />
          </circle>
          <g>
            <circle r="11" fill="hsl(var(--primary))" />
            <foreignObject x="-8" y="-8" width="16" height="16">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 16, height: 16 }}>
                <Bus size={14} color="hsl(var(--primary-foreground))" strokeWidth={2.4} />
              </div>
            </foreignObject>
            <animateMotion dur="9s" repeatCount="indefinite" path={routePath} />
          </g>
        </g>
      </svg>

      {/* Overlay badge */}
      <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-background/95 backdrop-blur rounded-full shadow-card text-xs font-medium text-foreground">
        <MapPin size={12} className="text-primary" /> Honduras • Centroamérica
      </div>

      {/* Legend */}
      <div className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 bg-background/95 backdrop-blur rounded-full shadow-card text-xs font-medium text-foreground">
        <Bus size={12} className="text-primary" /> Ruta en operación
      </div>
    </div>
  );
};