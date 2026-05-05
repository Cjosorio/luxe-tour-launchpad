import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import { AnimatedMap } from "@/components/AnimatedMap";
import { MapPin } from "lucide-react";

export const Coverage = () => {
  const { t } = useI18n();
  return (
    <section id="coverage" className="relative py-28 md:py-40 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label-eyebrow">{t.coverage.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance section-title">
                {t.coverage.title}
              </h2>
              <p className="mt-6 text-base md:text-lg lead-paragraph leading-relaxed">
                {t.coverage.description}
              </p>
              <ul className="mt-10 space-y-4">
                {t.coverage.zones.map((z, i) => (
                  <li key={z} className="flex items-center gap-4 group">
                    <span className="text-[10px] tracking-[0.25em] text-primary w-6">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-border group-hover:bg-primary/60 transition-colors" />
                    <span className="text-foreground font-light text-lg">{z}</span>
                    <MapPin size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <AnimatedMap />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};