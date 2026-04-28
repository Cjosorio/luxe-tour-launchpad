import { useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import { fleet, type Vehicle } from "@/data/fleet";
import { buildWhatsAppLink } from "@/data/config";

export const Fleet = () => {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<Vehicle | null>(null);
  const [slide, setSlide] = useState(0);

  const open = (v: Vehicle) => {
    setActive(v);
    setSlide(0);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setActive(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="fleet" className="relative py-28 md:py-40 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="label-eyebrow">{t.fleet.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
                {t.fleet.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <Reveal delay={0.15}>
              <p className="text-foreground/70 leading-relaxed">{t.fleet.subtitle}</p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {fleet.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <button
                onClick={() => open(v)}
                className="group relative block w-full text-left aspect-[5/4] overflow-hidden rounded-sm shadow-card hover-lift bg-card"
              >
                <img
                  src={v.cover}
                  alt={v.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                <div className="absolute top-6 right-6 h-11 w-11 rounded-full bg-background/90 backdrop-blur grid place-items-center text-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-card">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-background">{v.name}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-primary-glow">
                      <Users size={14} />
                      <span>{v.capacity} {t.fleet.pax}</span>
                    </div>
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-background/70">
                    0{i + 1}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-md overflow-y-auto"
            onClick={close}
          >
            <button
              onClick={close}
              className="fixed top-6 right-6 z-10 h-11 w-11 rounded-full bg-foreground text-background grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="container py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Slider */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={slide}
                      src={active.gallery[slide]}
                      alt={`${active.name} ${slide + 1}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <button
                    onClick={() => setSlide((s) => (s - 1 + active.gallery.length) % active.gallery.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card/90 backdrop-blur grid place-items-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-card"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setSlide((s) => (s + 1) % active.gallery.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card/90 backdrop-blur grid place-items-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-card"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-4 right-4 text-xs tracking-widest text-foreground bg-card/90 backdrop-blur px-3 py-1 rounded-full shadow-card">
                    {String(slide + 1).padStart(2, "0")} / {String(active.gallery.length).padStart(2, "0")}
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {active.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`aspect-square overflow-hidden rounded-sm transition-all ${i === slide ? "ring-2 ring-primary opacity-100" : "opacity-50 hover:opacity-100"}`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="lg:pt-4">
                <span className="label-eyebrow">{t.fleet.eyebrow}</span>
                <h3 className="mt-4 font-serif text-5xl md:text-6xl text-foreground">
                  {active.name}
                </h3>
                <div className="mt-6 flex items-center gap-3 text-foreground">
                  <Users size={18} />
                  <span className="font-medium">{active.capacity} {t.fleet.pax}</span>
                </div>
                <div className="gold-divider my-8 max-w-[120px]" />
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {active.description[lang]}
                </p>

                <div className="mt-10">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-5">
                    {t.fleet.featuresLabel}
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {active.features[lang].map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWhatsAppLink(t.whatsapp.fleetMsg(active.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 bg-foreground text-background font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {t.cta.quoteThis}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};