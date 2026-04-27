import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";

export const Coverage = () => {
  const { t } = useI18n();
  return (
    <section id="coverage" className="relative py-28 md:py-40 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label-eyebrow">{t.coverage.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
                {t.coverage.title}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-elegant border border-border/60">
                <iframe
                  title="Cobertura"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3604.0!2d-57.575926!3d-25.282131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2s!4v1700000000000"
                  className="absolute inset-0 h-full w-full grayscale contrast-125"
                  style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) grayscale(0.4)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};