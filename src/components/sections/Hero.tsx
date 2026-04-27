import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { buildWhatsAppLink } from "@/data/config";
import hero from "@/assets/hero.jpg";

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container min-h-screen flex flex-col justify-end pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="label-eyebrow">{t.hero.eyebrow}</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground text-balance">
            {t.hero.title}
            <br />
            <span className="italic text-primary/90">{t.hero.titleAccent}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wide rounded-sm shadow-gold transition-all hover:shadow-elegant hover:scale-[1.02]"
            >
              {t.cta.quote}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={buildWhatsAppLink(t.whatsapp.defaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground/30 text-foreground font-medium tracking-wide rounded-sm backdrop-blur-sm hover:bg-foreground/10 hover:border-primary transition-all"
            >
              {t.cta.whatsappLong}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            {t.hero.scroll}
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};