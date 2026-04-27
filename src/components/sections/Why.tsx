import { ShieldCheck, Sparkles, Clock, HeartHandshake } from "lucide-react";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";

const icons = [ShieldCheck, Sparkles, Clock, HeartHandshake];

export const Why = () => {
  const { t } = useI18n();
  return (
    <section id="why" className="relative py-28 md:py-40 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label-eyebrow">{t.why.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
                {t.why.title}
              </h2>
              <div className="gold-divider mt-10 max-w-[180px]" />
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border/40">
            {t.why.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={i} delay={i * 0.08} className="bg-background">
                  <div className="p-8 lg:p-10 h-full group transition-colors hover:bg-card">
                    <Icon className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110" size={32} strokeWidth={1.2} />
                    <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};