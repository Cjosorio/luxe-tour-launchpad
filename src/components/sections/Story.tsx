import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import history from "@/assets/history.jpg";

export const Story = () => {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" ref={ref} className="relative py-28 md:py-40 bg-muted overflow-hidden">
      {/* Bg blue accent */}
      <div aria-hidden className="absolute top-1/2 -translate-y-1/2 -right-32 h-[40rem] w-[40rem] rounded-full bg-secondary/8 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="relative mb-16 md:mb-20">
          <div className="relative aspect-[1200/771] w-full overflow-hidden rounded-sm shadow-elegant">
            <motion.img
              src={history}
              alt="Historia"
              loading="lazy"
              style={{ y }}
              className="absolute inset-0 h-[115%] w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/30" />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 right-4 lg:-right-6 bg-card border border-border rounded-sm shadow-elegant p-6 text-center animate-float-y"
          >
            <div className="font-serif text-5xl gold-text leading-none">2001</div>
            <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Desde</div>
          </motion.div>
        </div>

        <div className="max-w-4xl">
            <Reveal>
              <span className="label-eyebrow">{t.story.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance section-title">
                {t.story.title}
              </h2>
              <p className="mt-8 text-lg lead-paragraph leading-relaxed text-pretty max-w-2xl">
                {t.story.paragraph}
              </p>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <Reveal delay={0.15}>
                <div className="p-7 rounded-sm bg-card border border-border shadow-card hover:shadow-gold transition-all hover:-translate-y-1">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gradient-gold mb-4 text-primary-foreground">
                    <Target size={22} strokeWidth={1.8} />
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                    {t.story.missionTitle}
                  </div>
                  <p className="text-foreground leading-relaxed text-sm">{t.story.mission}</p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="p-7 rounded-sm bg-card border border-border shadow-card hover:shadow-blue transition-all hover:-translate-y-1">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gradient-blue mb-4 text-secondary-foreground">
                    <Eye size={22} strokeWidth={1.8} />
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-secondary mb-2">
                    {t.story.visionTitle}
                  </div>
                  <p className="text-foreground leading-relaxed text-sm">{t.story.vision}</p>
                </div>
              </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
};
