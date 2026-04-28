import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n, type Lang } from "@/i18n";
import { cn } from "@/lib/utils";

const langs: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export const Header = () => {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#why", label: t.nav.why },
    { href: "#services", label: t.nav.services },
    { href: "#fleet", label: t.nav.fleet },
    { href: "#story", label: t.nav.story },
    { href: "#coverage", label: t.nav.coverage },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border py-3"
          : "bg-background/60 backdrop-blur-md py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo placeholder — ready to host the company logo image */}
        <a href="#top" className="flex items-center gap-4 group">
          <div className="relative h-12 w-[180px] sm:w-[220px] border border-foreground/15 bg-card flex items-center justify-center overflow-hidden group-hover:border-primary transition-colors">
            <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
              {t.brand} · Logo
            </span>
            <span className="absolute top-0 left-0 h-1 w-6 bg-primary" />
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.25em] font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 border border-foreground/15 rounded-full px-1 py-1 bg-card">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full transition-all",
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] font-semibold shadow-gold transition-colors"
          >
            {t.cta.quote}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-xl border-t border-border",
          open ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <nav className="container py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-serif text-3xl text-foreground border-b border-border/60 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-5">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-all",
                  lang === l.code
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-foreground/15 text-foreground/70"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};