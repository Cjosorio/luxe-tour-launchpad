import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import history from "@/assets/history.jpg";

export const Story = () => {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" ref={ref} className="relative py-28 md:py-40 bg-secondary overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-elegant bg-card">
              <motion.img
                src={history}
                alt="Historia"
                loading="lazy"
                style={{ y }}
                className="absolute inset-0 h-[115%] w-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary -z-0 hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 border border-foreground/20 w-40 h-40 -z-0 hidden lg:block" />
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <span className="label-eyebrow">{t.story.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
                {t.story.title}
              </h2>
              <p className="mt-8 text-lg text-foreground/70 leading-relaxed text-pretty max-w-2xl">
                {t.story.paragraph}
              </p>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <Reveal delay={0.15}>
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
                    {t.story.missionTitle}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{t.story.mission}</p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
                    {t.story.visionTitle}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{t.story.vision}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.35}>
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-foreground/10 pt-10">
                {[
                  { n: "10+", l: "Años" },
                  { n: "5K+", l: "Viajes" },
                  { n: "100%", l: "Puntualidad" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-serif text-4xl md:text-5xl text-foreground">{s.n}</div>
                    <div className="mt-1 text-[10px] tracking-[0.25em] uppercase text-foreground/50">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};