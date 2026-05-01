import { ShieldCheck, Globe2, Award, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";

const icons = [Award, Globe2, ShieldCheck, Wifi];

export const Why = () => {
  const { t } = useI18n();
  return (
    <section id="why" className="relative py-28 md:py-36 bg-background overflow-hidden">
      {/* Decorative blobs */}
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label-eyebrow">{t.why.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
                {t.why.title}
              </h2>
              <div className="gold-divider mt-8 max-w-[180px]" />
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {t.why.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            const isBlue = i % 2 === 1;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group relative h-full p-7 rounded-sm bg-card border border-border shadow-card overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className={`absolute -top-10 -right-10 h-24 w-24 rounded-full ${isBlue ? "bg-secondary/15" : "bg-primary/20"} blur-2xl transition-all group-hover:scale-150`} />
                  <div className="relative">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-sm ${isBlue ? "bg-gradient-blue text-secondary-foreground" : "bg-gradient-gold text-primary-foreground"} mb-6 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon size={26} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
