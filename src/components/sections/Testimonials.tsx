import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const { t } = useI18n();
  return (
    <section className="relative py-28 md:py-40 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal>
            <span className="label-eyebrow">{t.testimonials.eyebrow}</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
              {t.testimonials.title}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="group relative h-full p-8 lg:p-10 bg-card border border-border/60 rounded-sm hover-lift overflow-hidden">
                <Quote className="text-primary/30 absolute top-6 right-6 transition-all group-hover:text-primary/60 group-hover:scale-110" size={48} strokeWidth={1} />
                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-snug relative z-10">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/60 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center font-serif text-primary-foreground">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-foreground font-medium">{item.author}</div>
                    <div className="text-xs text-muted-foreground tracking-wide">{item.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};