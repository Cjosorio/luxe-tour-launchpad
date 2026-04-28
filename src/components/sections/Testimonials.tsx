import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const { t } = useI18n();
  return (
    <section className="relative py-28 md:py-40 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(hsl(0_0%_0%)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal>
            <span className="uppercase tracking-[0.35em] text-[11px] font-semibold text-primary-foreground before:content-[''] before:inline-block before:w-7 before:h-px before:bg-primary-foreground/60 before:mr-3 before:align-middle">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-primary-foreground text-balance">
              {t.testimonials.title}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="group relative h-full p-8 lg:p-10 bg-card border border-foreground/10 rounded-sm hover-lift overflow-hidden">
                <Quote className="text-primary absolute top-6 right-6 transition-all group-hover:scale-110" size={40} strokeWidth={1.2} />
                <blockquote className="font-serif italic text-xl md:text-2xl text-foreground leading-snug relative z-10 pr-8">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-foreground/10 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-primary grid place-items-center font-serif text-primary-foreground text-lg">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-foreground font-medium">{item.author}</div>
                    <div className="text-xs text-foreground/60 tracking-wide">{item.role}</div>
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