import { Instagram, Facebook, Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import { SOCIAL } from "@/data/config";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="relative bg-background border-t border-border/60 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-sm bg-gradient-gold grid place-items-center shadow-gold">
                <span className="font-serif text-lg text-primary-foreground font-semibold">C</span>
              </div>
              <div>
                <div className="font-serif text-lg text-foreground">{t.brandFull}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  Premium Fleet
                </div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-5">
              {t.footer.nav}
            </div>
            <ul className="space-y-3">
              {[
                { href: "#why", label: t.nav.why },
                { href: "#services", label: t.nav.services },
                { href: "#fleet", label: t.nav.fleet },
                { href: "#contact", label: t.nav.contact },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 hover:text-primary transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-5">
              {t.footer.follow}
            </div>
            <div className="flex gap-3">
              {[
                { href: SOCIAL.instagram, Icon: Instagram, label: "Instagram" },
                { href: SOCIAL.facebook, Icon: Facebook, label: "Facebook" },
                { href: SOCIAL.email, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-full border border-border grid place-items-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} {t.brandFull}. {t.footer.rights}
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
};