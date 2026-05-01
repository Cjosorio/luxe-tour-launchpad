import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Testimonials = () => {
  const { t } = useI18n();
  const items = t.testimonials.items;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[idx];

  return (
    <section className="relative py-28 md:py-36 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Decorative gold blobs */}
      <div aria-hidden className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <Quote
        aria-hidden
        className="absolute top-10 right-10 text-primary/15"
        size={220}
        strokeWidth={0.5}
      />

      <div className="container relative">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase font-medium text-primary">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-secondary-foreground text-balance">
              {t.testimonials.title}
            </h2>
            <div className="mt-6 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-primary fill-primary" />
              ))}
              <span className="ml-3 text-sm opacity-80">5.0 / Clientes verificados</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
              >
                <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl leading-snug text-secondary-foreground text-balance">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-5">
                  <div className="h-14 w-14 rounded-full bg-gradient-gold grid place-items-center font-serif text-2xl text-primary-foreground shadow-gold">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-lg">{current.author}</div>
                    <div className="text-sm opacity-75 tracking-wide">{current.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-12 flex items-center justify-between gap-6">
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Testimonio ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "w-10 bg-primary" : "w-1.5 bg-secondary-foreground/30 hover:bg-secondary-foreground/60"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
                  className="h-11 w-11 rounded-full border border-secondary-foreground/30 grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % items.length)}
                  className="h-11 w-11 rounded-full border border-secondary-foreground/30 grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
