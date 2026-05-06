import { motion } from "framer-motion";
import { Bus, MapPin } from "lucide-react";

/**
 * Stylized Central America map with an animated bus traveling
 * along the route connecting key destinations.
 */
export const AnimatedMap = () => {
  // Route path connecting cities (viewBox 600x450) — follows the isthmus
  const routePath =
    "M 130 150 Q 175 175 215 195 T 290 220 Q 340 250 380 295 T 455 365 Q 490 395 510 410";

  const cities: { x: number; y: number; name: string; side: "left" | "right" | "top" | "bottom"; primary?: boolean }[] = [
    { x: 130, y: 150, name: "Guatemala", side: "left" },
    { x: 200, y: 188, name: "El Salvador", side: "bottom" },
    { x: 250, y: 175, name: "San Pedro Sula", side: "top" },
    { x: 290, y: 220, name: "Tegucigalpa", side: "right", primary: true },
    { x: 380, y: 295, name: "Managua", side: "left" },
    { x: 455, y: 365, name: "San José", side: "right" },
    { x: 510, y: 410, name: "Panamá", side: "right" },
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

        {/* Central America silhouette (stylized but recognizable) */}
        <g>
          {/* Mexico southern tip / Yucatán */}
          <path
            d="M 40 90
               C 60 70, 110 60, 160 65
               C 200 68, 240 75, 270 90
               L 285 110
               C 270 118, 245 122, 225 125
               C 215 132, 220 145, 215 155
               C 200 152, 175 148, 155 145
               C 140 158, 130 165, 125 175
               C 110 172, 95 165, 80 158
               C 65 150, 50 135, 42 120
               Z"
            fill="url(#landGrad)"
            stroke="hsl(var(--primary) / 0.45)"
            strokeWidth="1.2"
          />
          {/* Guatemala / Belize / Honduras / El Salvador / Nicaragua */}
          <path
            d="M 125 175
               C 145 168, 175 168, 205 175
               C 235 178, 265 175, 290 168
               L 310 175
               C 320 185, 318 200, 312 212
               C 335 215, 360 225, 380 245
               C 400 265, 415 290, 425 315
               C 415 320, 395 318, 380 312
               C 365 322, 355 340, 350 360
               C 335 358, 318 348, 305 335
               C 285 320, 268 300, 255 278
               C 240 258, 225 240, 205 228
               C 185 220, 165 215, 148 208
               C 135 200, 128 188, 125 175
               Z"
            fill="url(#landGrad)"
            stroke="hsl(var(--primary) / 0.45)"
            strokeWidth="1.2"
          />
          {/* Costa Rica / Panamá (the narrow S-curve) */}
          <path
            d="M 360 320
               C 385 322, 410 335, 432 355
               C 452 372, 468 388, 478 400
               C 495 395, 515 395, 540 400
               C 560 405, 575 415, 580 425
               C 565 432, 540 432, 518 428
               C 495 432, 472 430, 455 420
               C 438 412, 422 398, 405 382
               C 388 368, 372 352, 360 335
               Z"
            fill="url(#landGrad)"
            stroke="hsl(var(--primary) / 0.45)"
            strokeWidth="1.2"
          />
          {/* Caribbean dots — Roatán / islands */}
          <circle cx="265" cy="155" r="3" fill="hsl(var(--primary) / 0.4)" />
          <circle cx="285" cy="150" r="2" fill="hsl(var(--primary) / 0.4)" />
          <circle cx="305" cy="158" r="2.5" fill="hsl(var(--primary) / 0.4)" />
        </g>

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