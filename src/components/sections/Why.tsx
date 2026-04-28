import { ShieldCheck, Sparkles, Clock, HeartHandshake } from "lucide-react";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";

const icons = [ShieldCheck, Sparkles, Clock, HeartHandshake];

export const Why = () => {
  const { t } = useI18n();
  return (
    <section id="why" className="relative py-28 md:py-40 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label-eyebrow">{t.why.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
                {t.why.title}
              </h2>
              <div className="gold-divider mt-10 max-w-[180px]" />
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-foreground/10">
            {t.why.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={i} delay={i * 0.08} className="bg-card">
                  <div className="p-8 lg:p-10 h-full group transition-colors hover:bg-primary/5 relative">
                    <div className="absolute top-6 right-6 font-serif italic text-sm text-primary">0{i + 1}</div>
                    <div className="h-12 w-12 rounded-sm bg-primary/10 grid place-items-center mb-6 transition-all duration-500 group-hover:bg-primary">
                      <Icon className="text-primary transition-colors group-hover:text-primary-foreground" size={22} strokeWidth={1.4} />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
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