import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { buildWhatsAppLink } from "@/data/config";
import hero from "@/assets/hero.jpg";

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-background pt-28 md:pt-32 pb-20 grain"
    >
      {/* Soft gold glow top-right */}
      <div className="absolute inset-0 bg-gradient-radial-gold pointer-events-none" />

      <div className="relative container grid grid-cols-12 gap-6 md:gap-10 items-start">
        {/* LEFT — Editorial typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-7 relative z-10 lg:pt-10"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="label-eyebrow">{t.hero.eyebrow}</span>
          </div>

          <h1 className="font-serif text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.88] tracking-tight text-foreground text-balance">
            {t.hero.title}{" "}
            <span className="italic text-primary">{t.hero.titleAccent}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-10 max-w-[50ch] text-base md:text-lg text-foreground/70 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 bg-foreground text-background px-8 py-5 text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t.cta.quote}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={buildWhatsAppLink(t.whatsapp.defaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] font-semibold text-foreground border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-colors"
            >
              {t.cta.whatsappLong}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Secondary logo lockup area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 flex items-center gap-6"
          >
            <div className="w-28 h-14 border border-dashed border-foreground/25 flex items-center justify-center bg-card">
              <span className="text-[8px] uppercase tracking-[0.25em] text-foreground/40">Logo</span>
            </div>
            <div className="flex-1 h-px bg-foreground/10 max-w-[140px]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">Est. 2012</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Editorial image with gold accent block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-5 relative lg:pt-20"
        >
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-card shadow-elegant">
              <img
                src={hero}
                alt="Transporte premium"
                className="h-full w-full object-cover animate-slow-zoom"
                width={1200}
                height={1500}
                loading="eager"
              />
            </div>
            {/* Gold block behind */}
            <div className="absolute -bottom-8 -left-8 w-44 h-56 bg-primary -z-10" />
            {/* Editorial number */}
            <div className="absolute -top-4 -right-2 font-serif italic text-[7rem] md:text-[9rem] leading-none text-primary/25 select-none pointer-events-none">
              01
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-foreground/10 shadow-card p-5 max-w-[180px] hidden sm:block">
              <div className="text-[9px] uppercase tracking-[0.3em] text-foreground/50 mb-2">Puntualidad</div>
              <div className="font-serif text-4xl text-foreground">100<span className="text-primary">%</span></div>
              <div className="text-[10px] text-foreground/60 mt-1">+5 000 viajes</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee-style footer strip */}
      <div className="relative mt-24 md:mt-32 border-y border-foreground/10 bg-card">
        <div className="container py-5 flex items-center justify-between gap-8 text-[10px] uppercase tracking-[0.35em] text-foreground/60 overflow-x-auto whitespace-nowrap">
          <span className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-primary" /> Seguridad certificada</span>
          <span className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-primary" /> Flota moderna</span>
          <span className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-primary" /> Atención 24/7</span>
          <span className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-primary" /> Conductores certificados</span>
          <span className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-primary" /> Puntualidad garantizada</span>
        </div>
      </div>
    </section>
  );
};