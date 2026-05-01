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
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-sm bg-gradient-gold grid place-items-center shadow-gold transition-transform group-hover:rotate-6">
            <span className="font-serif text-xl text-primary-foreground font-semibold">C</span>
          </div>
          <div className="leading-tight hidden sm:block">
            <div className={cn(
              "font-serif text-base transition-colors",
              scrolled ? "text-foreground" : "text-background drop-shadow"
            )}>{t.brandFull}</div>
            <div className={cn(
              "text-[10px] tracking-[0.25em] uppercase transition-colors",
              scrolled ? "text-muted-foreground" : "text-background/80"
            )}>Honduras • CA</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/90 hover:text-primary drop-shadow"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className={cn(
            "hidden md:flex items-center gap-1 rounded-full px-1 py-1 transition-colors",
            scrolled ? "border border-border bg-background" : "border border-background/40 bg-background/20 backdrop-blur"
          )}>
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full transition-all",
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-background hover:text-primary"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-foreground" : "text-background"
            )}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-xl border-t border-border/40",
          open ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <nav className="container py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-serif text-2xl text-foreground border-b border-border/40"
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
                    : "border-border text-muted-foreground"
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