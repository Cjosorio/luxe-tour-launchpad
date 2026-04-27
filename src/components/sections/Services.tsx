import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import airport from "@/assets/airport.jpg";
import excursion from "@/assets/excursion.jpg";
import corporate from "@/assets/corporate.jpg";
import events from "@/assets/events.jpg";

const images = [airport, excursion, corporate, events];

export const Services = () => {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-28 md:py-40 bg-card">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal>
            <span className="label-eyebrow">{t.services.eyebrow}</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
              {t.services.title}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.services.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <a
                href="#contact"
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm shadow-card hover-lift"
              >
                <img
                  src={images[i]}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">{item.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};