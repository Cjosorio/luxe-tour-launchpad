import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronDown, ShieldCheck, Star, MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { buildWhatsAppLink } from "@/data/config";
import hero from "@/assets/hero.jpg";

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with slow zoom + light overlay */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-radial-blue opacity-90" />
      </div>

      {/* Floating gold orb decoration */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-10 -left-32 h-96 w-96 rounded-full bg-secondary/25 blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container min-h-screen flex flex-col justify-center pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-left flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/85 backdrop-blur-md border border-primary/40 shadow-card"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-foreground">
              {t.hero.eyebrow}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-background/95 max-w-2xl text-pretty drop-shadow-md"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold tracking-wide rounded-sm shadow-gold transition-all hover:shadow-elegant hover:scale-[1.03] hover:-translate-y-0.5"
            >
              {t.cta.quote}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={buildWhatsAppLink(t.whatsapp.defaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-background/80 text-background font-medium tracking-wide rounded-sm backdrop-blur-md bg-secondary/30 hover:bg-secondary hover:border-secondary transition-all"
            >
              <Phone size={16} />
              {t.cta.whatsappLong}
            </a>
          </motion.div>

          {/* Stats removed per request */}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#why"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.4, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/90"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">{t.hero.scroll}</span>
          <ChevronDown size={20} />
        </motion.a>
      </div>

      {/* Marquee of trust badges */}
      <div className="absolute bottom-0 inset-x-0 z-10 bg-secondary text-secondary-foreground py-4 overflow-hidden border-t border-primary/30">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-12 items-center px-6 text-sm tracking-[0.2em] uppercase">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-primary" /> Seguros vigentes</span>
              <span className="flex items-center gap-2"><Star size={16} className="text-primary" /> 25 años</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Honduras</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Guatemala</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> El Salvador</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Nicaragua</span>
              <span className="flex items-center gap-2"><Star size={16} className="text-primary" /> WiFi a bordo</span>
              <span className="flex items-center gap-2"><Star size={16} className="text-primary" /> 24/7</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
