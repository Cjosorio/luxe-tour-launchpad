import { useState, useEffect } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Users, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/i18n";
import { Reveal } from "@/components/Reveal";
import { fleet, type Vehicle } from "@/data/fleet";
import { buildWhatsAppLink } from "@/data/config";

export const Fleet = () => {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<Vehicle | null>(null);
  const [slide, setSlide] = useState(0);
  const [carouselIdx, setCarouselIdx] = useState(0);

  // Auto-advance featured carousel every 5s
  useEffect(() => {
    if (active) return;
    const interval = setInterval(() => {
      setCarouselIdx((i) => (i + 1) % fleet.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [active]);

  const open = (v: Vehicle) => {
    setActive(v);
    setSlide(0);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setActive(null);
    document.body.style.overflow = "";
  };

  const featured = fleet[carouselIdx];

  return (
    <section id="fleet" className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div aria-hidden className="absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
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
              <p className="text-muted-foreground leading-relaxed">{t.fleet.subtitle}</p>
            </Reveal>
          </div>
        </div>

        {/* Featured carousel */}
        <Reveal>
          <div className="relative mb-12 rounded-sm overflow-hidden bg-card border border-border shadow-elegant">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={featured.id}
                    src={featured.cover}
                    alt={featured.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-transparent to-transparent lg:to-card/40" />
                {featured.badge && (
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold shadow-gold">
                    <Sparkles size={12} /> {featured.badge[lang]}
                  </div>
                )}
              </div>
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featured.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
                      0{carouselIdx + 1} / 0{fleet.length}
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-foreground">{featured.name}</h3>
                    <div className="mt-4 flex items-center gap-2 text-secondary font-medium">
                      <Users size={16} />
                      <span>
                        {featured.capacityLabel ? featured.capacityLabel[lang] : `${featured.capacity} ${t.fleet.pax}`}
                      </span>
                    </div>
                    <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
                      {featured.description[lang]}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs">
                      <span className="font-semibold">{t.fleet.idealLabel}:</span> {featured.ideal[lang]}
                    </div>
                    <button
                      onClick={() => open(featured)}
                      className="mt-7 inline-flex items-center gap-3 px-6 py-3 bg-gradient-gold text-primary-foreground font-medium rounded-sm shadow-gold hover:scale-[1.03] transition-transform"
                    >
                      {t.cta.viewDetails}
                      <ArrowUpRight size={16} />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Carousel pagination dots */}
            <div className="absolute bottom-5 left-5 flex gap-2">
              {fleet.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIdx(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === carouselIdx ? "w-8 bg-primary" : "w-1.5 bg-foreground/30 hover:bg-foreground/60"
                  }`}
                />
              ))}
            </div>
            <div className="absolute bottom-5 right-5 flex gap-2">
              <button
                onClick={() => setCarouselIdx((i) => (i - 1 + fleet.length) % fleet.length)}
                className="h-9 w-9 rounded-full bg-background/80 backdrop-blur grid place-items-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCarouselIdx((i) => (i + 1) % fleet.length)}
                className="h-9 w-9 rounded-full bg-background/80 backdrop-blur grid place-items-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Grid of all vehicles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fleet.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.06}>
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
                {v.badge && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary text-primary-foreground rounded-full text-[9px] tracking-[0.2em] uppercase font-semibold shadow">
                    <Sparkles size={10} /> {v.badge[lang]}
                  </div>
                )}
                <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-background/85 backdrop-blur-md grid place-items-center text-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <ArrowUpRight size={16} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl text-background">{v.name}</h3>
                  <div className="mt-1.5 flex items-center gap-2 text-sm text-primary">
                    <Users size={13} />
                    <span>
                      {v.capacityLabel ? v.capacityLabel[lang] : `${v.capacity} ${t.fleet.pax}`}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-background/80 line-clamp-1">
                    {t.fleet.idealLabel}: {v.ideal[lang]}
                  </div>
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
            className="fixed inset-0 z-[60] bg-foreground/70 backdrop-blur-md overflow-y-auto"
            onClick={close}
          >
            <button
              onClick={close}
              className="fixed top-6 right-6 z-10 h-11 w-11 rounded-full bg-card border border-border grid place-items-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-elegant"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="container py-20 md:py-24"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-background rounded-sm shadow-elegant p-8 md:p-12 grid lg:grid-cols-2 gap-12">
                {/* Slider */}
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/90 backdrop-blur grid place-items-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setSlide((s) => (s + 1) % active.gallery.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/90 backdrop-blur grid place-items-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-4 right-4 text-xs tracking-widest text-foreground bg-background/90 backdrop-blur px-3 py-1 rounded-full">
                      {String(slide + 1).padStart(2, "0")} / {String(active.gallery.length).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {active.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSlide(i)}
                        className={`aspect-square overflow-hidden rounded-sm transition-all ${i === slide ? "ring-2 ring-primary opacity-100" : "opacity-60 hover:opacity-100"}`}
                      >
                        <img src={img} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div>
                  {active.badge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold mb-4">
                      <Sparkles size={11} /> {active.badge[lang]}
                    </div>
                  )}
                  <span className="label-eyebrow">{t.fleet.eyebrow}</span>
                  <h3 className="mt-3 font-serif text-5xl md:text-6xl text-foreground">{active.name}</h3>
                  <div className="mt-5 flex items-center gap-3 text-secondary font-medium">
                    <Users size={18} />
                    <span>{active.capacityLabel ? active.capacityLabel[lang] : `${active.capacity} ${t.fleet.pax}`}</span>
                  </div>
                  <div className="gold-divider my-6 max-w-[120px]" />
                  <p className="text-muted-foreground leading-relaxed">{active.description[lang]}</p>

                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm">
                    <span className="font-semibold">{t.fleet.idealLabel}:</span> {active.ideal[lang]}
                  </div>

                  <div className="mt-8">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4">
                      {t.fleet.featuresLabel}
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {active.features[lang].map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={buildWhatsAppLink(t.whatsapp.fleetMsg(active.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-gold text-primary-foreground font-medium rounded-sm shadow-gold hover:scale-[1.03] transition-transform"
                  >
                    {t.cta.quoteThis}
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
